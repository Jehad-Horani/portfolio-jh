import BenefitsSection from "./components/Benefits";
import Hero from "./components/Hero";
import TypingScrollSection from "./components/second";
import StatsSection from "./components/StatsSection";



export default function Home() {
  return (
    <main className="relative">
      <Hero />
     <TypingScrollSection/>
     <BenefitsSection/>
    <StatsSection/>
    </main>
  );
}