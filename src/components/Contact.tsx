"use client";

import { useState, useTransition } from "react";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { LeadInput, submitLeadToWeb3Forms } from "@/lib/web3forms";

interface ContactProps {
  web3FormsAccessKey: string;
}

export default function Contact({ web3FormsAccessKey }: ContactProps) {
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
    <section className="py-10 bg-[#0B3C5D] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Contact info & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-md h-full flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-montserrat font-black text-lg text-white mb-4">Contact Details</h3>
                <div className="space-y-4">
                  
                  {/* Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 text-accent flex-shrink-0">
                      <MapPin className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xs text-gray-200">Our Centre</h4>
                      <p className="font-inter text-xs text-gray-300 leading-relaxed mt-0.5">
                        3rd Floor, Bhukkad Restaurant Building, Near Mahendru Post Office, Ashok Rajpath, Mahendru, Patna - 800006
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 text-accent flex-shrink-0">
                      <Phone className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xs text-gray-200">Phone Support</h4>
                      <p className="font-inter text-xs text-gray-300 mt-0.5">
                        <a href="tel:+917779977725" className="hover:text-accent transition-colors">+91 77799 77725</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3.5">
                    <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 text-accent flex-shrink-0">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xs text-gray-200">Email Address</h4>
                      <p className="font-inter text-xs text-gray-300 mt-0.5">
                        <a href="mailto:shreeramclassespatna@gmail.com" className="hover:text-accent transition-colors">shreeramclassespatna@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3.5">
                    <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 text-accent flex-shrink-0">
                      <Clock className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xs text-gray-200">Working Hours</h4>
                      <p className="font-inter text-xs text-gray-300 mt-0.5">
                        Monday - Saturday: 08:00 AM - 08:00 PM
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Google Maps iframe */}
              <div className="w-full h-[180px] rounded-xl overflow-hidden border border-white/15 relative bg-white/5">
                <iframe
                  title="Shree Ram Classes Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.52504825902!2d85.1765103!3d25.620215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM3JzEyLjgiTiA4NcKwMTAnMzUuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "contrast(1.05) opacity(0.85)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-150 relative">
              <h3 className="font-montserrat font-black text-lg text-primary mb-4">Send Us a Message</h3>
              
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

                {/* Class */}
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
                    rows={3}
                    placeholder="Ask Alok Sir any questions..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 font-inter font-medium text-xs focus:outline-none transition-all"
                  />
                </div>

                {/* Submit & Contact CTAs Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://wa.me/917779977725?text=Hello%20Alok%20Sir%2C%20I%20am%20interested%2520in%2520joining%2520Shree%2520Ram%2520Classes.%252520Please%25252520provide%2525252520admission%2525252520details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-xl bg-[#25D366]/15 text-[#20ba5a] border border-[#25D366]/10 hover:bg-[#25D366]/20 transition-all text-xs font-inter font-bold"
                    >
                      <MessageSquare className="h-4 w-4 mr-1 text-[#20ba5a]" />
                      WhatsApp Inquiry
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-primary font-montserrat font-black text-xs shadow-md active:scale-98 transition-all disabled:opacity-50"
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
