import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact Us | Shree Ram Classes Patna",
  description: "Get in touch with Shree Ram Classes Patna. Call us at +91 77799 77725, email shreeramclassespatna@gmail.com, or visit our centre near Mahendru Post Office.",
};

export default function ContactPage() {
  const web3FormsAccessKey = process.env.WEB3FORMS_ACCESS_KEY ?? "";

  return (
    <div className="relative min-h-screen bg-bg-brand text-brand-text flex flex-col justify-between pt-16">
      <Navbar />

      <main className="flex-grow">
        {/* Page Banner Header */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-10 md:py-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center space-x-1.5 bg-accent/15 border border-accent/30 text-accent px-3 py-1 rounded-full w-fit mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="font-inter font-bold text-[9px] uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="font-montserrat font-black text-2xl sm:text-4xl text-white">Contact Our Team</h1>
            <p className="font-inter font-medium text-xs sm:text-sm text-gray-200 mt-2 max-w-lg mx-auto">
              Have questions about batches, fees, or materials? Reach out directly or book your 3 free trial classes.
            </p>
          </div>
        </section>

        {/* Contact details & form component */}
        <Contact web3FormsAccessKey={web3FormsAccessKey} />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
