import { useEffect, useRef } from 'react';

export const useIntersectionObserver = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    console.log('imgRef', imgRef);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('view 노출', entry);
          const img = entry.target.getAttribute('data-src');
          entry.target.src = img;
          observer.unobserve(entry.target);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, [imgRef]);

  return { ref: imgRef };
};
