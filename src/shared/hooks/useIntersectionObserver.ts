import { useEffect, useRef } from 'react';

export const useIntersectionObserver = <TElement extends Element>() => {
  const elementRef = useRef<TElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target as HTMLElement & { dataset?: DOMStringMap };
        const dataSrc = target.getAttribute('data-src');

        if (dataSrc && target instanceof HTMLImageElement) {
          target.src = dataSrc;
        }

        observer.unobserve(entry.target);
      });
    });

    const current = elementRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, []);

  return { ref: elementRef };
};
