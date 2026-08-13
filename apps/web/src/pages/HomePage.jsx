import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
    Orbit, Rocket, Cpu, CircuitBoard, Workflow, BookOpen,
    ArrowUpRight, ShieldCheck, Gauge, Sparkles,
    Terminal, Play, CheckCircle2, Zap, Layers, RefreshCw, Activity,
    ArrowRight, Check, ChevronRight, Sliders, Server, Lock, Code2, Copy,
    GraduationCap, Briefcase, Award, Network, Eye, Bot, Wrench, FileCode, CheckSquare, Globe,
    Building2, ShoppingBag, Landmark, Scale, Truck, BookMarked, BarChart3, Radio
} from 'lucide-react';
import { toast } from 'sonner';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import ContactForm from '@/components/ContactForm';
import CurrencySelector from '@/components/CurrencySelector';
import { useCurrency } from '@/contexts/CurrencyContext';

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

const INDUSTRY_SHOWCASES = {
    healthcare: {
        id: 'healthcare',
        icon: Orbit,
        sector: 'Healthcare & Clinical',
        badge: 'HIPAA & ABDM Compliant',
        headline: 'Revenue Cycle Management (RCM) & Clinical Triage Agents',
        problem: 'Hospitals lose 12-15% of revenue due to claim denials, manual code audits, and slow E-Prescription data entry.',
        solution: 'Autonomous RCM agents audit rejected claims against CMS guidelines, generate formal medical necessity appeal packages, and map ABHA health IDs straight-through.',
        impactUSD: 450000,
        impactMetric: 'Saved annually per 100-bed hospital in recovered claims',
        inputSample: `POST /api/rcm/audit
Claim: CLM-90812 | Code: 99214 | Denial Reason: CO-50 (Non-covered)
Patient ABHA: 91-8810-4910-1200`,
        outputSample: `✅ APPEAL GENERATED & FILED VIA API
Insurer: BlueCross Health | Status: Claim Reopened
Recovery Amount: $4,850.00 | Medical Necessity Attached.`
    },
    fintech: {
        id: 'fintech',
        icon: Landmark,
        sector: 'FinTech & BFSI',
        badge: 'SOC-2 & DPDP Certified',
        headline: 'Automated KYC/AML Underwriting & Fraud Triage',
        problem: 'Manual compliance review of loan documents, passport scans, and AML watchlist screening takes 48-72 hours per applicant.',
        solution: 'Agentic document pipelines extract identity fields, cross-check OFAC/PEP watchlists in real-time, and flag suspicious transactions under sub-30ms execution.',
        impactUSD: 680000,
        impactMetric: 'Reduced compliance review costs with 99.8% precision',
        inputSample: `EVENT: LoanApplicationSubmitted
Applicant: Apex Capital LLC | Tax ID: 84-99182
Document: Passport_Scan_v2.pdf`,
        outputSample: `🛡️ AML CHECK PASSED | RISK SCORE: 0.02
Watchlist: Cleared (OFAC, Interpol, PEP)
Income Verification: $240,000 Verified via Bank API.`
    },
    ecommerce: {
        id: 'ecommerce',
        icon: ShoppingBag,
        sector: 'E-Commerce & Retail',
        badge: 'Omnichannel Swarm',
        headline: 'WhatsApp & Email Customer Resolution Swarm',
        problem: 'Customer support teams are overwhelmed during peak sales events with repetitive order tracking and refund queries.',
        solution: 'Multi-agent swarms triage incoming WhatsApp and email messages, verify Shopify order statuses, process automated refunds under threshold, and update Zendesk CRM.',
        impactUSD: 320000,
        impactMetric: 'Saved in support labor while improving CSAT to 98%',
        inputSample: `WHATSAPP INCOMING: +1 (415) 882-9012
"Where is my order #ST-9912? I need a refund if it hasn't shipped!"`,
        outputSample: `💬 AUTO-RESOLVED & NOTIFIED
"Hi Sarah! Order #ST-9912 shipped via FedEx (Tracking #991024). Estimated delivery: Today 3 PM."`
    },
    legal: {
        id: 'legal',
        icon: Scale,
        sector: 'Legal & Real Estate',
        badge: 'DPDP 2023 Redliner',
        headline: 'Contract Redlining & Regulatory Compliance Auditor',
        problem: 'Reviewing 50-page Master Services Agreements and lease deeds for DPDP Act 2023 and indemnity risks takes hours of legal counsel time.',
        solution: 'Legal agents extract clauses, highlight liability caps exceeding policy limits, redline non-compliant data retention terms, and export DOCX summaries.',
        impactUSD: 510000,
        impactMetric: 'Reduction in outside legal review fees per year',
        inputSample: `DOCUMENT: Master_Services_Agreement_2026.docx
Check: DPDP Act 2023 Section 8 & Indemnity Clause 12.1`,
        outputSample: `⚖️ REDLINE COMPLETE: 2 CLAUSES MODIFIED
Clause 8.2: Data Retention capped at 180 days (DPDP compliant).
Clause 12.1: Liability capped at 2x annual contract value.`
    },
    logistics: {
        id: 'logistics',
        icon: Truck,
        sector: 'Logistics & Supply Chain',
        badge: 'Customs & ERP STP',
        headline: 'Customs Documentation & PO Cross-Referencing',
        problem: 'Mismatched line items between bills of lading, commercial invoices, and ERP purchase orders cause port delays and storage fines.',
        solution: 'Vision OCR agents parse multi-lingual shipping manifests, cross-reference line items against SAP / Oracle ERP, and auto-correct customs tariff codes.',
        impactUSD: 420000,
        impactMetric: 'Saved in demurrage & port penalty fees annually',
        inputSample: `MANIFEST PARSED: BOL_Shipment_9901.pdf
Items: 400 Units Microcontrollers (HS Code 8542.31)`,
        outputSample: `📦 ERP MATCH CONFIRMED (PO #PO-8812)
Customs Tariff: Standardized to 8542.31.00
Status: Cleared for automated warehouse intake.`
    },
    edtech: {
        id: 'edtech',
        icon: BookMarked,
        sector: 'EdTech & Research',
        badge: 'Academic Copilot',
        headline: 'Research Synthesis & Study Copilot Agents',
        problem: 'Researchers and students struggle to synthesize hundreds of academic papers into structured literature reviews and course briefs.',
        solution: 'Agentic paper summarizers query arXiv and PubMed, extract methodology parameters, synthesize comparative tables, and draft publication briefs.',
        impactUSD: 190000,
        impactMetric: 'Hours saved per research department in document synthesis',
        inputSample: `QUERY: "Synthesize 10 recent papers on LLM Quantization techniques for edge devices."`,
        outputSample: `📚 LITERATURE BRIEF GENERATED
Top Method: AWQ vs. GPTQ 4-bit Quantization
Comparative Table: Memory footprint, perplexity scores, & vLLM benchmark links.`
    }
};

