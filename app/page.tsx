import AboutSection from "./components/sections/about/AboutSection";
import ConsultantsSection from "./components/sections/consultants/ConsultantsSection";
import HeroSection from "./components/sections/hero/HeroSection";
import StatisticsSection from "./components/sections/statistics/StatisticsSection";

export default function page() {
  return (
    <div className="grid grid-cols-1">
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <ConsultantsSection />
    </div>
  );
}
