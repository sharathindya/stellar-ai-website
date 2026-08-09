import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DATA_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '.data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'contact-submissions.json');

async function readSubmissions() {
    try {
        const content = await fs.readFile(SUBMISSIONS_FILE, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        if (error?.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}

async function writeSubmissions(submissions) {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf8');
}

function readRequestBody(request) {
    return new Promise((resolve, reject) => {
        let body = '';
        request.on('data', (chunk) => {
            body += chunk.toString();
        });
        request.on('end', () => {
            if (!body) {
                resolve({});
                return;
            }

            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(new Error('Invalid JSON body'));
            }
        });
        request.on('error', reject);
    });
}

export default function devMockContactPlugin() {
    return {
        name: 'vite:dev-contact-backend',
        apply: 'serve',
        enforce: 'pre',
        configureServer(server) {
            server.middlewares.use('/api/contact', async (request, response, next) => {
                if (request.method === 'OPTIONS') {
                    response.statusCode = 204;
                    response.end();
                    return;
                }

                if (request.method !== 'POST') {
                    return next();
                }

                try {
                    const payload = await readRequestBody(request);
                    const submission = {
                        id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                        createdAt: new Date().toISOString(),
                        name: String(payload.name ?? '').trim(),
                        email: String(payload.email ?? '').trim(),
                        company: String(payload.company ?? '').trim(),
                        phone: String(payload.phone ?? '').trim(),
                        interest: String(payload.interest ?? '').trim(),
                        message: String(payload.message ?? '').trim(),
                    };

                    if (!submission.name || !submission.email || !submission.message) {
                        response.statusCode = 400;
                        response.setHeader('Content-Type', 'application/json');
                        response.end(JSON.stringify({ ok: false, message: 'Name, email and message are required.' }));
                        return;
                    }

                    const submissions = await readSubmissions();
                    submissions.unshift(submission);
                    await writeSubmissions(submissions);

                    response.statusCode = 201;
                    response.setHeader('Content-Type', 'application/json');
                    response.end(JSON.stringify({ ok: true, message: 'Contact submission stored successfully.', id: submission.id }));
                } catch (error) {
                    response.statusCode = 500;
                    response.setHeader('Content-Type', 'application/json');
                    response.end(JSON.stringify({ ok: false, message: error.message || 'Unable to store contact submission.' }));
                }
            });
        },
    };
}
