import AboutSection from "./components/sections/about/AboutSection";
import ConsultantsSection from "./components/sections/consultants/ConsultantsSection";
import CourseSection from "./components/sections/Courses/CourseSection";
import HeroSection from "./components/sections/hero/HeroSection";
import StatisticsSection from "./components/sections/statistics/StatisticsSection";
import TestimonialSection from "./components/sections/testimonial/TestimonialSection";

export default function page() {
  return (
    <div className="grid grid-cols-1 gap-12">
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <ConsultantsSection />
      <CourseSection />
      <TestimonialSection />
    </div>
  );
}
