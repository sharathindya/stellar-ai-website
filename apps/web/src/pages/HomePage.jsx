import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
    Orbit, Rocket, Cpu, CircuitBoard, Workflow, BookOpen, Satellite,
    Palette, Briefcase, Store, Microscope, School, Heart,
    ArrowUpRight, Mail, MapPin, Phone, ShieldCheck, Gauge, Sparkles,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import ContactForm from '@/components/ContactForm';
import gpt4oLogo from '../assets/brands/gpt4o.svg';
import claudeLogo from '../assets/brands/claude.svg';
import geminiLogo from '../assets/brands/gemini.svg';
import llamaLogo from '../assets/brands/llama.svg';
import mistralLogo from '../assets/brands/mistral.svg';
import n8nLogo from '../assets/brands/n8n.svg';
import zapierLogo from '../assets/brands/zapier.svg';
import makeLogo from '../assets/brands/make.svg';
import langchainLogo from '../assets/brands/langchain.svg';
import crewaiLogo from '../assets/brands/crewai.svg';
import midjourneyLogo from '../assets/brands/midjourney.svg';
import runwayLogo from '../assets/brands/runway.svg';

const HERO_IMG = 'https://images.hostinger.com/33c9faca-ec5f-454f-bca0-1fedf56573f6.png';
const TEAM_IMG = 'https://images.hostinger.com/b9afda19-d1a1-40ea-97e7-22f1a0c03445.png';
const TRAIN_IMG = 'https://images.hostinger.com/2c3f8741-0364-4608-b141-ca7f69a615a2.png';

const SERVICES = [
    {
        icon: Orbit,
        title: 'Healthcare AI & Clinical Automation',
        summary:
            'Agent suites for Revenue Cycle Management (RCM), claim denial resolution, clinical triage automation and EHR integrations with DPDP & HIPAA-aware controls.',
        points: ['RCM claim denial analysis & appeals', 'E-Prescription & triage workflows', 'ABHA / ABDM health ID integration'],
    },
    {
        icon: Rocket,
        title: 'Growth & Revenue Automation',
        summary:
            'Autonomous co-founder agents for founders and growth teams — grant and pitch generation, lead nurturing, and pipeline automation.',
        points: ['Pitch & grant generation', 'Lead generation & enrichment', 'Sales outreach automation'],
    },
    {
        icon: Cpu,
        title: 'AI Ops & Integrations',
        summary:
            'Platform-grade connectors, observability, and cost/latency tuning to run agents reliably across cloud and on-prem systems.',
        points: ['Connector development', 'Monitoring & observability', 'Cost & latency optimisation'],
    },
    {
        icon: CircuitBoard,
        title: 'Generative AI & Content Automation',
        summary:
            'Scale content, documentation and customer experiences with controlled generative models and audit-able content pipelines.',
        points: ['Content generation & moderation', 'Document intelligence', 'Personalised customer journeys'],
    },
    {
        icon: Workflow,
        title: 'Process & Workflow Automation',
        summary:
            'Design and deploy straight-through processing for back-office workflows, reducing errors and cycle time while preserving human oversight.',
        points: ['Process discovery & mapping', 'STP implementation', 'Exception handling & escalation'],
    },
    {
        icon: BookOpen,
        title: 'Training & In-Demand Courses',
        summary:
            'Practical, hands-on courses focused on modern agent design, LLM engineering and MLOps so teams can ship production-ready AI.',
        points: ['Prompt engineering & LLM ops', 'Agentic systems design', 'Responsible AI & compliance'],
    },
];

const OUTCOMES = [
    { icon: Gauge, value: 62, suffix: '%', label: 'Average reduction in manual handling time across automated processes' },
    { icon: ShieldCheck, value: 99, suffix: '%', label: 'Target accuracy on straight-through processing with review gates' },
    { icon: Sparkles, value: 9, suffix: ' wks', label: 'Typical time from discovery workshop to first production agent' },
];

const STEPS = [
    ['01', 'Discovery & process mapping', 'We audit workflows, systems and data readiness, then quantify the effort and error cost of each candidate process.'],
    ['02', 'Architecture & pilot', 'A scoped pilot proves the agent design, integration path and evaluation criteria before enterprise commitment.'],
    ['03', 'Production rollout', 'Hardened deployment with observability, guardrails, escalation policy and change management for affected teams.'],
    ['04', 'Optimise & enable', 'Continuous evaluation, cost tuning and certification training so your own teams own the platform.'],
];

