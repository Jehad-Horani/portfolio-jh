"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    // دالة تتبع حركة الماوس داخل القسم
    function handleMouseMove(e) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 30;  // -15 لـ +15 درجة تقريبا
        const y = ((e.clientY - top) / height - 0.5) * 30;
        setOffset({ x, y });
    }

    // ترجع الوضع للصفر لما يخرج الماوس
    function handleMouseLeave() {
        setOffset({ x: 0, y: 0 });
    }

    return (
        <section
            className="relative h-screen flex flex-col items-center justify-center text-center px-4 perspective-[800px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* خلفية متحركة Parallax */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a,#000)]">
                <div className="absolute inset-0  opacity-10 animate-[pulse_8s_infinite]" />
            </div>

            {/* هالة مضيئة خلف الصورة */}
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />

            {/* الصورة تتحرك بزاوية */}
            <div
                style={{
                    transform: `rotateY(${offset.x}deg) rotateX(${-offset.y}deg)`,
                    transition: offset.x === 0 && offset.y === 0 ? "transform 0.5s ease" : "none",
                }}
                className="relative"
            >
                <div
                    data-aos="fade-down"
                    className="relative animate-[float_6s_ease-in-out_infinite]"
                >
                    <Image
                        src="/jehad.png"
                        alt="Jehad Horani"
                        width={220}
                        height={220}
                        className="rounded-full border-4 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.7)]"
                    />
                </div>
            </div>

            {/* الاسم يتحرك بشكل أقل */}
            <h1
                className="mt-6 text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 drop-shadow-lg"
                style={{
                    transform: `translateX(${offset.x / 5}px) translateY(${offset.y / 5}px)`,
                    transition: offset.x === 0 && offset.y === 0 ? "transform 0.5s ease" : "none",
                }}
                data-aos="fade-down"
                data-aos-delay="190"
            >
                Jehad Horani
            </h1>

            {/* المسمى الوظيفي */}
            <p
                className="mt-4 text-lg md:text-xl text-gray-300 drop-shadow-sm"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Web Developer | Designer | Creative Coder
            </p>

            {/* الأزرار */}
            <div
                className="mt-8 flex flex-wrap justify-center gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                {/* زر شفاف */}
                <a
                    href="#contact"
                    className="border border-gray-500/50 hover:bg-gray-800/70 px-6 py-3 rounded-lg transition duration-300 backdrop-blur-sm"
                >
                    Contact Me
                </a>

                {/* زر متحرك بحدود متدرجة */}
                <a
                    href="#projects"
                    className="relative group px-6 py-3 rounded-lg text-white bg-gradient-to-br from-pink-500 to-purple-600  overflow-hidden"
                >
                    <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-blue-300 group-hover:animate-[spin_2s_linear_infinite]" />
                    <span className="relative flex items-center gap-2">
                        View Projects <ArrowRight size={18} />
                    </span>
                </a>
            </div>
        </section>
    );
}
