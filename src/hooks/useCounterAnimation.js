import { useEffect } from 'react';

export function useCounterAnimation(selector = '[data-count]') {
  useEffect(() => {
    const counters = document.querySelectorAll(selector);
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const duration = 2000;
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = current + '+';
            if (progress < 1) requestAnimationFrame(updateCount);
          }

          requestAnimationFrame(updateCount);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(counter => observer.observe(counter));
    return () => observer.disconnect();
  }, [selector]);
}