const TICKER = [
    'Custom agents for students', 'AI for creators & professionals', 'Built for startups & MSMEs',
    'Research, education & wellness', 'Workflows that scale', 'Secure, practical automation',
];

const AUDIENCE_BADGES = [
    'Students & scholars',
    'Individuals & artists',
    'Working professionals',
    'Startups & solo founders',
    'MSMEs & shops',
    'Researchers & scientists',
    'Educators & trainers',
    'Social media & creators',
    'Personal well-being',
];

const CATALOG = [
    {
        icon: Satellite,
        title: 'Students & scholars',
        summary: 'Study copilots, research briefs, structured notes and personalised revision workflows for learning and growth.',
        points: ['Learning copilots', 'Research summaries', 'Assignment support'],
    },
    {
        icon: Palette,
        title: 'Individuals & artists',
        summary: 'Creative co-pilots for writing, planning, visual ideation and productivity in everyday life.',
        points: ['Content ideation', 'Creative prompts', 'Daily productivity'],
    },
    {
        icon: Briefcase,
        title: 'Working professionals',
        summary: 'Agents that turn inbox overload, meeting notes and repetitive tasks into calm, automated execution.',
        points: ['Email & note drafting', 'Task automation', 'Knowledge capture'],
    },
    {
        icon: Rocket,
        title: 'Startups & solo founders',
        summary: 'Founder ops, lead generation, pitch support and customer communication systems that can ship fast.',
        points: ['Pitch deck support', 'Lead-gen workflows', 'Growth playbooks'],
    },
    {
        icon: Store,
        title: 'MSMEs & shops',
        summary: 'Affordable automation for customer support, follow-ups, WhatsApp messages and local-business operations.',
        points: ['Support automation', 'Follow-up agents', 'Local workflow support'],
    },
    {
        icon: Microscope,
        title: 'Researchers & scientists',
        summary: 'Literature review support, experiment notes and publication-ready summaries for demanding technical work.',
        points: ['Paper summaries', 'Lab documentation', 'Insight drafting'],
    },
    {
        icon: School,
        title: 'Educators & training teams',
        summary: 'Lesson planning, course content and assessment assistants that shorten delivery time without losing quality.',
        points: ['Lesson planning', 'Course content', 'Assessment support'],
    },
    {
        icon: Sparkles,
        title: 'Social media & creators',
        summary: 'Content calendars, brand copy and channel workflows for creators who need consistency without burnout.',
        points: ['Content planning', 'Promo copy', 'Channel operations'],
    },
    {
        icon: Heart,
        title: 'Personal well-being',
        summary: 'Private, supportive routines for journaling, habit tracking and calm planning that fit into real life.',
        points: ['Reflection prompts', 'Habit planning', 'Well-being routines'],
    },
];

const STACK_ITEMS = [
    { name: 'GPT-4o', tag: 'Reasoning + multimodal', mark: 'G4', logo: gpt4oLogo },
    { name: 'Claude', tag: 'Long-context analysis', mark: 'CL', logo: claudeLogo },
    { name: 'Gemini', tag: 'Google ecosystem workflows', mark: 'GM', logo: geminiLogo },
    { name: 'Llama', tag: 'Open-source deployment', mark: 'LL', logo: llamaLogo },
    { name: 'Mistral', tag: 'Efficient inference', mark: 'MS', logo: mistralLogo },
    { name: 'n8n', tag: 'Automation engine', mark: 'N8', logo: n8nLogo },
    { name: 'Zapier', tag: 'No-code workflows', mark: 'ZP', logo: zapierLogo },
    { name: 'Make', tag: 'Visual orchestration', mark: 'MK', logo: makeLogo },
    { name: 'LangChain', tag: 'Agent orchestration', mark: 'LC', logo: langchainLogo },
    { name: 'CrewAI', tag: 'Multi-agent teams', mark: 'CA', logo: crewaiLogo },
    { name: 'Midjourney', tag: 'Visual generation', mark: 'MJ', logo: midjourneyLogo },
    { name: 'Runway', tag: 'Video creation', mark: 'RW', logo: runwayLogo },
];

