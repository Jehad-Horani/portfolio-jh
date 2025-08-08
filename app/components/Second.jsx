"use client";
import { useEffect, useRef, useState } from "react";

export default function TypingScrollSection() {
  const text = "World-class websites for global companies.";
  const [displayed, setDisplayed] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    let observer;
    let timeout;

    function startTyping() {
      let i = 0;
      function type() {
        setDisplayed(text.slice(0, i));
        i++;
        if (i <= text.length) {
          timeout = setTimeout(type, 100);
        }
      }
      type();
    }

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startTyping();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(sectionRef.current);
    } else {
      startTyping();
    }

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-36 flex items-center justify-center bg-black px-6"
    >
      <h2
        className="text-4xl h-full p-10 md:text-6xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text select-none"
      >
        {displayed}
        <span className="animate-pulse">|</span>
      </h2>
    </section>
  );
}
