/**
 * Home Page — Providence Presbyterian Church
 * Design: Luminous Stone — warm amber/ivory/charcoal editorial aesthetic
 * 
 * Sections:
 * 1. Navigation (sticky, transparent over hero)
 * 2. Hero — full-viewport church exterior
 * 3. Welcome — about the church
 * 4. Worship — order of service + sanctuary image
 * 5. Sermons — recent messages
 * 6. Beliefs — confessional standards + communion image
 * 7. Community — events + community image
 * 8. Missions — ministries grid
 * 9. Officers — leadership
 * 10. Contact — plan a visit + map
 * 11. Footer
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WorshipSection from "@/components/WorshipSection";
import SermonsSection from "@/components/SermonsSection";
import BeliefsSection from "@/components/BeliefsSection";
import CommunitySection from "@/components/CommunitySection";
import MissionsSection from "@/components/MissionsSection";
import OfficersSection from "@/components/OfficersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <WorshipSection />
      <SermonsSection />
      <BeliefsSection />
      <CommunitySection />
      <MissionsSection />
      <OfficersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
