import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Adds a subtle fade-up to every section after the first as it scrolls into view.
export default function FadeInSections() {
    const { pathname } = useLocation();
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const els = Array.from(document.querySelectorAll('main section, #root > div > section, section')).slice(1);
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
        els.forEach((el) => { el.classList.add('fade-section'); io.observe(el); });
        return () => io.disconnect();
    }, [pathname]);
    return null;
}
