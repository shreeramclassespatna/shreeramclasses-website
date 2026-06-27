"use client";

import { useState, useTransition } from "react";
import { Phone, CheckCircle2, Send, MessageSquare, FileText, Check } from "lucide-react";
import { motion } from "framer-motion";
import { LeadInput, submitLeadToWeb3Forms } from "@/lib/web3forms";

interface AdmissionCTASectionProps {
  web3FormsAccessKey: string;
}

export default function AdmissionCTASection({ web3FormsAccessKey }: AdmissionCTASectionProps) {
  const [formData, setFormData] = useState<LeadInput>({
    name: "",
    phone: "",
    className: "class12",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<LeadInput>>({});
  const [isPending, startTransition] = useTransition();
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const validateForm = () => {
    const tempErrors: Partial<LeadInput> = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Enter a valid 10-digit mobile number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    startTransition(async () => {
      const result = await submitLeadToWeb3Forms(formData, web3FormsAccessKey);
      if (result.success) {
        setSubmitResult({ success: true, message: result.message || "Demo class booked successfully!" });
        setFormData({ name: "", phone: "", className: "class12", message: "" });
      } else {
        setSubmitResult({ success: false, message: result.error || "Submission failed" });
      }
    });
  };

  return (
    <section id="admission" className="py-12 md:py-16 bg-[#0B3C5D] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-inter font-bold text-xs text-accent uppercase tracking-widest block mb-2">
            Admissions Open
          </span>
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-3 leading-tight">
            Admission &amp; Inquiry Center
          </h2>
          <p className="font-inter font-medium text-sm text-gray-200 leading-relaxed max-w-lg mx-auto">
            Review the checklist below and book your 3 Free Demo Classes. Our team will contact you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Admission Requirements Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 text-accent bg-accent/10 px-3 py-1.5 rounded-lg border border-accent/20 mb-4">
                  <FileText className="h-4.5 w-4.5" />
                  <span className="font-montserrat font-bold text-xs uppercase tracking-wider">Required Documents</span>
                </div>
                
                <h3 className="font-montserrat font-black text-lg text-white mb-2">Admission Checklist</h3>
                <p className="font-inter text-xs text-gray-300 leading-relaxed mb-6">
                  Please carry original copies of these documents to our Mahendru center during final admission verification.
                </p>

                <ul className="space-y-3.5 mb-6">
                  <li className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="h-5 w-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <span className="block font-montserrat font-bold text-xs text-white">Aadhar Card</span>
                      <span className="block font-inter text-[10px] text-gray-400">For identification &amp; record verification</span>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="h-5 w-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <span className="block font-montserrat font-bold text-xs text-white">Passport Size Photograph</span>
                      <span className="block font-inter text-[10px] text-gray-400">2 recent color photos for physical registers</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Extra branding details */}
              <div className="border-t border-white/10 pt-4 mt-6">
                <span className="block font-montserrat font-bold text-accent text-xs">Mission: &ldquo;1st Division Guaranteed&rdquo;</span>
                <span className="block font-inter text-[10px] text-gray-400 mt-1">Shree Ram Classes Patna • Estd. 2021</span>
              </div>
            </div>
          </div>

          {/* Right Column - Admission Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-150 relative">
              <h3 className="font-montserrat font-black text-lg text-primary mb-4">Book 3 Free Trial Classes</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">
                    Student Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter student full name"
                    className={`w-full px-4 py-2.5 rounded-xl border font-inter font-medium text-xs focus:outline-none focus:ring-2 transition-all ${
                      errors.name 
                        ? "border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:border-accent focus:ring-accent/20"
                    }`}
                  />
                  {errors.name && <span className="block text-red-500 text-[10px] mt-1 font-semibold">{errors.name}</span>}
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="phone" className="block font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                    className={`w-full px-4 py-2.5 rounded-xl border font-inter font-medium text-xs focus:outline-none focus:ring-2 transition-all ${
                      errors.phone 
                        ? "border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:border-accent focus:ring-accent/20"
                    }`}
                  />
                  {errors.phone && <span className="block text-red-500 text-[10px] mt-1 font-semibold">{errors.phone}</span>}
                </div>

                {/* Class Selection */}
                <div>
                  <label htmlFor="className" className="block font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">
                    Select Class
                  </label>
                  <select
                    id="className"
                    name="className"
                    value={formData.className}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 font-inter font-semibold text-xs focus:outline-none bg-white"
                  >
                    <option value="class11">11th Arts Foundation</option>
                    <option value="class12">12th Arts Board Special</option>
                    <option value="cuet">CUET Preparation (Integrated)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">
                    Message / Doubts (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Ask Alok Sir any questions..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 font-inter font-medium text-xs focus:outline-none transition-all"
                  />
                </div>

                {/* Submit & Contact CTAs Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 border-t border-gray-100">
                  {/* Helpline contacts directly under form */}
                  <div className="flex items-center space-x-2">
                    <a
                      href="tel:+917779977725"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/10 transition-all text-xs"
                      title="Call Helpline Now"
                    >
                      <Phone className="h-4 w-4 mr-1 text-primary" />
                      <span className="font-inter font-bold text-[10px]">Call Support</span>
                    </a>
                    <a
                      href="https://wa.me/917779977725?text=Hello%20Alok%20Sir%2C%20I%20am%20interested%20in%20joining%20Shree%20Ram%20Classes.%20Please%20provide%20admission%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/15 text-[#20ba5a] border border-[#25D366]/10 transition-all text-xs"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="h-4 w-4 mr-1 fill-none text-[#20ba5a]" />
                      <span className="font-inter font-bold text-[10px]">WhatsApp</span>
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-primary font-montserrat font-black text-xs shadow-md active:scale-98 transition-all disabled:opacity-50"
                  >
                    {isPending ? "Booking..." : "Book Demo Now"}
                    <Send className="h-3.5 w-3.5 ml-1.5" />
                  </button>
                </div>
              </form>

              {/* Status Overlay Modal */}
              {submitResult && (
                <div className="absolute inset-0 bg-white/95 rounded-2xl z-20 flex flex-col items-center justify-center p-6 text-center">
                  <div className={`p-3 rounded-full mb-4 ${submitResult.success ? "bg-emerald-50 text-emerald-600 border border-emerald-250" : "bg-red-50 text-red-600 border border-red-250"}`}>
                    {submitResult.success ? <CheckCircle2 className="h-10 w-10" /> : <Send className="h-10 w-10" />}
                  </div>
                  <h4 className="font-montserrat font-black text-xl text-primary mb-2">
                    {submitResult.success ? "Thank You!" : "Submission Failed"}
                  </h4>
                  <p className="font-inter font-semibold text-xs text-gray-500 leading-relaxed max-w-xs mb-6">
                    {submitResult.message}
                  </p>
                  <button
                    onClick={() => setSubmitResult(null)}
                    className="px-5 py-2 rounded-xl bg-primary text-white font-inter font-bold text-[10px] uppercase tracking-wider shadow-md hover:bg-primary-hover active:scale-95 transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
