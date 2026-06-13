import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofStrip from "@/components/SocialProofStrip";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import MeetAlokSir from "@/components/MeetAlokSir";
import Courses from "@/components/Courses";
import LearningSystem from "@/components/LearningSystem";
import StudentSuccess from "@/components/StudentSuccess";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-brand text-brand-text flex flex-col justify-between">
      {/* Dynamic Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Sections */}
        <Hero />
        <SocialProofStrip />
        <About />
        <WhyChooseUs />
        <MeetAlokSir />
        <Courses />
        <LearningSystem />
        <StudentSuccess />
        <Reviews />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Conversions overlay */}
      <FloatingCTA />
    </div>
  );
}
// 
