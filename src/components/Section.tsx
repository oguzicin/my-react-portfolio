import React, { useEffect, useRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing after revealing the section
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id={id}
      className="hidden h-[100vh] items-center "
      ref={sectionRef}
    >
      {children}
    </section>
  );
};

export default Section;
