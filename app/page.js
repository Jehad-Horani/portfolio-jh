import BenefitsSection from "./components/Benefits";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import StatsSection from "./components/StatsSection";
import WorkflowSection from "./components/WorkflowSection";



export default function Home() {
  return (
    <main className="relative">
      <Hero />
     <BenefitsSection/>
    <StatsSection/>
    <ProjectsSection/>
    <WorkflowSection/>
    <ContactForm />
    </main>
  );
}