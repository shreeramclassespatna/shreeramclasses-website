"use client";

import { BookOpen, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-hover text-white border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & About Column */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center space-x-3 group">
              <div className="bg-accent/10 p-2 rounded-full border border-accent/20">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div>
                <span className="font-montserrat font-black text-lg tracking-tight text-white block leading-none">
                  SHREE RAM
                </span>
                <span className="font-inter font-bold text-xs text-accent tracking-widest uppercase block leading-none mt-1">
                  CLASSES PATNA
                </span>
              </div>
            </a>
            <p className="font-inter font-medium text-sm text-gray-300 leading-relaxed max-w-sm">
              Patna&apos;s leading coaching institute for Class 11 and 12 Humanities/Arts. Empowering students under the guidance of Alok Sir with smartboard learning, structured notes, and mock tests.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all duration-200" aria-label="Facebook">
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all duration-200" aria-label="Instagram">
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.051 1.96.23 2.673.914.712.685.965 1.503 1.014 2.657.04 1.11.053 1.485.053 3.64 0 2.155-.013 2.53-.053 3.64-.049 1.154-.302 1.972-1.014 2.657-.713.683-1.53.86-2.673.914-.925.043-1.279.054-3.71.054s-2.784-.01-3.71-.054c-1.139-.054-1.957-.23-2.67-.914-.715-.683-.967-1.501-1.014-2.657-.04-1.11-.053-1.485-.053-3.64 0-2.155.013-2.53.053-3.64.047-1.154.299-1.972 1.014-2.657.713-.683 1.53-.86 2.67-.914.925-.043 1.28-.054 3.711-.054zm0-1.718c-2.486 0-3.82.011-4.793.058-1.506.069-2.54.349-3.446 1.258-.907.906-1.185 1.94-1.254 3.446-.047.973-.059 2.307-.059 4.793s.012 3.82.059 4.793c.069 1.506.347 2.54 1.254 3.446.906.907 1.94 1.185 3.446 1.254.973.047 2.307.059 4.793.059s3.82-.012 4.793-.059c1.506-.069 2.54-.347 3.446-1.254.907-.906 1.185-1.94 1.254-3.446.047-.973.059-2.307.059-4.793s-.012-3.82-.059-4.793c-.069-1.506-.347-2.54-1.254-3.446-.906-.907-1.94-1.185-3.446-1.254-.973-.047-2.307-.059-4.793-.059zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all duration-200" aria-label="Youtube">
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11C4.483 20.455 12 20.455 12 20.455s7.517 0 9.387-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-accent">Quick Links</h4>
            <ul className="space-y-2.5 font-inter text-sm text-gray-300 font-medium">
              <li><a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, "#courses")} className="hover:text-accent transition-colors">Courses Offered</a></li>
              <li><a href="#aloksir" onClick={(e) => handleNavClick(e, "#aloksir")} className="hover:text-accent transition-colors">Alok Sir Profile</a></li>
              <li><a href="#reviews" onClick={(e) => handleNavClick(e, "#reviews")} className="hover:text-accent transition-colors">Reviews</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Courses Categories Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-accent">Arts Specialization</h4>
            <ul className="space-y-2.5 font-inter text-sm text-gray-300 font-medium">
              <li><span className="text-gray-300 block">Class 12 History Board Prep</span></li>
              <li><span className="text-gray-300 block">Class 12 Political Science Syllabus</span></li>
              <li><span className="text-gray-300 block">Class 12 Geography (Theory &amp; Maps)</span></li>
              <li><span className="text-gray-300 block">Class 11 Arts (Foundation Modules)</span></li>
              <li><span className="text-gray-300 block">Mock Answer Writing Series</span></li>
              <li><span className="text-gray-300 block">Civil Services Foundation Guidance</span></li>
            </ul>
          </div>

          {/* Location & Support Column */}
          <div className="lg:col-span-3 space-y-4 font-inter text-sm text-gray-300">
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-accent">Support Centre</h4>
            <div className="space-y-3.5">
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-[18px] w-[18px] text-accent mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed text-xs">3rd Floor, Bhukkad Restaurant Building, Ashok Rajpath, Mahendru, Patna 800006</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="h-[18px] w-[18px] text-accent flex-shrink-0" />
                <span>+91 77799 77725</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-[18px] w-[18px] text-accent flex-shrink-0" />
                <span>info@shreeramclassespatna.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-inter font-medium text-gray-400 text-center gap-4">
          <p>&copy; {currentYear} Shree Ram Classes Patna. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="text-gray-400">Designated by Alok Sir Education Initiative</span>
            <span>|</span>
            <span className="text-gray-400">Patna, Bihar</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
