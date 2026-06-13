"use client";

import { useState, useTransition } from "react";
import { submitLead, LeadInput } from "../app/actions";
import { MapPin, Phone, Clock, Send, CheckCircle2, Download, MessageSquare } from "lucide-react";

export default function Contact() {
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
      tempErrors.phone = "Enter a valid 10-digit Indian phone number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const result = await submitLead(formData);
      if (result.success) {
        setSubmitResult({ success: true, message: result.message || "Demo class booked successfully!" });
        setFormData({ name: "", phone: "", className: "class12", message: "" });
      } else {
        setSubmitResult({ success: false, message: result.error || "Submission failed" });
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0B3C5D] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-inter font-bold text-xs text-accent uppercase tracking-widest block mb-3">
            Get In Touch
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white mb-4 leading-tight">
            Start Your Journey with Alok Sir
          </h2>
          <p className="font-inter font-medium text-base text-gray-200 leading-relaxed">
            Fill out the form below to book your 3 Free Demo Classes or download syllabus notes. Our team will call you back within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Contact info & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <h3 className="font-montserrat font-black text-xl text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-accent flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-gray-200">Our Centre Location</h4>
                    <p className="font-inter text-sm text-gray-300 leading-relaxed mt-1">
                      3rd Floor, Bhukkad Restaurant Building, Near Mahendru Post Office, Ashok Rajpath, Mahendru, Patna, Bihar 800006
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-accent flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-gray-200">Phone &amp; Admissions</h4>
                    <p className="font-inter text-sm text-gray-300 mt-1">
                      <a href="tel:+917779977725" className="hover:text-accent transition-colors">+91 77799 77725</a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-accent flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-gray-200">Office Working Hours</h4>
                    <p className="font-inter text-sm text-gray-300 mt-1">
                      Monday - Saturday: 08:00 AM - 08:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Styled Google Maps iframe placeholder */}
            <div className="w-full h-[220px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg relative bg-white/5">
              <iframe
                title="Shree Ram Classes Mahendru Patna Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.52504825902!2d85.1765103!3d25.620215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM3JzEyLjgiTiA4NcKwMTAnMzUuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.1) opacity(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-gray-800 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 relative">
              <h3 className="font-montserrat font-black text-xl text-primary mb-6">Book 3 Free Demo Classes</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-inter font-bold text-xs text-gray-500 uppercase tracking-widest mb-2">
                    Student Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter student full name"
                    className={`w-full px-4 py-3 rounded-xl border font-inter font-medium text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name 
                        ? "border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:border-accent focus:ring-accent/20"
                    }`}
                  />
                  {errors.name && <span className="block text-red-500 text-xs mt-1.5 font-semibold">{errors.name}</span>}
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="phone" className="block font-inter font-bold text-xs text-gray-500 uppercase tracking-widest mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                    className={`w-full px-4 py-3 rounded-xl border font-inter font-medium text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.phone 
                        ? "border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:border-accent focus:ring-accent/20"
                    }`}
                  />
                  {errors.phone && <span className="block text-red-500 text-xs mt-1.5 font-semibold">{errors.phone}</span>}
                </div>

                {/* Class */}
                <div>
                  <label htmlFor="className" className="block font-inter font-bold text-xs text-gray-500 uppercase tracking-widest mb-2">
                    Select Class
                  </label>
                  <select
                    id="className"
                    name="className"
                    value={formData.className}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 font-inter font-semibold text-sm focus:outline-none"
                  >
                    <option value="class11">Class 11 Arts</option>
                    <option value="class12">Class 12 Arts (Bihar Board / CBSE)</option>
                    <option value="government_exam">Future Government Exam Foundation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-inter font-bold text-xs text-gray-500 uppercase tracking-widest mb-2">
                    Message / Doubts (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Enter any specific questions or messages..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 font-inter font-medium text-sm focus:outline-none transition-all"
                  />
                </div>

                {/* Submit Panel */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3.5 py-2 rounded-lg border border-emerald-100 text-xs font-inter font-bold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>3 Free Trial Classes Enabled</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-primary font-montserrat font-black text-sm shadow-md hover:shadow-lg active:scale-98 transition-all disabled:opacity-50"
                  >
                    {isPending ? "Submitting..." : "Book Demo Now"}
                    <Send className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </form>

              {/* Status Overlay Modal */}
              {submitResult && (
                <div className="absolute inset-0 bg-white/95 rounded-3xl z-20 flex flex-col items-center justify-center p-8 text-center">
                  <div className={`p-4 rounded-full mb-5 ${submitResult.success ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-red-50 text-red-600 border border-red-200"}`}>
                    {submitResult.success ? <CheckCircle2 className="h-12 w-12" /> : <Send className="h-12 w-12" />}
                  </div>
                  <h4 className="font-montserrat font-black text-2xl text-primary mb-3">
                    {submitResult.success ? "Thank You!" : "Submission Failed"}
                  </h4>
                  <p className="font-inter font-medium text-sm text-gray-500 leading-relaxed max-w-sm mb-8">
                    {submitResult.message}
                  </p>
                  <button
                    onClick={() => setSubmitResult(null)}
                    className="px-6 py-2.5 rounded-xl bg-primary text-white font-inter font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary-hover active:scale-95 transition-all"
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
