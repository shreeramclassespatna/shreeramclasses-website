import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import MeetAlokSir from "@/components/MeetAlokSir";
import Courses from "@/components/Courses";
import GalleryPreview from "@/components/GalleryPreview";
import PageOverviews from "@/components/PageOverviews";
import FAQ from "@/components/FAQ";
import AdmissionCTASection from "@/components/AdmissionCTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import NewsTicker from "@/components/NewsTicker";
import YoutubeSection from "@/components/Youtube";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-brand text-brand-text flex flex-col justify-between">
      {/* Dynamic Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Condensed Homepage Sections */}
        <Hero />
        <NewsTicker />
        <WhyChooseUs />
        <MeetAlokSir />
        <Courses />
        <GalleryPreview />
        <YoutubeSection />
        <PageOverviews />
        <FAQ />
        <AdmissionCTASection />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Conversions overlay */}
      <FloatingCTA />
    </div>
  );
}