const SERVICES_2026 = [
    {
        id: 'swarms',
        icon: Network,
        title: 'Multi-Agent Swarms & Hierarchical Crews',
        badge: 'Supervisor-Worker Pattern',
        summary:
            'Deploy coordinated teams of specialized agents (Researcher, Writer, Reviewer, Security Gate) operating under a supervisor controller to solve complex tasks.',
        points: ['Autonomous task decomposition & parallel sub-agent dispatch', 'Self-correcting feedback loops with human approval gates', 'State synchronization across distributed worker nodes'],
        codeSnippet: `const crew = new HierarchicalCrew({
  supervisor: new ManagerAgent({ model: "gpt-4o" }),
  workers: [
    new ResearchAgent(),
    new PythonCodeAgent(),
    new SecurityAuditAgent()
  ],
  process: Process.sequential
});
await crew.kickoff({ task: "Audit smart contract security" });`
    },
    {
        id: 'graphrag',
        icon: Layers,
        title: 'GraphRAG & Hybrid Knowledge Memory',
        badge: 'Zero-Hallucination Retrieval',
        summary:
            'Combine Knowledge Graphs (entity relationships) with Vector Search (semantic similarity) for enterprise-wide zero-hallucination memory.',
        points: ['Knowledge Graph entity extraction & relationship mapping', 'Hybrid dense + sparse vector index matching (Qdrant + Neo4j)', 'Dynamic context window pruning to reduce LLM token overhead'],
        codeSnippet: `const graphRAG = new HybridMemorySystem({
  graphDB: new Neo4jClient({ uri: process.env.NEO4J_URI }),
  vectorDB: new QdrantClient({ collection: "enterprise_docs" }),
  hybridAlpha: 0.75 // 75% graph, 25% vector
});`
    },
    {
        id: 'healthcare',
        icon: Orbit,
        title: 'Healthcare AI & Clinical RCM Automation',
        badge: 'HIPAA & ABDM Compliant',
        summary:
            'Agent suites for Revenue Cycle Management (RCM), claim denial resolution, clinical triage automation, and EHR integrations.',
        points: ['RCM claim denial analysis & automated appeal generation', 'E-Prescription & triage workflows with doctor review gates', 'ABHA / ABDM health ID data pipeline integration'],
        codeSnippet: `const rcmAgent = new HealthcareRCMAgent({
  compliance: ["HIPAA", "ABDM_DPDP"],
  rulesEngine: "CMS-2026-Guidelines",
  tools: [EHRConnector, ClaimsEngine, AppealGenerator]
});`
    },
    {
        id: 'selfhealing',
        icon: Wrench,
        title: 'Self-Healing Code & Security Auditor',
        badge: 'OWASP LLM Guardrails',
        summary:
            'Autonomous agents that scan repositories, detect syntax/security vulnerabilities, generate fixes, run test suites, and open PRs.',
        points: ['Automated AST analysis & OWASP Top 10 for LLMs vulnerability scans', 'Self-correcting code generation with automated test execution', 'Zero-breakage refactoring & dependency upgrade pipelines'],
        codeSnippet: `const auditor = new DevSecOpsAgent();
const audit = await auditor.scanRepo("./src");
if (audit.vulnerabilities.length > 0) {
  await auditor.autoRepairAndTest({ branch: "security-fix" });
}`
    },
    {
        id: 'growth',
        icon: Rocket,
        title: 'Growth & Revenue Automation',
        badge: 'Autonomous Co-Founders',
        summary:
            'Autonomous co-founder agents for founders and growth teams — grant and pitch generation, lead enrichment, and sales pipeline execution.',
        points: ['Pitch deck & grant proposal generation', 'Multi-channel lead enrichment & scoring', 'Automated personalized sales outreach'],
        codeSnippet: `const growthAgent = new GrowthEngine({
  role: "Chief Growth Officer",
  capabilities: ["prospecting", "pitch_decks", "crm_sync"]
});`
    },
    {
        id: 'onprem',
        icon: Lock,
        title: 'On-Prem Quantized Model Distillation',
        badge: '100% Data Sovereignty',
        summary:
            'Deploy fine-tuned 7B and 14B quantized models (DeepSeek-R1, Llama 3) inside private VPCs or on-prem servers for zero external data leakage.',
        points: ['Private vLLM & Ollama inference server deployment', 'Domain-specific dataset distillation & LoRA fine-tuning', 'DPDP & SOC-2 compliant isolated data boundaries'],
        codeSnippet: `const localInference = new PrivateVLLMServer({
  model: "deepseek-r1-distill-llama-8b-q4",
  maxGPUVideoRAM: "16GB",
  dataIsolation: "strict_airgap"
});`
    }
];

