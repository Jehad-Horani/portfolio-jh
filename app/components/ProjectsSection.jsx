"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
   {
    title: "Takhassus.com",
    description:
      "An integrated academic marketplace and student hub offering book trading, lecture exchanges, curated summaries, and major-specific updates. The platform also features a specialized ambassador system that connects students with representatives from each major for personalized academic guidance.",
    image: "/takhassus.png",
    link: "https://takhassus.com",
    tech: "Next.js, Tailwind CSS, Vercel , Supabase SQL , TypeScript",
  },
  {
    title: "MedRoots 25 Conference",
    description:
      "A cutting-edge health tech conference website built with Next.js and Tailwind CSS. Features interactive sessions, speaker profiles, and smooth animations to engage attendees worldwide.",
    image: "/medroots.png",
    link: "https://www.medroots25.com",
    tech: "Next.js, Tailwind CSS, GSAP, AOS, Supabase SQL",
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
    image: "/littil.png",
    link: "https://littil-lemon.vercel.app/",
    tech: "Next.js, Tailwind CSS, React, Form Handling",
  },
 

];

export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6 md:px-16">
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

      <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-3">
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
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{description}</p>
              <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 font-mono mb-4 italic">{tech}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="block">

                <button
                  className="bg-gradient-to-br from-pink-500 to-purple-600 hover:scale-105 cursor-pointer text-white py-2 px-4 rounded-lg transition"
                  aria-label={`Visit ${title} project`}
                >
                  View Project
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
