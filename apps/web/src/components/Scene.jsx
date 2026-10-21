import React from 'react';
import sceneImages from '@/sceneImages';

const Scene = ({ id, slot, label, title, sub, cta, href, as = 'h2', eager = false, secondary }) => {
    const H = as;
    const cfg = sceneImages[slot] || {};
    const right = cfg.align === 'right';
    return (
        <section id={id} className="scene relative isolate flex min-h-[100svh] items-end overflow-hidden bg-black" aria-labelledby={`${id}-title`}>
            {cfg.src ? (
                <img src={cfg.src} alt="" aria-hidden="true" loading={eager ? 'eager' : 'lazy'} decoding="async" fetchpriority={eager ? 'high' : 'auto'}
                    style={{ objectPosition: cfg.position || 'center', ...(cfg.shift ? { translate: cfg.shift, scale: String(cfg.zoom || 1.2) } : {}) }}
                    className="scene-img absolute inset-0 -z-20 h-full w-full object-cover" />
            ) : (
                <div className="absolute inset-0 -z-20 scene-plain" aria-hidden="true" />
            )}
            <div className={`absolute inset-0 -z-10 ${right ? 'scene-overlay-r' : 'scene-overlay'}`} aria-hidden="true" />
            <div className="mx-auto w-full max-w-7xl px-6 pb-20 sm:pb-24 lg:px-10">
                <div className={`max-w-3xl ${right ? 'ml-auto text-left md:max-w-xl' : ''}`}>
                    {label && <p className="scene-label">{label}</p>}
                    <H id={`${id}-title`} className="scene-title mt-3">{title}</H>
                    {sub && <p className="mt-4 max-w-xl text-base text-[#d4d4d4] sm:text-lg">{sub}</p>}
                    <div className="mt-8 flex flex-wrap gap-4">
                        {cta && <a href={href} className="scene-btn">{cta}</a>}
                        {secondary && <a href={secondary.href} className="scene-btn">{secondary.label}</a>}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Scene;
