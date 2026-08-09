import React, { useState } from 'react';
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

const INTERESTS = [
    'Agentic AI Solutions',
    'AI Applications & Tools',
    'Agent Migration & Optimisation',
    'AI Based Products',
    'Workflow Automations',
    'AI Certification Courses',
];

const empty = { name: '', email: '', company: '', phone: '', interest: INTERESTS[0], message: '' };

const field =
    'w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20';

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL || (import.meta.env.DEV ? '/api/contact' : '/contact-handler.php');

const ContactForm = () => {
    const [form, setForm] = useState(empty);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setError('');
        try {
            if (!CONTACT_ENDPOINT) {
                throw new Error('No contact endpoint is available. Set VITE_CONTACT_API_URL or deploy the PHP handler at /contact-handler.php.');
            }

            const response = await fetch(CONTACT_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    source: 'stellar-ai-agents',
                    submittedAt: new Date().toISOString(),
                }),
            });

            const contentType = response.headers.get('content-type') || '';
            const data = contentType.includes('application/json')
                ? await response.json().catch(() => null)
                : await response.text().catch(() => null);

            if (!response.ok) {
                const message = typeof data === 'string' ? data : data?.message || data?.error || 'Submission failed.';
                throw new Error(message);
            }

            setForm(empty);
            setStatus('done');
        } catch (err) {
            setError(err?.message || 'Something went wrong. Please try again.');
            setStatus('error');
        }
    };

    if (status === 'done') {
        return (
            <div className="flex flex-col items-start gap-4 rounded-sm border border-accent/40 bg-accent/10 p-8">
                <CheckCircle2 className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">Enquiry received</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        A solutions architect will respond within one business day with next steps and a proposed
                        discovery agenda.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-sm font-medium text-primary underline underline-offset-4"
                >
                    Submit another enquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="cf-name" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Full name</label>
                    <input id="cf-name" required value={form.name} onChange={set('name')} className={field} placeholder="Priya Raghavan" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="cf-email" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Work email</label>
                    <input id="cf-email" type="email" required value={form.email} onChange={set('email')} className={field} placeholder="priya@company.com" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="cf-company" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Organisation</label>
                    <input id="cf-company" value={form.company} onChange={set('company')} className={field} placeholder="Company name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="cf-phone" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone (optional)</label>
                    <input id="cf-phone" value={form.phone} onChange={set('phone')} className={field} placeholder="+1 555 0100" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="cf-interest" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Area of interest</label>
                <select id="cf-interest" value={form.interest} onChange={set('interest')} className={field}>
                    {INTERESTS.map((i) => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="cf-message" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What are you trying to solve?</label>
                <textarea id="cf-message" required rows={5} value={form.message} onChange={set('message')} className={field} placeholder="Processes, systems, volumes, timelines..." />
            </div>

            {status === 'error' && (
                <p className="flex items-start gap-2 text-sm text-destructive">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                    {error}
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-primary px-8 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90 active:scale-[0.98] disabled:opacity-60"
            >
                {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === 'loading' ? 'Sending' : 'Request a consultation'}
            </button>
        </form>
    );
};

export default ContactForm;
