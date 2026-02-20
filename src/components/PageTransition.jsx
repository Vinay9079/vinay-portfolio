import { useEffect } from 'react';

const PageTransition = ({ children }) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.section, .glass-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('popup-visible');
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [children]);

  return <main>{children}</main>;
};

export default PageTransition;