const STACK_ITEMS = [
    { name: 'GPT-4o', tag: 'Reasoning + Multimodal', logo: gpt4oLogo },
    { name: 'Claude 3.5', tag: 'Long-Context Analysis', logo: claudeLogo },
    { name: 'Gemini 1.5', tag: 'Google Ecosystem AI', logo: geminiLogo },
    { name: 'Llama 3', tag: 'Open-Source Privacy', logo: llamaLogo },
    { name: 'Mistral', tag: 'Ultra-Fast Inference', logo: mistralLogo },
    { name: 'n8n', tag: 'Workflow Automation', logo: n8nLogo },
    { name: 'Zapier', tag: 'Cloud Integrations', logo: zapierLogo },
    { name: 'Make', tag: 'Visual Orchestration', logo: makeLogo },
    { name: 'LangChain', tag: 'Agent Framework', logo: langchainLogo },
    { name: 'CrewAI', tag: 'Multi-Agent Teams', logo: crewaiLogo },
    { name: 'Midjourney', tag: 'Visual Generation', logo: midjourneyLogo },
    { name: 'Runway', tag: 'AI Video Production', logo: runwayLogo },
];

const OUTCOMES = [
    { icon: Gauge, value: 62, suffix: '%', label: 'Average reduction in manual handling time across automated processes' },
    { icon: ShieldCheck, value: 99.4, suffix: '%', label: 'Straight-through processing accuracy with review gates' },
    { icon: Sparkles, value: 3, suffix: ' wks', label: 'Speed from discovery workshop to first live production agent' },
    { icon: Zap, value: 10, suffix: 'x', label: 'Throughput increase for claims, support, and document workflows' }
];

const CERTIFICATION_COHORTS_PREVIEW = [
    {
        title: 'Full-Stack Agentic AI Architect',
        duration: '12 Weeks (Live Cohort)',
        priceUSD: 1499,
        stipendUSD: 500,
        desc: 'Master multi-agent orchestration, tool routing, memory design, and production deployment on real client codebases.'
    },
    {
        title: 'Enterprise GraphRAG & MLOps',
        duration: '8 Weeks (Live Cohort)',
        priceUSD: 999,
        stipendUSD: 350,
        desc: 'Learn to build zero-hallucination enterprise memory pipelines combining Knowledge Graphs (Neo4j) and Vector DBs.'
    },
    {
        title: 'HIPAA & ABDM Healthcare AI',
        duration: '6 Weeks (Live Cohort)',
        priceUSD: 899,
        stipendUSD: 300,
        desc: 'Deep dive into building compliant clinical agents for RCM claim denial resolution and ABDM Health ID mapping.'
    }
];

