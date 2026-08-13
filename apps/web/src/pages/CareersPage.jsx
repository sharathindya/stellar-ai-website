import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Briefcase, GraduationCap, Award, ShieldCheck, Sparkles,
    ArrowRight, CheckCircle2, DollarSign, Clock, MapPin, Search,
    Send, ChevronRight, User, Mail, FileText, Code2, Cpu, Orbit,
    BookOpen, Layers, Check, X, Building2, Zap, Trophy, HelpCircle
} from 'lucide-react';
import { toast } from 'sonner';
import Seo from '@/components/Seo';
import CurrencySelector from '@/components/CurrencySelector';
import { useCurrency } from '@/contexts/CurrencyContext';

const OPEN_POSITIONS_RAW = [
    {
        id: 'agent-architect',
        title: 'Lead Agentic Systems Architect',
        category: 'Engineering',
        type: 'Full-Time',
        location: 'San Francisco, CA / Remote',
        minSalaryUSD: 160000,
        maxSalaryUSD: 220000,
        equity: '0.5% Equity',
        desc: 'Lead the design of autonomous multi-agent orchestration frameworks, fallback routing, and sub-30ms execution pipelines.',
        reqs: ['5+ yrs in distributed systems or ML engineering', 'Deep expertise in Python, Rust, LangChain, and CrewAI', 'Experience with local model quantization (7B/14B models)', 'AWS / GCP Machine Learning Certification preferred']
    },
    {
        id: 'healthcare-engineer',
        title: 'Healthcare AI Domain Engineer',
        category: 'Healthcare AI',
        type: 'Full-Time',
        location: 'Hybrid / Remote',
        minSalaryUSD: 140000,
        maxSalaryUSD: 190000,
        equity: 'Equity Offered',
        desc: 'Architect HIPAA and ABDM / ABHA compliant clinical triage agents, RCM claim denial resolution, and EHR connectors.',
        reqs: ['3+ yrs working with healthcare data pipelines (HL7, FHIR, ABDM)', 'Solid understanding of HIPAA privacy rules & DPDP Act 2023', 'Proficiency with Claude 3.5 Sonnet & Vision OCR models']
    },
    {
        id: 'fullstack-ai',
        title: 'Full-Stack Generative AI Engineer',
        category: 'Engineering',
        type: 'Full-Time',
        location: 'Remote (Global)',
        minSalaryUSD: 130000,
        maxSalaryUSD: 175000,
        equity: 'Equity Offered',
        desc: 'Build real-time interactive agent dashboards, visual workflow builders, and GraphRAG knowledge interfaces.',
        reqs: ['Expertise in React, TypeScript, Vite, Next.js, and WebSockets', 'Experience interfacing with vector databases (Qdrant, Pinecone)', 'Demonstrated passion for sleek glassmorphic UI aesthetics']
    },
    {
        id: 'growth-lead',
        title: 'Enterprise AI Growth & Solutions Lead',
        category: 'Growth & Product',
        type: 'Full-Time',
        location: 'San Francisco / New York',
        minSalaryUSD: 120000,
        maxSalaryUSD: 160000,
        equity: 'Uncapped Commission',
        desc: 'Partner with enterprise CTOs and healthcare leaders to quantify workflow bottlenecks and scope production agent pilots.',
        reqs: ['3+ yrs in technical B2B SaaS sales or AI consulting', 'Ability to conduct technical discovery workshops', 'Strong network across MSMEs, Startups, or Healthcare enterprise']
    }
];

const INTERNSHIPS_RAW = [
    {
        id: 'ai-intern',
        title: 'AI Systems & Agentic Developer Intern',
        type: 'Paid Internship',
        duration: '3 - 6 Months',
        stipendUSD: 3500,
        desc: 'Build real-world agent tools, test synthetic web browsing agents, and contribute to production client workflows.',
        perks: ['1-on-1 mentorship with Lead Architects', 'Paid certification course access included', 'Direct fast-track to full-time engineering offer']
    },
    {
        id: 'healthcare-intern',
        title: 'Healthcare Data Pipeline & ABDM Intern',
        type: 'Paid Internship',
        duration: '3 - 6 Months',
        stipendUSD: 3200,
        desc: 'Work on ABHA health ID integrations, EHR data normalization, and clinical triage agent benchmarks.',
        perks: ['Hands-on HIPAA & ABDM compliance training', 'Co-authorship on Stellar AI research briefs']
    },
    {
        id: 'devrel-intern',
        title: 'Technical Content & DevRel AI Intern',
        type: 'Paid Internship',
        duration: '3 - 6 Months',
        stipendUSD: 2800,
        desc: 'Create interactive agent tutorials, document API connectors, and engage with the open-source developer community.',
        perks: ['Build a public portfolio of top-ranking technical guides', 'Flexible part-time or full-time schedule']
    }
];

