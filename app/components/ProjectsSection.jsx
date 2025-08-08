"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "MedRoots 25 Conference",
    description:
      "A cutting-edge health tech conference website built with Next.js and Tailwind CSS. Features interactive sessions, speaker profiles, and smooth animations to engage attendees worldwide.",
    image: "/medroots.png",
    link: "https://www.medroots25.com",
    tech: "Next.js, Tailwind CSS, GSAP, AOS",
  },
  {
    title: "Umaima Medical Center",
    description:
      "A sleek, modern medical center website designed for beauty and healthcare services, emphasizing a dark theme with smooth user experience and booking integration.",
    image: "/umaima.png",
    link: "https://www.umaima-medical-center.com",
    tech: "Next.js, Tailwind CSS, GSAP, Vercel",
  },
  {
    title: "Little Lemon Restaurant",
    description:
      "A vibrant and friendly restaurant website featuring menu browsing, reservation forms, and mouth-watering visuals inspired by the authentic Little Lemon menu.",
    image: "/littl.png",
    link: "littil-lemon.vercel.app", 
    tech: "Next.js, Tailwind CSS, React, Form Handling",
  },
  {
    title: "Coffee Academy",
    description:
      "An educational website about coffee varieties, brewing techniques, and recipes, featuring a caffeine tracking tool for coffee lovers.",
    image: "/coffee-academy.png",
    link: "#", // حط الرابط الصحيح إذا موجود
    tech: "HTML, CSS, JavaScript, Bootstrap",
  },
];

export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4" data-aos="fade-down">
          Projects
        </h2>
        <p
          className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A small selection of my projects, showcasing creativity, performance,
          and cutting-edge technology.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {projects.map(({ title, description, image, link, tech }, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative h-48 md:h-40 lg:h-48 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">{description}</p>
                <p className="text-sm text-blue-400 font-mono mb-4 italic">{tech}</p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
                  aria-label={`Visit ${title} project`}
                >
                  View Project
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
