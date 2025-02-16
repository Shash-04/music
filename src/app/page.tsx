import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses"
import WhyChooseUs from "@/components/WhyChooseUs";
import { TestimonialCards } from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Wavy from "@/components/Wavy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Wavy />
      <Footer />
    </main>
  );
}