const CERTIFICATION_COHORTS_RAW = [
    {
        id: 'cohort-architect',
        title: 'Full-Stack Agentic AI Architect Certification',
        badge: 'Most Popular',
        duration: '12 Weeks (Live Cohort)',
        priceUSD: 1499,
        stipendUSD: 500,
        summary: 'Master multi-agent orchestration, tool routing, memory design, and production deployment on real client codebases.',
        modules: [
            'Module 1: Multi-Agent Systems & Supervisor-Worker Swarms',
            'Module 2: GraphRAG & Hybrid Knowledge Graph Retrieval',
            'Module 3: Self-Healing Code Agents & Chain-of-Thought Guardrails',
            'Module 4: Real Client Capstone Project (Earn Stipend)'
        ]
    },
    {
        id: 'cohort-graphrag',
        title: 'Enterprise GraphRAG & MLOps Masterclass',
        badge: 'Advanced MLOps',
        duration: '8 Weeks (Live Cohort)',
        priceUSD: 999,
        stipendUSD: 350,
        summary: 'Learn to build zero-hallucination enterprise memory pipelines combining Knowledge Graphs (Neo4j) and Vector DBs (Qdrant).',
        modules: [
            'Module 1: Vector Storage vs. Knowledge Graph Architecture',
            'Module 2: Hybrid Querying & Context Window Optimization',
            'Module 3: LLM Observability, Cost Tracking & Token Metrics',
            'Module 4: Deploying Quantized 7B/14B Models On-Premises'
        ]
    },
    {
        id: 'cohort-healthcare',
        title: 'HIPAA & ABDM Compliant Healthcare AI Engineering',
        badge: 'Industry Specialized',
        duration: '6 Weeks (Live Cohort)',
        priceUSD: 899,
        stipendUSD: 300,
        summary: 'Deep dive into building compliant clinical agents for Revenue Cycle Management (RCM), claim appeals, and ABDM Health ID mapping.',
        modules: [
            'Module 1: HIPAA Security Rule & DPDP Act 2023 Data Controls',
            'Module 2: RCM Claim Denial Resolution & Automated Appeals',
            'Module 3: E-Prescriptions & Clinical Triage Human-in-the-Loop',
            'Module 4: ABHA / ABDM API Integration Protocols'
        ]
    }
];

const COMPLIANCE_CREDENTIALS = [
    { name: 'HIPAA Compliant', tag: 'Healthcare Security', desc: 'Strict administrative, physical, and technical safeguards for PHI data.' },
    { name: 'ABDM / ABHA Interoperable', tag: 'Health Registry API', desc: 'Unified health interface integration standards for patient data exchange.' },
    { name: 'DPDP Act 2023 Ready', tag: 'Data Protection', desc: 'Comprehensive data principal consent management and audit logging.' },
    { name: 'SOC-2 Type II Certified', tag: 'Enterprise Trust', desc: 'Rigorous third-party audit for security, availability, and confidentiality.' },
    { name: 'OWASP LLM Top 10 Guardrails', tag: 'AI Safety', desc: 'Protection against prompt injection, data poisoning, and unauthorized tool calls.' },
    { name: 'AWS & GCP ML Engineers', tag: 'Certified Staff', desc: '100% of core engineering staff hold professional cloud ML certifications.' }
];

