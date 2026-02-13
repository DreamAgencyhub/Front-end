import HeroSection from "./components/sections/hero/HeroSection";
import StatisticsSection from "./components/sections/statistics/StatisticsSection";

export default function page() {
  return (
    <div className="grid grid-cols-1">
      <HeroSection />
      <StatisticsSection />
    </div>
  );
}
