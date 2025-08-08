import BenefitsSection from "./components/Benefits";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TypingScrollSection from "./components/Second";
import StatsSection from "./components/StatsSection";



export default function Home() {
  return (
    <main className="relative">
      <Hero />
     <TypingScrollSection/>
     <BenefitsSection/>
    <StatsSection/>
    <ProjectsSection/>
    </main>
  );
}