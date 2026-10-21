import React from 'react';
import { MessageSquare, Plug, ShieldCheck, ArrowRight, Mail } from 'lucide-react';

const STEPS = [
    { icon: MessageSquare, title: 'Tell us the task', desc: 'Share the repetitive work: support tickets, claims, documents, leads or reports.' },
    { icon: Plug, title: 'We build and connect your agent', desc: 'An LLM-powered agent, grounded in your data with RAG and plugged into the tools you already use.' },
    { icon: ShieldCheck, title: 'You approve, it runs', desc: 'Human-in-the-loop checks and guardrails on every step. Go live in days, then scale.' },
];

export const HowItWorks = () => (
    <section id="how-it-works" aria-labelledby="hiw-title" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2 id="hiw-title" className="section-title mt-3">Three steps to your first AI agent</h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
                {STEPS.map((s, i) => (
                    <li key={s.title} className="icon-card">
                        <div className="flex items-center gap-3">
                            <span className="icon-chip"><s.icon className="h-5 w-5" aria-hidden="true" /></span>
                            <span className="font-mono text-xs text-[#8a8a8a]">STEP {i + 1}</span>
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-[#f5f5f5]">{s.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#a3a3a3]">{s.desc}</p>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

export const CtaBand = ({ primaryHref = '#contact', primaryLabel = 'Book a free call', title = 'Ready to put AI agents to work?', sub = 'Start with one workflow. We will scope it, build it and hand it over with guardrails in place.' }) => (
    <section aria-label="Get started" className="px-6 py-16 lg:px-8">
        <div className="cta-band mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl p-8 sm:p-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#f5f5f5] sm:text-4xl">{title}</h2>
                <p className="mt-3 text-[#a3a3a3]">{sub}</p>
            </div>
            <div className="flex flex-wrap gap-3">
                <a href={primaryHref} className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300">
                    {primaryLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="mailto:support@stellaragents.in" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-white/15 px-6 text-sm font-semibold text-[#e5e5e5] transition hover:border-white/40">
                    <Mail className="h-4 w-4 text-neutral-300" aria-hidden="true" /> support@stellaragents.in
                </a>
            </div>
        </div>
    </section>
);
