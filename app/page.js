import BenefitsSection from "./components/Benefits";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TypingScrollSection from "./components/Second";
import StatsSection from "./components/StatsSection";
import WorkflowSection from "./components/WorkflowSection";



export default function Home() {
  return (
    <main className="relative">
      <Hero />
     <TypingScrollSection/>
     <BenefitsSection/>
    <StatsSection/>
    <ProjectsSection/>
    <WorkflowSection/>
    <ContactForm />
    </main>
  );
}