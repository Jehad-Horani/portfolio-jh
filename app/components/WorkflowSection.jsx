"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
  {
    subtitle: "Step 1",
    title: "Project Request",
    description:
      "At the start of our collaboration, you share your project request and key info. This helps me understand if I’m the right fit. If so, we’ll schedule a video call to dive deeper.",
  },
  {
    subtitle: "Step 2",
    title: "First Meeting",
    description:
      "Building trust is my priority. In our first meeting, we get to know each other, discuss your goals and requirements, clarify questions, and map out next steps.",
  },
  {
    subtitle: "Step 3",
    title: "Planning & Design",
    description:
      "Based on our conversation, I craft a detailed project plan and design concepts. This ensures your vision is brought to life clearly before development begins.",
  },
  {
    subtitle: "Step 4",
    title: "Proposal & Agreement",
    description:
      "I prepare a transparent project proposal with fixed pricing. No hourly surprises — just a clear overview so you can approve and move forward confidently.",
  },
  {
    subtitle: "Step 5",
    title: "Implementation",
    description:
      "With all materials ready, I develop your site focusing on clean code, open communication (e.g., Trello updates), and regular progress reports.",
  },
  {
    subtitle: "Step 6",
    title: "Quality Assurance & Launch",
    description:
      "Before launch, the website undergoes rigorous testing to ensure flawless performance. Then, it’s deployed using ultra-fast hosting or integrated seamlessly via code export.",
  },
  {
    subtitle: "Step 7",
    title: "Post-Launch Support",
    description:
      "After launch, I stay available to fix bugs, make improvements, and provide ongoing support to keep your website performing at its best.",
  },
];

export default function WorkflowSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const stepsElements = containerRef.current.querySelectorAll(".workflow-step");

    stepsElements.forEach((step, i) => {
      const direction = i % 2 === 0 ? -1 : 1; // تناوب بين اليمين واليسار

      gsap.fromTo(
        step,
        {
          autoAlpha: 0,
          x: 200 * direction,
          y: 50,
          rotation: direction * 15,
          scale: 0.6,
          filter: "blur(10px)",
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

     
    });

    // تنظيف عند إلغاء التركيب
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className=" text-white py-20 px-6 md:px-16"
    >
      <h2 className="text-center text-5xl font-extrabold mb-14 drop-shadow-lg">
        My Workflow
      </h2>

      <div className="max-w-4xl mx-auto space-y-20 relative">
        {/* خط عمودي في المنتصف */}
        <div
          aria-hidden="true"
          className="block absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2 rounded-full"
        ></div>

        {workflowSteps.map(({ subtitle, title, description }, i) => (
          <div
            key={i}
            className={`workflow-step relative max-w-3xl md:max-w-[600px] rounded-xl p-8 bg-white/10 backdrop-blur-md shadow-xl cursor-default
              md:absolute md:w-1/2
              ${
                i % 2 === 0
                  ? "md:left-0 text-left md:translate-x-[-30px]"
                  : "md:right-0 text-right md:translate-x-[30px]"
              }
              `}
            style={{ top: `${i * 120}px` }}
          >
            <div
              className={`absolute top-8 md:top-10 ${
                i % 2 === 0 ? "right-[-70px]" : "left-[-70px]"
              } w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-3xl font-bold drop-shadow-lg`}
            >
              {subtitle.replace("Step ", "")}
            </div>

            <h3 className="text-3xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-200 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
