"use client";

import { BookOpen, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#07253a] text-white border-t border-white/5 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          
          {/* Logo & About Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="bg-accent/10 p-2 rounded-full border border-accent/20">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <span className="font-montserrat font-black text-base tracking-tight text-white block leading-none">
                  SHREE RAM
                </span>
                <span className="font-inter font-bold text-[10px] text-accent tracking-widest uppercase block leading-none mt-1">
                  CLASSES PATNA
                </span>
              </div>
            </Link>
            <p className="font-inter font-medium text-xs text-gray-300 leading-relaxed max-w-sm">
              Patna&apos;s leading coaching institute for Class 11 &amp; 12 Humanities/Arts and CUET preparation. Success Is Our Tradition. Guided directly by Alok Kumar Singh.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-accent">Quick Links</h4>
            <ul className="space-y-2 font-inter text-xs text-gray-300 font-semibold">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/#admission" onClick={(e) => handleNavClick(e, "/#admission")} className="hover:text-accent transition-colors">Admission</Link>
              </li>
            </ul>
          </div>

          {/* Courses Categories Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-accent">Arts Specialization</h4>
            <ul className="space-y-2 font-inter text-xs text-gray-300">
              <li>Class 11 Arts (Foundation Batch)</li>
              <li>Class 12 Arts (Board Prep Batch)</li>
              <li>CUET Preparation (Integrated domain tests)</li>
              <li>Handwritten Notes &amp; Answer Sheets</li>
              <li>Visual Map Practice &amp; Diagrams</li>
            </ul>
          </div>

          {/* Location & Support Column */}
          <div className="lg:col-span-3 space-y-3 font-inter text-xs text-gray-300">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-accent">Support Centre</h4>
            <div className="space-y-2.5">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4.5 w-4.5 text-accent mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">3rd Floor, Bhukkad Restaurant Building, Near Mahendru Post Office, Ashok Rajpath, Patna - 800006</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4.5 w-4.5 text-accent flex-shrink-0" />
                <a href="tel:+917779977725" className="hover:text-accent transition-colors">+91 77799 77725</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4.5 w-4.5 text-accent flex-shrink-0" />
                <a href="mailto:shreeramclassespatna@gmail.com" className="hover:text-accent transition-colors">shreeramclassespatna@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

  {/* Bottom copyright block */}
<div className="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-inter font-normal text-gray-500">
  <p>
    &copy; {currentYear} Shree Ram Classes Patna. Estd. 2021. All rights reserved.
  </p>
  
  <p className="flex items-center gap-1.5">
    <span className="text-gray-400">Powered by</span>
    <a 
      href="https://srstudioindia.vercel.app" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-accent hover:underline font-medium transition-all"
    >
      SR Studio
    </a>
  </p>
</div>

      </div> 
    </footer>
  );
}
