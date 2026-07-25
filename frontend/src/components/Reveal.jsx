import { useEffect, useRef } from 'react';

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in-view');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`}>{children}</Tag>
  );
}