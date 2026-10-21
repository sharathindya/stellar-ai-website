import React from 'react';
import { Mail, Building2, MapPin } from 'lucide-react';

export const EMAIL = 'support@stellaragents.in';
const ADDRESS = 'WeWork Olympia Cyberspace, No 21/22, Arulayiammanpet 2nd St, Alandur Rd, Guindy, Chennai, Tamil Nadu 600032, India';
const LEGAL = 'STELLARONE HEALTH TECHNOLOGIES PRIVATE LIMITED';

export const ContactCard = () => (
    <div id="contact-details" className="mt-10 rounded-2xl border border-white/10 bg-[#050505] p-6">
        <h3 className="font-display text-lg font-semibold text-[#e5e5e5]">Contact us</h3>
        <ul className="mt-4 space-y-4 text-sm text-[#a3a3a3]">
            <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-neutral-300" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`} className="text-neutral-300 hover:text-white underline-offset-4 hover:underline">{EMAIL}</a>
            </li>
            <li className="flex gap-3">
                <Building2 className="h-5 w-5 shrink-0 text-neutral-300" aria-hidden="true" />
                <span>Stellar Agents is a brand of <span className="font-semibold text-[#e5e5e5]">{LEGAL}</span></span>
            </li>
            <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-neutral-300" aria-hidden="true" />
                <span><span className="block text-xs uppercase tracking-widest text-[#8a8a8a]">Registered office</span>{ADDRESS}</span>
            </li>
        </ul>
        <dl className="mt-5 grid gap-3 border-t border-white/10 pt-4 text-xs sm:grid-cols-2">
            <div><dt className="uppercase tracking-widest text-[#8a8a8a]">GSTIN</dt><dd className="mt-1 font-mono text-[#e5e5e5]">33ABQCS1066G1Z9</dd></div>
        </dl>
    </div>
);

export const FooterCompany = () => (
    <div className="max-w-7xl mx-auto mt-8 border-t border-white/10 px-6 pt-6 lg:px-8 text-xs leading-relaxed text-[#a3a3a3]">
        <div className="grid gap-4 md:grid-cols-3">
            <p>Stellar Agents is a brand of <span className="text-[#e5e5e5]">{LEGAL}</span></p>
            <p>{ADDRESS}</p>
            <p>
                <a href={`mailto:${EMAIL}`} className="text-neutral-300 hover:text-white">{EMAIL}</a>
                <br />GSTIN: 33ABQCS1066G1Z9
            </p>
        </div>
        <p className="mt-4 text-[#8a8a8a]">© 2026 {LEGAL}. All rights reserved.</p>
    </div>
);
