import Sidebar from "@/components/sidebar/Sidebar";
import ScrollIndicatorLine from "@/components/navigation/ScrollIndicatorLine";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import SkillsEcosystem from "@/components/skills/SkillsEcosystem";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative overflow-x-hidden">
      
      {/* 50% Left Column Sidebar — Fixed & Center-Aligned on Desktop with University Education */}
      <Sidebar />

      {/* Middle Vertical Scroll Progress Line & Draggable </ > Code Node */}
      <ScrollIndicatorLine />

      {/* 50% Right Column Main Scrollable Content Feed */}
      <main className="w-full lg:ml-[50%] lg:w-[50%] min-h-screen">
        <ExperienceTimeline />
        <SkillsEcosystem />
        <ProjectShowcase />
        <ContactSection />
        <Footer />
      </main>

    </div>
  );
}