const DEMO_PRESETS = {
    rcm: {
        id: 'rcm',
        name: 'Healthcare RCM Agent',
        prompt: 'Audit claim #CLM-94021 rejected under code CO-50 (non-covered service) and draft formal appeal.',
        logs: [
            '[0.01s] Ingesting claim payload CLM-94021...',
            '[0.12s] Context retrieved: Policy #HC-882, Patient ABHA #91-8821-4921...',
            '[0.34s] Agent Rule Evaluation: Procedure Code 99214 meets emergency criteria under Section 4-B.',
            '[0.68s] Generating CMS-compliant formal appeal letter with medical necessity citations...',
            '[0.95s] Verification complete. Appeal package dispatched to insurer portal API.'
        ],
        output: `✅ APPEAL GENERATED & SENT
Claim ID: CLM-94021 | Status: Auto-Submitted
Reason: Medical necessity established via clinical EHR attachment.
Estimated Recovery: $4,850.00`
    },
    growth: {
        id: 'growth',
        name: 'Growth Co-Founder',
        prompt: 'Research top 5 prospective B2B healthtech leads in San Francisco and draft personalized emails.',
        logs: [
            '[0.05s] Scanning Crunchbase & LinkedIn API for Series-A HealthTech startups...',
            '[0.21s] Found 5 matches matching ICP (Revenue > $2M, Team > 15)...',
            '[0.45s] Extracting VP Operations contact info & verifying SMTP delivery...',
            '[0.82s] Crafting hyper-personalized value props based on recent press releases...'
        ],
        output: `🚀 5 LEADS ENRICHED & OUTREACH QUEUED
1. Apex Health (VP Ops) - "Loved your launch on ABDM interoperability..."
2. CareFlow Inc (COO) - "Automating claims processing with 99.4% accuracy..."
Outreach scheduled for Tuesday 09:00 AM PST.`
    },
    doc: {
        id: 'doc',
        name: 'Doc Intelligence',
        prompt: 'Extract line items, tax IDs, and total due from scanned invoice PDF.',
        logs: [
            '[0.03s] Loading document: invoice_aug_2026_vendor_99.pdf (3 pages)...',
            '[0.18s] Executing Vision OCR & Layout parser...',
            '[0.42s] Standardizing vendor Tax ID & line-item table struct...',
            '[0.77s] Cross-checking purchase order PO-1102 in ERP database...'
        ],
        output: `📄 EXTRACTED INVOICE DATA
Vendor: Nova Tech Solutions (EIN: 84-2918471)
Total Amount: $14,250.00 | Tax: $1,140.00
Status: Matches PO-1102. Approved for accounts payable execution.`
    },
    code: {
        id: 'code',
        name: 'Self-Healing Code Agent',
        prompt: 'Scan auth service repository for OWASP vulnerabilities and auto-fix SQL injection flaw.',
        logs: [
            '[0.02s] Parsing AST for /src/services/auth.ts...',
            '[0.15s] Vulnerability Detected: Raw SQL string concatenation at L42.',
            '[0.38s] Generating parameterized query patch using Prisma ORM...',
            '[0.72s] Running test suite: 14/14 tests PASSED. Creating GitHub PR #104.'
        ],
        output: `🛡️ SECURITY VULNERABILITY REPAIRED
File: /src/services/auth.ts (Line 42)
Type: CWE-89 (SQL Injection) -> Fixed via Parameterized Prepared Statement.
PR Link: https://github.com/stellar/auth-service/pull/104 [Merged]`
    },
    legal: {
        id: 'legal',
        name: 'Contract Compliance Agent',
        prompt: 'Audit vendor Master Services Agreement for DPDP Act 2023 compliance and indemnity risk.',
        logs: [
            '[0.04s] Reading contract payload: MSA_Vendor_2026.pdf (18 pages)...',
            '[0.22s] Identifying Clause 8.2: Data Retention period exceeds DPDP statutory limit.',
            '[0.51s] Redlining Clause 12.1 (Indemnity) to cap liability at 2x annual contract value...',
            '[0.89s] Exporting redlined DOCX with legal counsel summary notes.'
        ],
        output: `⚖️ CONTRACT AUDIT COMPLETE
Status: 2 High Risk Clauses Flagged
1. Clause 8.2: Data Retention updated to comply with DPDP Act 2023.
2. Clause 12.1: Liability capped at $250,000. Redlined document ready for review.`
    },
    support: {
        id: 'support',
        name: 'Omnichannel Customer Swarm',
        prompt: 'Handle customer WhatsApp request regarding refund status and update CRM ticket.',
        logs: [
            '[0.01s] Incoming WhatsApp event: User +1 (415) 882-9012...',
            '[0.14s] Querying Shopify Order DB: Order #ST-8810 shipped 2 days ago...',
            '[0.35s] Generating conversational WhatsApp response with real-time tracking link...',
            '[0.68s] Syncing ticket status in Zendesk API to "Resolved".'
        ],
        output: `💬 WHATSAPP RESPONSE DISPATCHED
Message: "Hi Sarah! Your order #ST-8810 is out for delivery today via FedEx (Tracking #991024). Let us know if you need anything else!"
Zendesk Ticket #9912 updated -> Resolved.`
    }
};