const CareersPage = () => {
    const { format, current } = useCurrency();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [applyModalOpen, setApplyModalOpen] = useState(false);
    const [selectedRoleTitle, setSelectedRoleTitle] = useState('');
    
    // Form state
    const [candidateName, setCandidateName] = useState('');
    const [candidateEmail, setCandidateEmail] = useState('');
    const [candidatePortfolio, setCandidatePortfolio] = useState('');
    const [candidateNotes, setCandidateNotes] = useState('');

    const handleOpenApply = (title) => {
        setSelectedRoleTitle(title);
        setApplyModalOpen(true);
    };

    const handleSubmitApplication = (e) => {
        e.preventDefault();
        toast.success(`Application submitted for "${selectedRoleTitle}"! We will reach out within 48 hours.`);
        setApplyModalOpen(false);
        setCandidateName('');
        setCandidateEmail('');
        setCandidatePortfolio('');
        setCandidateNotes('');
    };

    const filteredPositions = selectedCategory === 'All'
        ? OPEN_POSITIONS_RAW
        : OPEN_POSITIONS_RAW.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
            <Helmet>
                <title>Careers & Paid Certifications | Stellar AI Startup</title>
                <meta
                    name="description"
                    content="Join Stellar AI startup roles, paid internships, and industry-accredited project certification cohorts with live client stipends."
                />
            </Helmet>

            <Seo
                title="Careers & Paid Certifications — Stellar AI"
                description="Explore startup roles, paid developer internships, and paid project certification cohorts in agentic AI."
                siteName="Stellar AI Careers"
            />

            {/* Glowing Navbar */}
            <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
                <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950">
                                <Sparkles className="h-5 w-5 text-cyan-400" />
                            </div>
                        </div>
                        <div>
                            <span className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                                Stellar<span className="glow-gradient-text">AI</span>
                            </span>
                            <span className="block text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase">CAREERS & ACADEMY</span>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-8 md:flex">
                        <a href="/" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">Home Platform</a>
                        <a href="#positions" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">Startup Roles</a>
                        <a href="#internships" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">Paid Internships</a>
                        <a href="#certifications" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">Paid Certifications</a>
                        <a href="#credentials" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">Industry Standards</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* Currency Selector */}
                        <CurrencySelector />

                        <a
                            href="#positions"
                            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition hover:bg-cyan-400"
                        >
                            <span>View Open Roles</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 overflow-hidden grid-lines">
                <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/10 blur-[120px]" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md">
                        <Trophy className="h-4 w-4 text-cyan-400" />
                        <span>JOIN THE FRONTIER OF AGENTIC AI ENGINEERING</span>
                    </div>

                    <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl max-w-4xl mx-auto">
                        Build the Future of <span className="glow-gradient-text">Autonomous Intelligence</span>
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
                        Whether you are an experienced systems architect looking for full-time startup equity, a developer seeking a paid internship, or an engineer enrolling in our accredited project certification cohorts, Stellar AI is your launching pad.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#positions"
                            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.3)] transition hover:bg-cyan-400"
                        >
                            <Briefcase className="h-4 w-4" />
                            <span>Explore 4 Open Roles</span>
                        </a>
                        <a
                            href="#certifications"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-cyan-500/40"
                        >
                            <GraduationCap className="h-4 w-4 text-cyan-400" />
                            <span>Paid Certification Cohorts</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Open Startup Positions */}
            <section id="positions" className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">FULL-TIME & CONTRACT ROLES</span>
                        <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                            Startup Career Opportunities
                        </h2>
                    </div>

                    {/* Filter Category */}
                    <div className="flex items-center gap-2 rounded-xl bg-slate-950 p-1.5 border border-slate-800">
                        {['All', 'Engineering', 'Healthcare AI', 'Growth & Product'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${selectedCategory === cat ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {filteredPositions.map((pos) => (
                        <div
                            key={pos.id}
                            className="rounded-2xl cyber-glass border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition group"
                        >
                            <div>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-mono text-cyan-300 border border-cyan-500/20">
                                        {pos.category}
                                    </span>
                                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                                        <MapPin className="h-3.5 w-3.5 text-slate-500" /> {pos.location}
                                    </span>
                                </div>

                                <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition mb-2">
                                    {pos.title}
                                </h3>
                                <p className="text-xs font-mono text-cyan-400/90 font-semibold mb-3">
                                    {format(pos.minSalaryUSD, { compact: true })} - {format(pos.maxSalaryUSD, { compact: true })} + {pos.equity}
                                </p>
                                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                    {pos.desc}
                                </p>

                                <div className="border-t border-slate-800 pt-4 mb-6">
                                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">KEY REQUIREMENTS:</p>
                                    <ul className="space-y-1.5">
                                        {pos.reqs.map((req, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button
                                onClick={() => handleOpenApply(pos.title)}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-700 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition"
                            >
                                <span>Apply For Position</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Paid Startup Internships */}
            <section id="internships" className="py-20 border-t border-slate-800 bg-slate-950/60">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">EARN WHILE YOU LEARN</span>
                        <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                            Paid Startup Internship Program
                        </h2>
                        <p className="mt-4 text-slate-400 text-sm sm:text-base">
                            Gain hands-on experience on live client agentic pipelines with dedicated 1-on-1 mentorship and monthly stipends.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {INTERNSHIPS_RAW.map((intern) => (
                            <div key={intern.id} className="rounded-2xl cyber-glass p-6 border border-slate-800 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-mono text-indigo-300 border border-indigo-500/20">
                                            {intern.type}
                                        </span>
                                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5 text-slate-500" /> {intern.duration}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-lg font-bold text-white mb-2">{intern.title}</h3>
                                    <p className="text-xs font-mono text-cyan-400 font-bold mb-4">
                                        {format(intern.stipendUSD)} / Month + Mentorship
                                    </p>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{intern.desc}</p>

                                    <div className="border-t border-slate-800 pt-4 mb-6">
                                        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">INTERNSHIP PERKS:</p>
                                        <ul className="space-y-1.5">
                                            {intern.perks.map((perk, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                                                    <Sparkles className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                                                    <span>{perk}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleOpenApply(intern.title)}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500/20 border border-indigo-500/40 py-3 text-xs font-bold uppercase tracking-wider text-indigo-200 hover:bg-indigo-500 hover:text-white transition"
                                >
                                    <span>Apply for Internship</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Paid Project Certification Courses */}
            <section id="certifications" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">ACCREDITED ACADEMY & CAPSTONE STIPENDS</span>
                    <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-5xl">
                        Paid Project Certification Cohorts
                    </h2>
                    <p className="mt-4 text-slate-400 text-base leading-relaxed">
                        Production-focused certifications taught by senior agent architects. Complete real client capstone projects and earn stipends.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {CERTIFICATION_COHORTS_RAW.map((cohort) => (
                        <div key={cohort.id} className="rounded-2xl cyber-glass p-8 border border-slate-800 hover:border-cyan-500/50 transition relative flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-mono text-cyan-300 border border-cyan-500/30">
                                        {cohort.badge}
                                    </span>
                                    <span className="text-xs font-mono text-slate-400">{cohort.duration}</span>
                                </div>

                                <h3 className="font-display text-xl font-bold text-white mb-2">{cohort.title}</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="font-display text-3xl font-extrabold text-white">{format(cohort.priceUSD)}</span>
                                    <span className="text-xs text-slate-400">/ cohort</span>
                                </div>
                                <p className="text-xs font-mono text-cyan-400 bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-500/20 mb-4">
                                    💰 Includes {format(cohort.stipendUSD)} Real Client Project Stipend
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mb-6">{cohort.summary}</p>

                                <div className="border-t border-slate-800 pt-4 mb-6">
                                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">SYLLABUS HIGHLIGHTS:</p>
                                    <ul className="space-y-2">
                                        {cohort.modules.map((mod, mIdx) => (
                                            <li key={mIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-tight">
                                                <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                                <span>{mod}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button
                                onClick={() => handleOpenApply(`Enroll: ${cohort.title}`)}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 transition"
                            >
                                <span>Apply for Cohort Enrollment</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Specs & Industry Certifications Required */}
            <section id="credentials" className="py-20 border-t border-slate-800 bg-slate-950/80">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">SECURITY & INDUSTRY STANDARDS</span>
                        <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                            Required Industry & Tech Certifications
                        </h2>
                        <p className="mt-4 text-slate-400 text-sm sm:text-base">
                            Our platform architecture and engineering staff operate strictly under enterprise compliance frameworks.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {COMPLIANCE_CREDENTIALS.map((cred, cIdx) => (
                            <div key={cIdx} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-cyan-300">{cred.tag}</span>
                                    <h4 className="font-display text-base font-bold text-white mt-1">{cred.name}</h4>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{cred.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Candidate / Enrollment Application Modal */}
            <AnimatePresence>
                {applyModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-lg rounded-2xl cyber-glass border border-slate-700 p-6 sm:p-8 shadow-2xl"
                        >
                            <button
                                onClick={() => setApplyModalOpen(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <h3 className="font-display text-xl font-bold text-white mb-1">
                                Application Form
                            </h3>
                            <p className="text-xs font-mono text-cyan-400 mb-6">{selectedRoleTitle}</p>

                            <form onSubmit={handleSubmitApplication} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={candidateName}
                                        onChange={(e) => setCandidateName(e.target.value)}
                                        placeholder="Jane Doe"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={candidateEmail}
                                        onChange={(e) => setCandidateEmail(e.target.value)}
                                        placeholder="jane@example.com"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1">GitHub / LinkedIn / Portfolio URL</label>
                                    <input
                                        type="url"
                                        required
                                        value={candidatePortfolio}
                                        onChange={(e) => setCandidatePortfolio(e.target.value)}
                                        placeholder="https://github.com/janedoe"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1">Brief Note / Experience</label>
                                    <textarea
                                        rows={3}
                                        value={candidateNotes}
                                        onChange={(e) => setCandidateNotes(e.target.value)}
                                        placeholder="Tell us about your background or why you'd like to join..."
                                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-cyan-500 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 transition mt-4"
                                >
                                    Submit Candidate Application
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="border-t border-slate-800 bg-slate-950 py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <Sparkles className="h-5 w-5 text-cyan-400" />
                        <span className="font-display font-bold text-white">Stellar AI Academy & Careers</span>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-slate-400">
                        <a href="/" className="hover:text-cyan-400 transition">Main Platform</a>
                        <a href="#positions" className="hover:text-cyan-400 transition">Careers</a>
                        <a href="#certifications" className="hover:text-cyan-400 transition">Paid Certifications</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CareersPage;
