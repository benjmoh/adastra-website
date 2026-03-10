"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionShell({ id, children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-container py-18 sm:py-22 lg:py-28 fade-up ${
        visible ? "visible" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