const HomePage = () => {
    const { format, current } = useCurrency();
    const [activeDemo, setActiveDemo] = useState('rcm');
    const [demoInput, setDemoInput] = useState(DEMO_PRESETS.rcm.prompt);
    const [isExecuting, setIsExecuting] = useState(false);
    const [activeLogs, setActiveLogs] = useState(DEMO_PRESETS.rcm.logs);
    const [activeOutput, setActiveOutput] = useState(DEMO_PRESETS.rcm.output);
    const [activeService, setActiveService] = useState(SERVICES_2026[0]);
    const [activeIndustryKey, setActiveIndustryKey] = useState('healthcare');
    
    // ROI Calculator State
    const [manualHours, setManualHours] = useState(120);
    const [hourlyCostUSD, setHourlyCostUSD] = useState(45);

    const activeIndustry = INDUSTRY_SHOWCASES[activeIndustryKey];

    const handleSelectDemo = (key) => {
        setActiveDemo(key);
        setDemoInput(DEMO_PRESETS[key].prompt);
        setActiveLogs(DEMO_PRESETS[key].logs);
        setActiveOutput(DEMO_PRESETS[key].output);
    };

    const handleRunDemo = () => {
        setIsExecuting(true);
        setActiveLogs(['[0.01s] Initializing execution session...']);
        setActiveOutput('⏳ Agent reasoning in progress...');

        setTimeout(() => {
            setActiveLogs(DEMO_PRESETS[activeDemo].logs);
            setActiveOutput(DEMO_PRESETS[activeDemo].output);
            setIsExecuting(false);
            toast.success('Agent execution completed successfully!');
        }, 1100);
    };

    const copyCode = (code) => {
        navigator.clipboard.writeText(code);
        toast.success('Code snippet copied to clipboard!');
    };

    const monthlySavingsUSD = Math.round(manualHours * hourlyCostUSD * 0.65);
    const hoursSavedYearly = Math.round(manualHours * 12 * 0.65);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
            <Helmet>
                <title>Stellar AI | Autonomous AI Agents, Multi-Agent Swarms & Industry Solutions</title>
                <meta
                    name="description"
                    content="Enterprise platform for autonomous AI agents, multi-agent swarms, GraphRAG, Healthcare RCM, FinTech compliance, and multi-industry real-world automation."
                />
            </Helmet>

            <Seo
                title="Stellar AI — Autonomous AI Agents Platform"
                description="Enterprise platform for autonomous AI agents, multi-agent swarms, GraphRAG, and clinical automation."
                image={HERO_IMG}
                siteName="Stellar AI"
            />

            {/* Glowing Reordered Navbar */}
            <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
                <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
                    <a href="#top" className="flex items-center gap-3 group">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950">
                                <Sparkles className="h-5 w-5 text-cyan-400" />
                            </div>
                        </div>
                        <div>
                            <span className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                                Stellar<span className="glow-gradient-text">AI</span>
                            </span>
                            <span className="block text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase">AUTONOMOUS AGENTS</span>
                        </div>
                    </a>

                    {/* Reasonably Reordered Header Tabs */}
                    <nav className="hidden items-center gap-6 lg:flex">
                        <a href="#demo" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">Platform & Demos</a>
                        <a href="#capabilities" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">2026 Capabilities</a>
                        <a href="#industries" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">Industry Specs</a>
                        <a href="#calculator" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">ROI Calculator</a>
                        <a href="#certifications" className="text-sm font-medium text-slate-300 transition hover:text-cyan-400">Paid Certifications</a>
                        <a href="/careers" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-400 flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5" /> Careers & Internships
                        </a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <CurrencySelector />
                        <a
                            href="#contact"
                            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all hover:shadow-[0_0_35px_rgba(56,189,248,0.6)]"
                        >
                            <Zap className="h-3.5 w-3.5" />
                            <span>Launch Sandbox</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="top" className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 grid-lines">
                <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/10 blur-[120px]" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono text-cyan-300 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    >
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span>STELLAR AGENTIC OS 2.0 LIVE</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-70" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:leading-[1.1]"
                    >
                        Autonomous AI Agents built for <br className="hidden sm:inline" />
                        <span className="glow-gradient-text">Next-Gen Intelligence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 sm:text-xl font-normal leading-relaxed"
                    >
                        Deploy enterprise multi-agent swarms, GraphRAG memory pipelines, self-healing code auditors, and HIPAA/ABDM compliant healthcare automation in weeks.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    >
                        <a
                            href="#demo"
                            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.4)] transition hover:bg-cyan-400"
                        >
                            <Play className="h-4 w-4 fill-current" />
                            <span>Try 6 Live Agent Demos</span>
                        </a>
                        <a
                            href="/careers"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-cyan-500/40"
                        >
                            <Briefcase className="h-4 w-4 text-cyan-400" />
                            <span>Explore Careers & Courses</span>
                        </a>
                    </motion.div>

                    {/* Interactive Hero Agent Playground Window (6 Scenarios) */}
                    <section id="demo" className="mt-16 sm:mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative mx-auto max-w-5xl rounded-2xl cyber-glass border border-slate-700/60 p-4 sm:p-6 text-left shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
                        >
                            {/* Window Header */}
                            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                                    <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                                        <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                                        stellar-agent-sandbox-control.v2
                                    </span>
                                </div>

                                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                                    6 Live Agent Presets Available
                                </span>
                            </div>

                            {/* 6 Scenario Selector Tabs */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
                                {Object.values(DEMO_PRESETS).map((preset) => (
                                    <button
                                        key={preset.id}
                                        onClick={() => handleSelectDemo(preset.id)}
                                        className={`rounded-lg px-2.5 py-2 text-xs font-mono font-medium transition text-center truncate ${activeDemo === preset.id ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(56,189,248,0.2)]' : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'}`}
                                    >
                                        {preset.name}
                                    </button>
                                ))}
                            </div>

                            {/* Prompt Input Line */}
                            <div className="mb-4 flex gap-3">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={demoInput}
                                        onChange={(e) => setDemoInput(e.target.value)}
                                        className="w-full rounded-xl border border-slate-700/80 bg-slate-950/90 px-4 py-3 font-mono text-xs sm:text-sm text-cyan-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                                        placeholder="Type an agent instruction..."
                                    />
                                </div>
                                <button
                                    onClick={handleRunDemo}
                                    disabled={isExecuting}
                                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-50"
                                >
                                    {isExecuting ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4 fill-current" />}
                                    <span>Execute</span>
                                </button>
                            </div>

                            {/* Execution Grid: Logs & Output */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 font-mono text-xs">
                                    <div className="flex items-center justify-between text-slate-400 mb-2 border-b border-slate-800 pb-2">
                                        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                                            <Activity className="h-3.5 w-3.5" /> Reasoning Node Trace
                                        </span>
                                        <span className="text-[10px] text-slate-500">Latency: 24ms</span>
                                    </div>
                                    <div className="space-y-1.5 text-slate-300 max-h-44 overflow-y-auto">
                                        {activeLogs.map((log, idx) => (
                                            <p key={idx} className="leading-relaxed">
                                                <span className="text-cyan-400/80">&gt;</span> {log}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 font-mono text-xs">
                                    <div className="flex items-center justify-between text-cyan-300 mb-2 border-b border-cyan-500/20 pb-2">
                                        <span className="flex items-center gap-1.5 font-semibold">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" /> Output Payload
                                        </span>
                                        <span className="rounded bg-cyan-500/20 px-1.5 py-0.5 text-[10px] text-cyan-300">STP Verified</span>
                                    </div>
                                    <pre className="text-slate-200 whitespace-pre-wrap leading-relaxed">
                                        {activeOutput}
                                    </pre>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </section>

            {/* Animated SVG Workflow Node Particles Graph */}
            <section className="py-16 border-y border-slate-800 bg-slate-950/40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 block">AGENTIC EXECUTION PIPELINE GRAPH</span>
                    <h3 className="font-display text-2xl font-bold text-white mb-8">Real-Time Event Node Topology</h3>

                    {/* SVG Flow Connections */}
                    <div className="relative mx-auto max-w-4xl rounded-2xl cyber-glass border border-slate-800 p-8 shadow-2xl">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 120 70 Q 250 20 400 70 T 700 70" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="2" fill="none" className="animate-dash-flow" />
                            <path d="M 120 70 Q 250 120 400 70 T 700 70" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none" className="animate-dash-flow" />
                        </svg>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative z-10">
                            <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-4 text-center">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
                                    <Radio className="h-5 w-5 animate-pulse" />
                                </div>
                                <h4 className="font-mono text-xs font-bold text-white">1. Event Trigger</h4>
                                <p className="text-[10px] text-slate-400 mt-1">Webhook / API / Vision OCR</p>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-4 text-center">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <h4 className="font-mono text-xs font-bold text-white">2. Security Gate</h4>
                                <p className="text-[10px] text-slate-400 mt-1">HIPAA / DPDP PII Masking</p>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-4 text-center">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-2">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <h4 className="font-mono text-xs font-bold text-white">3. Supervisor Swarm</h4>
                                <p className="text-[10px] text-slate-400 mt-1">Claude 3.5 / GPT-4o Router</p>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-4 text-center">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 mb-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                                </div>
                                <h4 className="font-mono text-xs font-bold text-white">4. Verified Writeback</h4>
                                <p className="text-[10px] text-slate-400 mt-1">ERP / EHR / CRM Integration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Model Marquee */}
            <section className="border-y border-slate-800/80 bg-slate-950/60 py-8 overflow-hidden backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-6 mb-4 text-center">
                    <p className="text-xs font-mono tracking-widest text-slate-400 uppercase">POWERED BY LEADING FOUNDATION MODELS & AGENT FRAMEWORKS</p>
                </div>

                <div className="flex w-max animate-marquee gap-8">
                    {[...STACK_ITEMS, ...STACK_ITEMS].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-3 shadow-lg hover:border-cyan-500/40 transition"
                        >
                            <img src={item.logo} alt={item.name} className="h-6 w-6 object-contain" />
                            <div>
                                <h4 className="text-xs font-semibold text-slate-200">{item.name}</h4>
                                <p className="text-[10px] text-slate-400 font-mono">{item.tag}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2026 Up-To-Date Capabilities Grid with 3D Tilt Hover */}
            <section id="capabilities" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">2026 AGENTIC AI SUITE</span>
                        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
                            Up-To-Date Agentic AI Capabilities
                        </h2>
                        <p className="mt-4 text-slate-400 text-base sm:text-lg">
                            Deploy multi-agent swarms, GraphRAG hybrid retrieval, self-healing code auditors, and HIPAA compliant clinical pipelines.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-8 lg:grid-cols-3 perspective-1000">
                    {SERVICES_2026.map((service, idx) => {
                        const Icon = service.icon;
                        const isSelected = activeService.id === service.id;
                        return (
                            <Reveal key={service.id} delay={idx * 0.1}>
                                <div
                                    onClick={() => setActiveService(service)}
                                    className={`group cursor-pointer rounded-2xl cyber-glass p-8 transition-all duration-300 relative card-3d-tilt ${isSelected ? 'border-cyan-500/80 shadow-[0_0_30px_rgba(56,189,248,0.25)]' : 'border-slate-800 hover:border-slate-700'}`}
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] font-mono text-cyan-300 border border-slate-700">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                                        {service.summary}
                                    </p>

                                    <ul className="mt-6 space-y-2.5">
                                        {service.points.map((pt, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Selected Service Code Viewer */}
                <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-2xl">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                        <div className="flex items-center gap-3">
                            <Code2 className="h-5 w-5 text-cyan-400" />
                            <h4 className="font-mono text-sm font-semibold text-slate-200">
                                Architecture Spec: <span className="text-cyan-400">{activeService.title}</span>
                            </h4>
                        </div>
                        <button
                            onClick={() => copyCode(activeService.codeSnippet)}
                            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition"
                        >
                            <Copy className="h-3.5 w-3.5" /> Copy Snippet
                        </button>
                    </div>
                    <pre className="overflow-x-auto rounded-xl bg-slate-900/90 p-4 font-mono text-xs text-cyan-300 leading-relaxed border border-slate-800">
                        {activeService.codeSnippet}
                    </pre>
                </div>
            </section>

            {/* REAL-WORLD MULTI-INDUSTRY SHOWCASES SECTION */}
            <section id="industries" className="py-24 border-t border-slate-800 bg-slate-950/80 grid-lines">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">DEPLOYED SECTOR ARCHITECTURES</span>
                        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
                            Real-World Industry Showcases
                        </h2>
                        <p className="mt-4 text-slate-400 text-base sm:text-lg">
                            Explore how autonomous agents solve high-complexity workflow challenges in Healthcare, FinTech, E-Commerce, Legal, Logistics, and EdTech.
                        </p>
                    </div>

                    {/* Sector Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                        {Object.values(INDUSTRY_SHOWCASES).map((item) => {
                            const Icon = item.icon;
                            const isSelected = activeIndustryKey === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveIndustryKey(item.id)}
                                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition ${isSelected ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.4)]' : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'}`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.sector}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Industry Deep-Dive Box */}
                    <div className="rounded-3xl cyber-glass border border-slate-700/80 p-8 lg:p-12 shadow-2xl">
                        <div className="grid gap-8 lg:grid-cols-2 items-start">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300 border border-cyan-500/30">
                                        {activeIndustry.badge}
                                    </span>
                                </div>

                                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                                    {activeIndustry.headline}
                                </h3>

                                <div className="space-y-4 text-sm leading-relaxed mb-6">
                                    <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4">
                                        <p className="font-mono text-xs font-bold text-red-400 mb-1">🔴 REAL-WORLD CHALLENGE:</p>
                                        <p className="text-slate-300">{activeIndustry.problem}</p>
                                    </div>

                                    <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-4">
                                        <p className="font-mono text-xs font-bold text-cyan-300 mb-1">⚡ DEPLOYED AGENTIC SOLUTION:</p>
                                        <p className="text-slate-300">{activeIndustry.solution}</p>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                                    <p className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">VERIFIED IMPACT METRIC</p>
                                    <h4 className="font-display text-2xl font-extrabold text-emerald-300 mt-1">
                                        +{format(activeIndustry.impactUSD)}
                                    </h4>
                                    <p className="text-xs text-slate-400 mt-0.5">{activeIndustry.impactMetric}</p>
                                </div>
                            </div>

                            {/* Interactive Input/Output Payload Showcase */}
                            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 font-mono text-xs shadow-xl">
                                <div className="border-b border-slate-800 pb-3 mb-4 flex items-center justify-between text-slate-400">
                                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                                        <Terminal className="h-4 w-4" /> Real Event Payload Trace
                                    </span>
                                    <span className="text-[10px] text-slate-500">STP Verified</span>
                                </div>

                                <div className="mb-4">
                                    <p className="text-[10px] text-slate-500 uppercase mb-1">INCOMING EVENT / API TRIGGER:</p>
                                    <pre className="rounded-xl bg-slate-900/90 p-3 text-slate-300 leading-relaxed overflow-x-auto border border-slate-800">
                                        {activeIndustry.inputSample}
                                    </pre>
                                </div>

                                <div>
                                    <p className="text-[10px] text-cyan-400 uppercase mb-1">OUTGOING AGENT RESPONSE:</p>
                                    <pre className="rounded-xl bg-cyan-950/30 p-3 text-cyan-300 leading-relaxed overflow-x-auto border border-cyan-500/30">
                                        {activeIndustry.outputSample}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Paid Project Certification Cohorts Section */}
            <section id="certifications" className="py-24 border-t border-slate-800 bg-slate-950/80">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">PAID PROJECT CERTIFICATIONS</span>
                            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                                Accredited AI Certification Cohorts
                            </h2>
                        </div>
                        <a
                            href="/careers#certifications"
                            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 px-5 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition"
                        >
                            <span>Explore Full Syllabus & Cohorts</span>
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {CERTIFICATION_COHORTS_PREVIEW.map((c, idx) => (
                            <div key={idx} className="rounded-2xl cyber-glass p-6 border border-slate-800 flex flex-col justify-between">
                                <div>
                                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                                        {c.duration}
                                    </span>
                                    <h3 className="font-display text-lg font-bold text-white mt-3 mb-1">{c.title}</h3>
                                    <p className="text-xs font-mono text-cyan-300 font-bold mb-3">{format(c.priceUSD)} / cohort</p>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{c.desc}</p>
                                    <p className="text-[11px] font-mono text-cyan-300 bg-slate-900 p-2 rounded border border-slate-800 mb-6">
                                        💰 Includes {format(c.stipendUSD)} Real Client Stipend
                                    </p>
                                </div>
                                <a
                                    href="/careers#certifications"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-700 py-2.5 text-xs font-bold text-slate-200 hover:bg-cyan-500 hover:text-slate-950 transition"
                                >
                                    <span>Apply For Cohort</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Multi-Currency ROI Calculator */}
            <section id="calculator" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-8 lg:p-12 shadow-[0_0_50px_rgba(56,189,248,0.1)]">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">ESTIMATE YOUR AUTOMATION SAVINGS</span>
                            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                                Calculate Your ROI with Autonomous Agents
                            </h2>
                            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                                See how much operational cost and time your team reclaims by switching manual claims, lead generation, and document processing to straight-through AI agents.
                            </p>

                            <div className="mt-8 space-y-6">
                                <div>
                                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                                        <span>Monthly Manual Process Hours:</span>
                                        <span className="text-cyan-400 font-bold">{manualHours} hrs</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="20"
                                        max="1000"
                                        step="10"
                                        value={manualHours}
                                        onChange={(e) => setManualHours(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                                        <span>Fully Loaded Hourly Cost ({current.code}):</span>
                                        <span className="text-cyan-400 font-bold">{format(hourlyCostUSD)}/hr</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="20"
                                        max="150"
                                        step="5"
                                        value={hourlyCostUSD}
                                        onChange={(e) => setHourlyCostUSD(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 text-center">
                            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">ESTIMATED MONTHLY SAVINGS ({current.code})</p>
                            <h3 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold glow-gradient-text">
                                {format(monthlySavingsUSD)} / mo
                            </h3>

                            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-800 pt-6 text-left">
                                <div>
                                    <p className="text-[10px] font-mono text-slate-500 uppercase">YEARLY HOURS RECLAIMED</p>
                                    <p className="text-xl font-bold text-white font-mono">{hoursSavedYearly.toLocaleString()} hrs</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono text-slate-500 uppercase">TARGET STP ACCURACY</p>
                                    <p className="text-xl font-bold text-cyan-400 font-mono">99.4%</p>
                                </div>
                            </div>

                            <a
                                href="#contact"
                                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-cyan-400"
                            >
                                <span>Lock In Your Automation Plan</span>
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audit & Contact Section */}
            <section id="contact" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">READY TO AUTOMATE?</span>
                        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">
                            Request Your Agent Architecture Audit
                        </h2>
                        <p className="mt-4 text-slate-400 text-base leading-relaxed">
                            Schedule a 30-minute discovery session with our AI solution architects to quantify your workflow bottlenecks and map out a scoped pilot.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                                <span>HIPAA, ABDM & DPDP Data Security Standards</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Lock className="h-5 w-5 text-indigo-400" />
                                <span>Zero model retraining on customer proprietary data</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Server className="h-5 w-5 text-purple-400" />
                                <span>Flexible deployment: Multi-Tenant Cloud or Private VPC</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl cyber-glass border border-slate-800 p-8 shadow-2xl">
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-800 bg-slate-950 py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <Sparkles className="h-5 w-5 text-cyan-400" />
                        <span className="font-display font-bold text-white">Stellar AI Agents</span>
                        <span className="text-xs font-mono text-slate-500">© 2026 Stellar AI. All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-slate-400">
                        <a href="/careers" className="hover:text-cyan-400 transition">Careers & Internships</a>
                        <a href="/careers#certifications" className="hover:text-cyan-400 transition">Paid Certifications</a>
                        <a href="#top" className="hover:text-cyan-400 transition">HIPAA Compliance</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