const COURSE_PATHWAYS = [
    ['Prompt Engineering', 'Write better prompts, structure tasks and build reliable AI routines.'],
    ['Agentic Systems Design', 'Create multi-step workflows, tool use and high-quality agent behaviour.'],
    ['RAG & AI Ops', 'Connect private data, evaluate outputs and deploy with confidence.'],
    ['Responsible AI & Compliance', 'Build trustworthy systems with governance, privacy and human control.'],
];

const NAV = [
    ['Services', '#services'],
    ['Catalogue', '#catalogue'],
    ['Outcomes', '#outcomes'],
    ['Approach', '#approach'],
    ['Training', '#training'],
    ['Contact', '#contact'],
];

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>Stellar AI Agents | Enterprise AI, Agents & Workflow Automation</title>
                <meta
                    name="description"
                    content="Enterprise partner for agentic AI solutions, AI applications, agent migration and optimisation, workflow automation and AI certification courses for organisations."
                />
            </Helmet>
            <Seo
                title="Stellar AI Agents"
                description="Stellar AI Agents — Enterprise AI, agentic systems, and practical MLOps, with a focus on healthcare, growth automation and secure deployments."
                image={HERO_IMG}
                siteName="Stellar AI Agents"
            />

            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
                <div className="mx-auto flex h-[72px] max-w-[90rem] items-center gap-8 px-6 lg:px-10">
                    <a href="#top" className="flex items-center gap-3">
                        <span className="brand-ring grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-600 text-slate-950 shadow-[0_20px_50px_rgba(34,211,238,0.25)]">
                            <Orbit className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <span className="font-display text-sm font-semibold leading-tight tracking-tight">
                            <span className="block text-white">Stellar AI Agents</span>
                            <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-cyan-300">stellaragents.in</span>
                        </span>
                    </a>
                    <nav className="ml-auto hidden items-center gap-7 lg:flex">
                        {NAV.map(([label, href]) => (
                            <a key={href} href={href} className="text-sm text-muted-foreground transition hover:text-foreground">
                                {label}
                            </a>
                        ))}
                    </nav>
                    <a
                        href="#contact"
                        className="ml-auto inline-flex min-h-[44px] items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 text-xs font-semibold uppercase tracking-widest text-cyan-100 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition hover:bg-cyan-400/20 active:scale-[0.98] lg:ml-0"
                    >
                        Request Demo
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section id="top" className="relative overflow-hidden border-b border-border bg-[hsl(var(--ink))] text-white">
                <img src={HERO_IMG} alt="Enterprise operations centre with teams reviewing automated workflow dashboards" className="absolute inset-0 h-full w-full object-cover opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--ink))] via-[hsl(var(--ink))]/90 to-[hsl(var(--ink))]/40" />
                <div className="relative mx-auto grid min-h-[100dvh] max-w-[90rem] items-center gap-12 px-6 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
                           className="brand-chip inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200"
                        >
                           <span className="h-2 w-2 rounded-full bg-cyan-300" />
                           Custom Agentic AI for every kind of builder
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
                            className="mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
                        >
                            Build a premium AI product for
                            <span className="relative ml-3 inline-block text-[hsl(var(--accent))]">
                                students, founders, creators and teams
                                <svg viewBox="0 0 300 12" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-[hsl(var(--accent))]/70" aria-hidden="true">
                                    <path d="M2 8 C 80 2, 220 2, 298 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
                            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70"
                        >
                            We design custom agentic AI services for students, artists, working professionals, startups, MSMEs,
                            researchers, educators, shops, social media teams and people seeking practical support for work,
                            creativity and well-being.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <a href="#contact" className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 text-sm font-semibold uppercase tracking-widest text-slate-950 shadow-[0_20px_45px_rgba(34,211,238,0.28)] transition hover:brightness-110 active:scale-[0.98]">
                                Book free consultation <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                            </a>
                            <a href="#demo" className="inline-flex min-h-[52px] items-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10 active:scale-[0.98]">
                                Request free demo
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }}
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            {['Free 20-min consultation', 'Live demo in 48 hrs', 'Remote or on-site delivery'].map((item) => (
                                <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                    <div className="hidden lg:block">
                       <div className="brand-surface rounded-[2rem] border border-white/15 p-6 shadow-[0_30px_100px_rgba(2,6,23,0.35)] backdrop-blur-2xl">
                           <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
                               <div className="flex items-center gap-3">
                                   <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950">
                                       <Orbit className="h-5 w-5" strokeWidth={1.8} />
                                   </span>
                                    <div>
                                       <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-200">Why founders choose us</p>
                                       <p className="font-display text-lg font-semibold text-white">Fast pilots. Premium execution.</p>
                                   </div>
                               </div>
                               <div className="mt-6 space-y-3 text-sm text-white/75">
                                   <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Launch custom AI pilots in days, not quarters.</div>
                                   <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Keep control with secure, human-in-the-loop workflows.</div>
                                   <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Support everything from research to growth to wellness.</div>
                               </div>
                           </div>
                           <div className="mt-4 grid gap-3 sm:grid-cols-2">
                               {OUTCOMES.map((o) => (
                                   <div key={o.label} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                                       <o.icon className="h-5 w-5 shrink-0 text-cyan-300" strokeWidth={1.5} />
                                       <div className="mt-3 font-display text-2xl font-semibold text-white">
                                           <CountUp value={o.value} suffix={o.suffix} />
                                       </div>
                                       <p className="mt-1 text-sm leading-relaxed text-white/60">{o.label}</p>
                                   </div>
                               ))}
                           </div>
                       </div>
                    </div>
                </div>
            </section>

            {/* Ticker */}
            <div className="overflow-hidden border-b border-border bg-secondary py-4">
                <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
                    {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
                        <span key={i} className="flex items-center gap-10 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
                            {t}<span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                        </span>
                    ))}
                </div>
            </div>

            {/* Services */}
            <section id="services" className="mx-auto max-w-[90rem] px-6 py-24 lg:px-10 lg:py-32">
                <Reveal>
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">What we deliver</p>
                        <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                            Custom agentic AI services for real outcomes — not generic demos
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            Every engagement is shaped around a real need: study support, creative work, founder operations,
                            business automation, research, education, wellness and more.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-16 border-t border-border">
                    {SERVICES.map((s, i) => (
                        <Reveal key={s.title} delay={i * 0.05}>
                            <article className="group grid gap-6 border-b border-border py-10 md:grid-cols-[auto_1fr_1fr] md:gap-12">
                                <div className="flex items-start gap-5 md:w-72">
                                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-primary/5 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                                        <s.icon className="h-6 w-6" strokeWidth={1.5} />
                                    </span>
                                    <h3 className="font-display text-xl font-semibold leading-snug tracking-tight">{s.title}</h3>
                                </div>
                                <p className="text-base leading-relaxed text-muted-foreground">{s.summary}</p>
                                <ul className="space-y-2 md:justify-self-end">
                                    {s.points.map((p) => (
                                        <li key={p} className="flex items-center gap-3 text-sm text-foreground/80">
                                            <span className="h-px w-5 bg-[hsl(var(--accent))]" />{p}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Catalogue */}
            <section id="catalogue" className="border-y border-border bg-gradient-to-br from-[hsl(var(--accent))]/10 via-background to-transparent py-24 lg:py-32">
                <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
                    <Reveal>
                        <div className="max-w-3xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Custom services catalogue</p>
                            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                                Agentic AI for real work, real creativity and real life
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                                We help people and teams move from ideas to execution with custom AI agents, elegant workflows and in-demand course pathways.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {AUDIENCE_BADGES.map((badge) => (
                            <span key={badge} className="rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-sm text-white/75 shadow-[0_12px_28px_rgba(2,6,23,0.16)]">
                                {badge}
                            </span>
                        ))}
                    </div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-3">
                        {CATALOG.map((item, index) => (
                            <Reveal key={item.title} delay={index * 0.04}>
                                <article className="rounded-3xl border border-white/10 bg-slate-950/40 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.18)] backdrop-blur">
                                    <div className="flex items-center gap-3">
                                        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 shadow-[0_12px_25px_rgba(34,211,238,0.2)]">
                                            <item.icon className="h-5 w-5" strokeWidth={1.5} />
                                        </span>
                                        <h3 className="font-display text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                                    <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                                        {item.points.map((point) => (
                                            <li key={point} className="flex items-center gap-3">
                                                <span className="h-px w-5 bg-[hsl(var(--accent))]" />{point}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
                        <div className="brand-surface rounded-[2rem] border border-white/10 bg-[hsl(var(--ink))]/90 p-8 text-white shadow-[0_25px_70px_rgba(2,6,23,0.25)]">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Current AI stack</p>
                            <h3 className="mt-4 font-display text-2xl font-semibold">Modern models, tools and workflow engines</h3>
                            <div className="mt-8 grid gap-3 md:grid-cols-2">
                                {STACK_ITEMS.map(({ name, tag, logo }) => (
                                    <div key={name} className="brand-glow-card flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/70 px-4 py-3 text-sm text-white/80 shadow-[0_18px_42px_rgba(2,6,23,0.22)]">
                                        <img src={logo} alt={`${name} logo`} className="h-10 w-10 rounded-xl border border-white/15 bg-white/95 object-contain p-1.5" />
                                        <span>
                                            <span className="block font-semibold text-white">{name}</span>
                                            <span className="block text-xs text-white/60">{tag}</span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-border bg-background p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">In-demand course pathways</p>
                            <h3 className="mt-4 font-display text-2xl font-semibold">Courses built for the current market</h3>
                            <div className="mt-6 space-y-4">
                                {COURSE_PATHWAYS.map(([title, summary]) => (
                                    <div key={title} className="rounded-2xl border border-border bg-secondary/70 p-4">
                                        <h4 className="font-display text-lg font-semibold">{title}</h4>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section id="outcomes" className="border-y border-border bg-secondary/60">
                <div className="mx-auto grid max-w-[90rem] gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
                    <Reveal>
                        <img src={TEAM_IMG} alt="Enterprise team mapping automation opportunities on a whiteboard" className="h-full min-h-[320px] w-full rounded-sm object-cover" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why organisations engage us</p>
                            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                Effort down. Accuracy up. Transformation that survives the pilot.
                            </h2>
                            <dl className="mt-10 divide-y divide-border border-y border-border">
                                {[
                                    ['Reduce human effort', 'Repetitive review, routing, reconciliation and data entry move to agents, freeing specialists for exception work and judgement.'],
                                    ['Enable digital transformation', 'Agents bridge legacy systems without a rip-and-replace programme, so modernisation delivers value in quarters, not years.'],
                                    ['Drive tools innovation', 'Internal copilots and AI products give teams capability their current tooling cannot express.'],
                                    ['Higher accuracy and quality', 'Evaluation harnesses, guardrails and review gates make automated output auditable and consistently correct.'],
                                ].map(([t, d]) => (
                                    <div key={t} className="py-6">
                                        <dt className="font-display text-lg font-semibold">{t}</dt>
                                        <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Approach */}
            <section id="approach" className="relative overflow-hidden bg-[hsl(var(--ink))] py-24 text-white lg:py-32">
                <div className="pointer-events-none absolute inset-0 opacity-[0.07] grid-lines" />
                <div className="relative mx-auto max-w-[72rem] px-6 lg:px-10">
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(var(--accent))]">How we engage</p>
                        <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                            A delivery path built for procurement, risk and IT — not just the innovation team
                        </h2>
                    </Reveal>
                    <div className="mt-16 grid gap-px bg-white/15 sm:grid-cols-2">
                        {STEPS.map(([n, t, d], i) => (
                            <Reveal key={n} delay={i * 0.06}>
                                <div className="h-full bg-[hsl(var(--ink))] p-8">
                                    <span className="font-display text-sm font-semibold tracking-widest text-[hsl(var(--accent))]">{n}</span>
                                    <h3 className="mt-4 font-display text-xl font-semibold">{t}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/60">{d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training */}
            <section id="training" className="mx-auto max-w-[90rem] px-6 py-24 lg:px-10 lg:py-32">
                <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                    <Reveal>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">AI certification courses</p>
                            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                Certify your workforce on the systems you are about to run
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                                Cohort-based programmes for organisations and enterprises, delivered on-site or remotely and
                                mapped to the roles that will own your AI estate.
                            </p>
                            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                                {['Prompt engineering for LLMs', 'LLM fine-tuning & deployment', 'Agentic systems design', 'MLOps & observability', 'AI in healthcare (DPDP & HIPAA)', 'Responsible AI & compliance'].map((c) => (
                                    <li key={c} className="border-l-2 border-[hsl(var(--accent))] pl-4 text-sm font-medium">{c}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="mt-10 inline-flex min-h-[48px] items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary underline underline-offset-8">
                                Request the curriculum <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                            </a>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <img src={TRAIN_IMG} alt="Corporate AI certification workshop with professionals taking notes" className="w-full rounded-sm object-cover" />
                    </Reveal>
                </div>
            </section>

            {/* Free consultation & demo */}
            <section id="demo" className="border-t border-border bg-[hsl(var(--ink))]/90 py-24 lg:py-32">
                <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
                    <Reveal>
                        <div className="max-w-3xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Book a free consultation</p>
                            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                Start with a tailored AI strategy session or a live product demo.
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-white/70">
                                Choose the path that fits your stage: a high-impact discovery session for your team or a guided walkthrough of a custom agent experience.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        <Reveal delay={0.05}>
                            <div className="brand-surface rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_24px_60px_rgba(2,6,23,0.25)]">
                                <div className="flex items-center gap-3">
                                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                                       <Orbit className="h-5 w-5" strokeWidth={1.5} />
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Free consultation</p>
                                        <h3 className="font-display text-2xl font-semibold text-white">Strategy call</h3>
                                    </div>
                                </div>
                                <p className="mt-5 text-sm leading-relaxed text-white/70">
                                    We map your workflow, recommend the best agentic AI approach and outline a practical pilot scope within 30 minutes.
                                </p>
                                <a href="mailto:sarath@stellaragents.in?subject=Book%20free%20consultation" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-slate-950 transition hover:brightness-110">
                                    Book a free consultation <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                                </a>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_60px_rgba(2,6,23,0.16)]">
                                <div className="flex items-center gap-3">
                                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/10 text-violet-300">
                                       <Rocket className="h-5 w-5" strokeWidth={1.5} />
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">Free demo</p>
                                        <h3 className="font-display text-2xl font-semibold text-white">Product walkthrough</h3>
                                    </div>
                                </div>
                                <p className="mt-5 text-sm leading-relaxed text-white/70">
                                    See how a custom agent can automate a real workflow live, with a practical example for your use case and audience.
                                </p>
                                <a href="mailto:sarath@stellaragents.in?subject=Request%20a%20free%20demo" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/15">
                                    Request a free demo <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="border-t border-border bg-secondary/60">
                <div className="mx-auto grid max-w-[90rem] gap-14 px-6 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-32">
                    <Reveal>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contact</p>
                            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                Tell us the process. We&apos;ll tell you what it costs to automate it.
                            </h2>
                            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                                Share a few details and our team will come back with an assessment, a suggested pilot scope
                                and indicative timelines.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a href="mailto:sarath@stellaragents.in?subject=Book%20free%20consultation" className="inline-flex items-center gap-2 rounded-sm bg-[hsl(var(--accent))] px-4 py-2 text-sm font-semibold text-[hsl(var(--accent-foreground))]">Book a free consultation</a>
                                <a href="mailto:sarath@stellaragents.in?subject=Request%20a%20free%20demo" className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-4 py-2 text-sm font-semibold text-white">Request a free demo</a>
                            </div>

                            <div className="mt-8 space-y-4 text-sm">
                                <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" strokeWidth={1.5} /> sarath@stellaragents.in</p>
                                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" strokeWidth={1.5} /> Call or WhatsApp: <a href="tel:+919514070205" className="underline">+91 95140 70205</a></p>
                                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} /> StellarOne Health Technologies — We Work, Olympia Tech Park, Chennai, India</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="rounded-sm border border-border bg-background p-8 lg:p-10">
                            <ContactForm />
                        </div>
                    </Reveal>
                </div>
            </section>

            <footer className="bg-[hsl(var(--ink))] py-12 text-white/60">
                <div className="mx-auto flex max-w-[90rem] flex-col gap-6 px-6 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-10">
                    <p className="font-display text-white">Stellar AI Agents — StellarOne Health Technologies</p>
                    <nav className="flex flex-wrap gap-6">
                        {NAV.map(([label, href]) => (
                            <a key={href} href={href} className="transition hover:text-white">{label}</a>
                        ))}
                    </nav>
                    <p>© {new Date().getFullYear()} StellarOne Health Technologies. All rights reserved. • stellaragents.in</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
