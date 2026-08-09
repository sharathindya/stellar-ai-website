import React, { useState } from 'react';
import { 
  Stethoscope, 
  Rocket, 
  User, 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Globe,
  GraduationCap,
  Palette,
  Briefcase,
  Store,
  FlaskConical,
  BookOpen,
  Share2,
  Heart,
  Bot,
  Sparkles,
  Search,
  Code,
  Layers,
  BookMarked
} from 'lucide-react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    persona: 'Startup / Entrepreneur',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Expanded Service Catalogue Across Personas
  const services = [
    {
      id: 'healthcare',
      category: 'Healthcare',
      title: 'RCM & Telehealth Agents',
      icon: <Stethoscope className="w-5 h-5 text-red-400" />,
      desc: 'Claims denial resolution, ABDM/ABHA health ID sync, e-prescriptions, and HIPAA compliance.',
      features: ['Automated Claim Appeals', 'EasyMed Telehealth Triage', 'HIPAA Data Audit']
    },
    {
      id: 'startups',
      category: 'Startups & Solo-Founders',
      title: 'Virtual Co-Founder & Growth Agent',
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      desc: 'Pitch deck generation, grant application prep, lead prospecting, and automated marketing.',
      features: ['Grant & Pitch Generator', 'Automated Cold Outreach', 'Runway & Cash Flow Tracker']
    },
    {
      id: 'professionals',
      category: 'Working Professionals',
      title: 'Executive Productivity Agent',
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      desc: 'Meeting summarization, email auto-responders, report drafting, and career goal tracking.',
      features: ['Email & Calendar Copilot', 'Meeting Notes & Action Items', 'Career Upskilling Roadmap']
    },
    {
      id: 'students',
      category: 'Students',
      title: 'AI Study & Exam Prep Agent',
      icon: <GraduationCap className="w-5 h-5 text-yellow-400" />,
      desc: 'Personalized study schedules, flashcard generation, research summarization, and assignment tracking.',
      features: ['Custom Quiz & Flashcards', 'Academic Paper Digest', 'Exam Countdown Planner']
    },
    {
      id: 'artists',
      category: 'Artists & Creators',
      title: 'Creative Studio & Prompt Engine',
      icon: <Palette className="w-5 h-5 text-pink-400" />,
      desc: 'Generative image/video prompt pipelines, portfolio showcases, and social media scheduling.',
      features: ['Multi-Model Prompt Engineering', 'Asset Cataloging', 'Portfolio Automation']
    },
    {
      id: 'shops',
      category: 'Shops & Local Business',
      title: 'Local Retail & Billing Bot',
      icon: <Store className="w-5 h-5 text-emerald-400" />,
      desc: 'WhatsApp Business customer support, local inventory tracking, and GST invoice helpers.',
      features: ['WhatsApp Order Bot', 'Inventory Alerts', 'Local GST Invoice Helper']
    },
    {
      id: 'researchers',
      category: 'Researchers & Scientists',
      title: 'Literature Review & Data Agent',
      icon: <FlaskConical className="w-5 h-5 text-purple-400" />,
      desc: 'Automated research paper synthesis, citation tracking, dataset analysis, and hypothesis testing.',
      features: ['ArXiv & Journal Digest', 'Citation Formatting', 'Dataset Exploration']
    },
    {
      id: 'educators',
      category: 'Educators & Teachers',
      title: 'Lesson Planning & Grading Agent',
      icon: <BookOpen className="w-5 h-5 text-orange-400" />,
      desc: 'Automated lesson plan generation, rubric creation, quiz design, and student progress reports.',
      features: ['Curriculum Generator', 'Auto-Rubric Designer', 'Parent Update Automation']
    },
    {
      id: 'social',
      category: 'Social Media & Marketing',
      title: 'Multi-Platform Content Agent',
      icon: <Share2 className="w-5 h-5 text-sky-400" />,
      desc: 'Content calendar automation, cross-platform publishing, trend monitoring, and engagement analytics.',
      features: ['Viral Hook Generator', 'Multi-Platform Scheduler', 'Trend Intelligence']
    },
    {
      id: 'wellbeing',
      category: 'Personnel & Mental Well-being',
      title: 'Mindfulness & Habit Companion',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      desc: 'Daily wellness journaling, stress management prompts, habit tracking, and work-life balance monitoring.',
      features: ['Guided Journaling', 'Habit Streak Tracker', 'Stress Reduction Prompts']
    },
    {
      id: 'enterprise',
      category: 'Organizations',
      title: 'Enterprise Process Orchestrator',
      icon: <Building2 className="w-5 h-5 text-indigo-400" />,
      desc: 'Cross-departmental API orchestration, DPDP Act 2023 compliance auditing, and employee onboarding.',
      features: ['DPDP Act 2023 Compliance', 'SaaS Tool Integration', 'Employee Onboarding Suite']
    }
  ];

  const categories = ['All', 'Healthcare', 'Startups & Solo-Founders', 'Working Professionals', 'Students', 'Artists & Creators', 'Shops & Local Business', 'Researchers & Scientists', 'Educators & Teachers', 'Social Media & Marketing', 'Personnel & Mental Well-being', 'Organizations'];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* Header */}
      <nav className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
              S1
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">StellarOne <span className="text-cyan-400">AI</span></span>
              <span className="block text-xs text-slate-400">stellaroneai.io</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#models" className="hover:text-cyan-400 transition-colors">AI Models</a>
            <a href="#catalogue" className="hover:text-cyan-400 transition-colors">Services Catalogue</a>
            <a href="#courses" className="hover:text-cyan-400 transition-colors">Courses & Workflows</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <a href="#contact" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-md shadow-cyan-500/20">
            Build My Agent
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          
          {/* Trust Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-slate-900 border border-cyan-500/30 text-xs text-cyan-300 mb-8 shadow-inner">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>DPIIT Recognized Startup (DIPP202982)</span>
            <span className="text-slate-600">•</span>
            <span>CIN: U62099TN2025PTC180074</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Custom <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Agentic AI Solutions</span> for Every Persona & Industry
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            From healthcare RCM and startup co-founders to student study assistants, creator studios, and enterprise DPDP Act compliance—we design, build, and deploy autonomous AI agents tailored to your exact needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a href="#catalogue" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25">
              Explore Agent Catalogue <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:border-slate-700 hover:bg-slate-800/80 transition-all">
              Request Custom Agent
            </a>
          </div>

        </div>
      </section>

      {/* AI Models & Ecosystem Stack */}
      <section id="models" className="py-16 border-b border-slate-800/60 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-6">Powered by Leading AI Models & Frameworks</p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" /> OpenAI GPT-4o & o1
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 flex items-center gap-2">
              <Bot className="w-4 h-4 text-orange-400" /> Anthropic Claude 3.5
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" /> Google Gemini 1.5
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-400" /> Meta Llama 3.1 & DeepSeek
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" /> CrewAI • AutoGen • LangChain • n8n
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Catalogue of Services */}
      <section id="catalogue" className="py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Custom Agentic AI Services Catalogue</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Filter by persona or domain to discover how autonomous AI agents transform daily workflows.</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' 
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-xs text-cyan-400 font-semibold">{service.category}</span>
                      <h3 className="text-lg font-bold text-white leading-snug">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/60">
                  <span className="text-xs font-semibold text-slate-500 block mb-2">Key Features:</span>
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                    Request This Agent <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Workflow Templates Section */}
      <section id="courses" className="py-24 border-b border-slate-800/60 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-4">
              <BookMarked className="w-4 h-4" /> Learning & Pre-built Codebases
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Agentic AI Masterclasses & Pre-Built Workflows</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Master multi-agent architecture or jumpstart development with production-ready workflow templates.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold">Featured Masterclass</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-3">Agentic AI Engineering: From Concept to Production</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Hands-on training for developers, working professionals, and founders to build, evaluate, and deploy multi-agent systems using CrewAI, AutoGen, and LangChain.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all">
                Enroll / Inquire Course
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold">Pre-Built Code Templates</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-3">n8n, CrewAI & LangChain Workflow Packs</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Download production-ready JSON and Python scripts for lead generation, RCM claim audits, study assistants, and DPDP compliance monitoring.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all">
                Access Workflow Library
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section id="about" className="py-20 border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white shadow-xl shadow-cyan-500/20">
            SM
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Sarathkumar Mani</h2>
          <p className="text-cyan-400 text-sm font-medium mb-6">Founder & Technology Lead | StellarOne Health Technologies Private Limited</p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            Technology lead and process trainer with 10+ years of experience in Revenue Cycle Management (RCM), healthcare operations, and instructional delivery. Building custom, domain-specific Agentic AI solutions for startups, students, professionals, and enterprises.
          </p>
          <div className="flex justify-center items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-cyan-400" /> Guindy, Chennai & Bengaluru</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4 text-cyan-400" /> stellaroneai.io</span>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Request a Custom Agent or Course Information</h2>
            <p className="text-slate-400">Tell us about your requirements and we will design a custom Agentic AI prototype or training roadmap.</p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center">
              <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
              <p className="text-sm text-slate-300">Thank you. Our team will review your request and contact you at <span className="text-cyan-400">{formData.email}</span> within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                  placeholder="Sarathkumar Mani"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                  placeholder="sarath@stellaroneai.io"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Target Category / Persona</label>
                <select 
                  value={formData.persona}
                  onChange={(e) => setFormData({...formData, persona: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                >
                  <option value="Healthcare">Healthcare (RCM, ABHA & Medical Billing)</option>
                  <option value="Startup / Entrepreneur">Startups & Solo Entrepreneurs</option>
                  <option value="Working Professional">Working Professionals</option>
                  <option value="Students">Students & Exam Prep</option>
                  <option value="Artists & Creators">Artists & Creators</option>
                  <option value="Shops & Local Business">Shops & Local Retailers</option>
                  <option value="Researchers & Scientists">Researchers & Scientists</option>
                  <option value="Educators">Educators & Teachers</option>
                  <option value="Social Media">Social Media & Marketing</option>
                  <option value="Mental Well-being">Personnel & Mental Well-being</option>
                  <option value="Organizations">Organizations & Enterprise</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Custom Requirements / Inquiry</label>
                <textarea 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                  placeholder="Describe the Agentic AI service, workflow, or course you are interested in..."
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20">
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-500 text-xs text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © 2026 StellarOne Health Technologies Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <span>CIN: U62099TN2025PTC180074</span>
            <span>DPIIT: DIPP202982</span>
            <span>Domain: stellaroneai.io</span>
          </div>
        </div>
      </footer>
    </div>
  );
}