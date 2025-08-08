"use client";
import { useEffect } from "react";
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
    triggerOnce: true,
    threshold: 0.2, // يشتغل لما 20% من العنصر تظهر
  });

  const stats = [
    {
      value: 99,
      suffix: "%",
      label: "Search Engine Optimization (SEO)",
      icon: <TrendingUp className="mx-auto mb-3 text-blue-400" size={36} />,
    },
    {
      value: 2,
      suffix: "",
      label: "Years Experience",
      icon: <Clock className="mx-auto mb-3 text-green-400" size={36} />,
    },
    {
      value: 15,
      suffix: "+",
      label: "Website Projects",
      icon: <Code className="mx-auto mb-3 text-purple-400" size={36} />,
    },
    {
      value: 100,
      suffix: "%",
      label: "Passion",
      icon: <Heart className="mx-auto mb-3 text-pink-400" size={36} />,
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-14 px-5 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
        {stats.map(({ value, suffix, label, icon }, i) => (
          <div
            key={i}
            className="bg-gray-800/80 rounded-2xl border border-gray-700 p-6 sm:p-8 cursor-default shadow-lg
              hover:scale-105 hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            {icon}
            <div
              className="text-4xl sm:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500"
              ref={ref}
            >
              {inView ? (
                <CountUp end={value} duration={2.5} suffix={suffix} />
              ) : (
                <span>
                  {value}
                  {suffix}
                </span>
              )}
            </div>
            <p className="uppercase tracking-wide text-gray-400 text-sm sm:text-base leading-snug">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
