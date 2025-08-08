"use client";
import { useEffect } from "react";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BenefitsSection() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // once = يشتغل مرة واحدة
    }, []);

    const benefits = [
        {
            title: "Modern & Attractive Design",
            description:
                "We use the latest design techniques to create a website that impresses your visitors and reflects your brand professionally.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            ),
        },
        {
            title: "Fast & Responsive Performance",
            description:
                "Our websites are fully responsive and load fast to ensure your visitors have a smooth experience on any device.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h4l3 8 4-16 3 8h4"
                    />
                </svg>
            ),
        },
        {
            title: "Excellent SEO Optimization",
            description:
                "We ensure your website ranks higher in search results to attract more visitors and potential clients.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 18v-4m-5-6v6m-4 0h12"
                    />
                </svg>
            ),
        },
        {
            title: "Continuous Support",
            description:
                "We provide fast and effective technical support around the clock to keep your website running smoothly.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12h.01M12 12h.01M6 12h.01M21 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                    />
                </svg>
            ),
        },
        {
            title: "Fast & Efficient Delivery",
            description:
                "I complete projects quickly without compromising quality, ensuring you get your website on time.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
        },
        {
            title: "Full-stack Development",
            description:
                "From frontend to backend, I build scalable and robust websites with clean, maintainable code.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7h18M3 12h18M3 17h18"
                    />
                </svg>
            ),
        },
        {
            title: "Optimized for Speed",
            description:
                "I optimize every website for lightning-fast load times and seamless user experience.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
        },
        {
            title: "Clean & Maintainable Code",
            description:
                "I write clean, well-structured code that’s easy to maintain and scale as your project grows.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-16 bg-gray-950 text-white px-6 md:px-16">
            <h1 className="text-6xl font-extrabold text-center mb-2" data-aos="fade-down">
                Why Choose to Build Your Website With Me?
            </h1>
            <h3 className="text-center text-gray-400 text-lg mt-2 mb-12 max-w-xl mx-auto" data-aos="fade-down">
                Delivering cutting-edge web solutions tailored to your business goals.
            </h3>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {benefits.map(({ title, description, icon }, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-default"
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <div className="mb-4">{icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-gray-300">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
