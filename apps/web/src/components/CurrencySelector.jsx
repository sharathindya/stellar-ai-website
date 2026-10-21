import React from 'react';
import { useCurrency, CURRENCIES } from '../contexts/CurrencyContext';
import { Globe } from 'lucide-react';

const CurrencySelector = () => {
    const { currency, setCurrency } = useCurrency();

    return (
        <div className="relative flex items-center">
            <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-900 shadow-sm">
                <Globe className="h-3.5 w-3.5 text-indigo-600" />
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-transparent font-mono text-xs text-indigo-600 font-semibold focus:outline-none cursor-pointer"
                >
                    {Object.values(CURRENCIES).map((c) => (
                        <option key={c.code} value={c.code} className="bg-white text-slate-900">
                            {c.flag} {c.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CurrencySelector;
