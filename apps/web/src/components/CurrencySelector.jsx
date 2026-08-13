import React from 'react';
import { useCurrency, CURRENCIES } from '../contexts/CurrencyContext';
import { Globe } from 'lucide-react';

const CurrencySelector = () => {
    const { currency, setCurrency } = useCurrency();

    return (
        <div className="relative flex items-center">
            <div className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/90 px-3 py-1.5 text-xs text-slate-200 shadow-sm backdrop-blur">
                <Globe className="h-3.5 w-3.5 text-cyan-400" />
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-transparent font-mono text-xs text-cyan-300 font-semibold focus:outline-none cursor-pointer"
                >
                    {Object.values(CURRENCIES).map((c) => (
                        <option key={c.code} value={c.code} className="bg-slate-950 text-slate-200">
                            {c.flag} {c.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CurrencySelector;
