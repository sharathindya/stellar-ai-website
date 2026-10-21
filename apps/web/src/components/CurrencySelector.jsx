import React from 'react';
import { useCurrency, CURRENCIES } from '../contexts/CurrencyContext';
import { Globe } from 'lucide-react';

const CurrencySelector = () => {
    const { currency, setCurrency } = useCurrency();

    return (
        <div className="relative flex items-center">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#050505] px-3 py-1.5 text-xs text-[#e5e5e5]">
                <Globe className="h-3.5 w-3.5 text-neutral-300" />
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-transparent font-mono text-xs text-neutral-300 font-semibold focus:outline-none cursor-pointer"
                >
                    {Object.values(CURRENCIES).map((c) => (
                        <option key={c.code} value={c.code} className="bg-[#050505] text-[#e5e5e5]">
                            {c.flag} {c.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CurrencySelector;
