"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { gsap } from "gsap";
import styles from "@/components/style/LoadingScreen.module.css";
import { Montserrat } from 'next/font/google';

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Loader = () => {
  const [active, setActive] = useState(true);

  const loaderRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useMemo(() => [] as HTMLDivElement[], []);
  const lettersRef = useMemo(() => [] as HTMLSpanElement[], []);

  const colors = useMemo(
    () => ["#9AD3BC", "#F3EAC2", "#FFFFCC", "#F5B461", "#EC524B", "#FF70AB", "#FFAF61", "#FFDB5C", "#C3FF93", "#FFCCCC"], 
    []
  );

  useEffect(() => {
    const sections = sectionsRef;
    const letters = lettersRef;

    // GSAP animation timeline
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => setActive(false),
    });

    tl.to(letters, {
      opacity: 1,
      yPercent: -20,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(sections, {
        yPercent: -100,
        stagger: 0.1,
        duration: 1,
        ease: "power3.inOut",
      })
      .to(
        loaderRef.current,
        {
          y: "-100%",
          duration: 1.2,
          ease: "power3.inOut",
        },
        "-=0.7"
      );

    tl.play();

    // Cleanup GSAP timeline
    return () => {
      tl.kill();
    };
  }, [sectionsRef, lettersRef]);

  return (
    <div
      ref={loaderRef}
      className={`${styles.loader} ${!active ? styles.hidden : ""} ${montserrat.className} uppercase font-bold text-3xl`}
    >
      {"sacredreach".split("").map((letter, index) => (
        <div
          key={index}
          className={styles.loadingSec}
          ref={(el) => {
            if (el) sectionsRef[index] = el;
          }}
          style={{ backgroundColor: colors[index % colors.length] }} 
        >
          <span
            ref={(el) => {
              if (el) lettersRef[index] = el;
            }}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Loader;
