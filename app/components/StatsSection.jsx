"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { TrendingUp, Clock, Code, Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true, // تشتغل مرة وحدة بس
    threshold: 0.1,    // نسبة ظهور العنصر عشان يعتبر ظاهر (10%)
  });

  const stats = [
    { value: 99, suffix: "%", label: "Search Engine Optimization (SEO)", icon: <TrendingUp className="mx-auto mb-3 text-blue-500" size={36} /> },
    { value: 2, suffix: "", label: "Years Experience", icon: <Clock className="mx-auto mb-3 text-green-500" size={36} /> },
    { value: 15, suffix: "+", label: "Website Projects", icon: <Code className="mx-auto mb-3 text-purple-500" size={36} /> },
    { value: 100, suffix: "%", label: "Passion", icon: <Heart className="mx-auto mb-3 text-pink-500" size={36} /> },
  ];

  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
        {stats.map(({ value, suffix, label, icon }, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-full border-4 border-gray-600 p-8 cursor-default shadow-md
              hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            {icon}
            <div className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500" ref={ref}>
              {inView ? (
                <CountUp end={value} duration={3} suffix={suffix} />
              ) : (
                <span>{value}{suffix}</span> // أو أي شكل قبل ما يبدأ العد
              )}
            </div>
            <p className="uppercase tracking-widest text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
