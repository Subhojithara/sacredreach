"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import Link from 'next/link';
import "@/components/style/navbar.scss";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const getVpdr = () => {
    const vph = Math.pow(document.documentElement.offsetHeight, 2);
    const vpw = Math.pow(document.documentElement.offsetWidth, 2);
    const vpd = Math.sqrt(vph + vpw);
    return (vpd * 2) / (circleRef.current?.clientWidth || 1);
  };

  const openNavbar = () => {
    const openTimeline = gsap.timeline();
    openTimeline.set(navbarRef.current, { display: "flex" });
    openTimeline.to(circleRef.current, {
      scale: getVpdr(),
      ease: "power4.inOut",
      duration: 1.5,
    });
    openTimeline.fromTo(
      ".navbar-item",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 },
      "-=1"
    );
  };

  const closeNavbar = () => {
    const closeTimeline = gsap.timeline();
    closeTimeline.fromTo(
      ".navbar-item",
      { y: 0, opacity: 1 },
      { y: 50, opacity: 0, stagger: -0.15, duration: 0.5 }
    );
    closeTimeline.to(circleRef.current, {
      scale: 0,
      ease: "power4.inOut",
      duration: 1,
    });
    closeTimeline.set(navbarRef.current, { display: "none" });
  };

  const toggleNavbar = () => {
    if (isOpen) {
      closeNavbar();
    } else {
      openNavbar();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300 flex items-center justify-center bg-white"
      
    >
      {/* Hamburger menu for all screens */}
      <div
      className="fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300 flex items-center justify-center bg-white"
    >
      <button
        id="menu-toggle"
        onClick={(e) => {
          e.stopPropagation();
          toggleNavbar();
        }}
        className={`btn-toggle ${isOpen ? "open" : ""}`}
        style={{ cursor: "pointer" }}
      >
        <div className="line rounded-full"></div>
        <div className="line rounded-full"></div>
        <div className="line rounded-full"></div>
      </button>
      </div>

      {/* Background circle animation */}
      <div
        ref={circleRef}
        id="bg-circle"
        className="fixed top-4 right-4 z-10 w-20 h-20 bg-black rounded-full transform scale-0"
      />

      {/* Navbar for all screens */}
      <div
        ref={navbarRef}
        className="navbar fixed inset-0 z-20 items-center justify-center hidden"
      >
        <ul className="flex flex-col items-center space-y-8 list-none">
          {[
            { text: "Home", href: "/" },
            { text: "Our Team", href: "/our-team" },
            { text: "Festivals", href: "/festivals" },
            { text: "Contact", href: "/contact" },
          ].map((item, index) => (
            <li key={index} className="navbar-item opacity-0">
              <Link href={item.href}>
                <span
                  className="text-white text-5xl font-bold uppercase relative block px-6 py-4 transition-all duration-500 ease-in-out hover:tracking-wider"
                >
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
