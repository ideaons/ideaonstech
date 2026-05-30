"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, CheckCircle2, MessageCircle, Mail, Phone, Calendar, Clock, MapPin } from "lucide-react";
import TiltCard from "./TiltCard";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Interactive calendar scheduler state
  const [selectedDate, setSelectedDate] = useState("Mon, May 25");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orgType: "school",
    message: ""
  });

  const dates = ["Mon, May 25", "Tue, May 26", "Wed, May 27", "Thu, May 28"];
  const times = ["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"];

  const [errorMsg, setErrorMsg] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormSubmitted(true);
      } else {
        setErrorMsg(data.error || "An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Failed to connect to the server. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleBookingSubmit = () => {
    setBookingConfirmed(true);
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
      )
    },
    {
      label: "Instagram",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      label: "Twitter",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden border-b border-violet-100/30">
      
      {/* Background radial lighting */}
      <div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-x-1/2" 
        style={{ background: "radial-gradient(circle, rgba(74,124,89,0.2), transparent 70%)" }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" 
        style={{ background: "radial-gradient(circle, rgba(200,213,192,0.35), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* BIG APPLE-STYLE CTA BANNER */}
        <div className="relative rounded-[40px] bg-gradient-to-r from-brand-green-dark to-brand-green p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl mb-24">
          {/* Internal gradient structures */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div 
            className="absolute -top-12 -right-12 w-[300px] h-[300px] rounded-full pointer-events-none opacity-20" 
            style={{ background: "radial-gradient(circle, var(--green-light), transparent 70%)" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] font-black text-brand-green-light tracking-widest uppercase block">
              ✦ Launch Your Transformation
            </span>
            <h2 className="font-jakarta text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Ready to Transform Your Business Digitally?
            </h2>
            <p className="text-sm sm:text-base text-slate-100 font-light leading-relaxed max-w-xl mx-auto">
              Join 500+ businesses growing and automating their operations with IDEOANS PRIVATE LIMITED.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold text-dark-charcoal bg-white hover:bg-bg-warm rounded-full shadow transition-all active:scale-[0.98]"
              >
                Get Free Quote
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold text-white border border-white/20 hover:border-white/50 hover:bg-white/5 rounded-full transition-all active:scale-[0.98]"
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>

        {/* SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Premium Contact Form */}
          <div className="lg:col-span-6 w-full pointer-events-auto">
            <TiltCard className="p-8 md:p-10 bg-white/65 backdrop-blur-xl border-violet-100/40 shadow-xl relative">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Rahul Sharma"
                          className="w-full px-4 py-3 text-xs text-dark-charcoal bg-white border border-slate-200/80 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 transition-all shadow-inner"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Work Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@school.com"
                          className="w-full px-4 py-3 text-xs text-dark-charcoal bg-white border border-slate-200/80 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 99999 99999"
                          className="w-full px-4 py-3 text-xs text-dark-charcoal bg-white border border-slate-200/80 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 transition-all shadow-inner"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Business Type</label>
                        <select
                          value={formData.orgType}
                          onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                          className="w-full px-4 py-3 text-xs text-dark-charcoal bg-white border border-slate-200/80 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 transition-all shadow-inner cursor-pointer"
                        >
                          <option value="school">School / College</option>
                          <option value="fitness">Gym / Fitness Platform</option>
                          <option value="restaurant">Restaurant / Bistro</option>
                          <option value="startup">Tech Startup / Agency</option>
                          <option value="retail">Retail / Small Business</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Your Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the digital portal, automated systems, or marketing scaling you are looking to build."
                        className="w-full px-4 py-3 text-xs text-dark-charcoal bg-white border border-slate-200/80 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 transition-all shadow-inner resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                          padding: "10px 14px",
                          borderRadius: 12,
                          background: "rgba(239, 68, 68, 0.08)",
                          border: "1px solid rgba(239, 68, 68, 0.2)",
                          fontSize: 12,
                          color: "#ef4444"
                        }}
                      >
                        {errorMsg}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold text-white bg-gradient-to-r from-brand-green to-brand-green-dark hover:opacity-95 rounded-xl shadow-lg hover:shadow-brand-green/15 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? "Sending Request..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-brand-green" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-jakarta text-xl font-extrabold text-dark-charcoal tracking-tight">Message Received</h3>
                      <p className="text-xs text-muted-gray max-w-sm mx-auto font-light leading-relaxed">
                        Thank you, {formData.name}. Our technical consultant has received your request. We will reach out to you within 3 business hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-[10px] font-black text-brand-green hover:text-brand-green-dark transition-colors uppercase tracking-widest cursor-pointer"
                    >
                      Send another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action buttons below form */}
              <div className="mt-8 pt-6 border-t border-black/5 grid grid-cols-3 gap-3">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 bg-brand-green/5 border border-brand-green/10 hover:bg-brand-green/10 rounded-xl transition-all text-center group"
                >
                  <MessageCircle className="w-5 h-5 text-brand-green group-hover:scale-105 transition-transform" />
                  <span className="text-[9px] font-black text-dark-charcoal uppercase tracking-widest mt-1.5">WhatsApp</span>
                </a>
                <a
                  href="mailto:growth@ideoans.com"
                  className="flex flex-col items-center justify-center p-3 bg-brand-green-light/10 border border-brand-green-light/20 hover:bg-brand-green-light/20 rounded-xl transition-all text-center group"
                >
                  <Mail className="w-5 h-5 text-brand-green-dark group-hover:scale-105 transition-transform" />
                  <span className="text-[9px] font-black text-dark-charcoal uppercase tracking-widest mt-1.5">Email</span>
                </a>
                <a
                  href="tel:+919999999999"
                  className="flex flex-col items-center justify-center p-3 bg-dark-charcoal/5 border border-dark-charcoal/10 hover:bg-dark-charcoal/10 rounded-xl transition-all text-center group"
                >
                  <Phone className="w-5 h-5 text-dark-charcoal group-hover:scale-105 transition-transform" />
                  <span className="text-[9px] font-black text-dark-charcoal uppercase tracking-widest mt-1.5">Call Us</span>
                </a>
              </div>

            </TiltCard>
          </div>

          {/* RIGHT: Contact Info & Time Picker Mockup */}
          <div className="lg:col-span-6 space-y-8 w-full text-left">
            
            {/* Address & hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white/65 backdrop-blur-xl p-6 rounded-3xl border border-violet-100/40 flex items-start gap-4 shadow-sm">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-jakarta text-sm font-bold text-dark-charcoal leading-none">Headquarters</h4>
                  <p className="text-xs text-muted-gray font-light leading-relaxed">
                    IDEOANS PRIVATE LIMITED<br />
                    Tech Infrastructure Hub, New Delhi, India
                  </p>
                </div>
              </div>

              <div className="bg-white/65 backdrop-blur-xl p-6 rounded-3xl border border-violet-100/40 flex items-start gap-4 shadow-sm">
                <Clock className="w-5 h-5 text-brand-green-dark shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-jakarta text-sm font-bold text-dark-charcoal leading-none">Working Hours</h4>
                  <p className="text-xs text-muted-gray font-light leading-relaxed">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Support: 24/7 Coverage
                  </p>
                </div>
              </div>

            </div>

            {/* INTERACTIVE TIME PICKER MOCKUP */}
            <div className="pointer-events-auto">
              <TiltCard className="p-8 bg-white/65 backdrop-blur-xl border-violet-100/40 shadow-xl relative">
                
                <AnimatePresence mode="wait">
                  {!bookingConfirmed ? (
                    <motion.div
                      key="scheduler"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-black text-brand-green uppercase tracking-widest block">
                          ✦ Instant Calendar Planner
                        </span>
                        <h3 className="font-jakarta text-lg font-bold text-dark-charcoal tracking-tight leading-none">
                          Book a Free 30-min Call
                        </h3>
                        <p className="text-xs text-muted-gray font-light leading-relaxed">
                          Claim your complimentary structural audit with our scaling consultant.
                        </p>
                      </div>

                      {/* Date Selector Row */}
                      <div className="space-y-2">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Date</span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {dates.map((date) => (
                            <button
                              key={date}
                              type="button"
                              onClick={() => setSelectedDate(date)}
                              className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all border cursor-pointer ${
                                selectedDate === date
                                  ? "bg-brand-green text-white border-transparent shadow-sm"
                                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              {date}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Selector Row */}
                      <div className="space-y-2">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Time</span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {times.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all border cursor-pointer ${
                                selectedTime === time
                                  ? "bg-brand-green-dark text-white border-transparent shadow-sm"
                                  : "bg-white border-slate-200 text-slate-650 hover:bg-slate-50"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <button
                        type="button"
                        onClick={handleBookingSubmit}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold text-white bg-dark-charcoal hover:bg-brand-green rounded-xl shadow transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        Lock in Video Audit Slot
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="booking-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 space-y-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6 text-brand-green" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-jakarta text-base font-extrabold text-dark-charcoal tracking-tight">Audit Slot Reserved</h4>
                        <p className="text-xs text-slate-500 max-w-xs mx-auto font-light leading-relaxed">
                          Your strategy audit is locked in for <strong className="text-dark-charcoal">{selectedDate}</strong> at <strong className="text-dark-charcoal">{selectedTime}</strong>. A calendar invite with a Video Meet link has been dispatched to your email.
                        </p>
                      </div>
                      <button
                        onClick={() => setBookingConfirmed(false)}
                        className="text-[10px] font-black text-brand-green hover:text-dark-charcoal transition-colors uppercase tracking-widest cursor-pointer"
                      >
                        Reschedule Slot
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </TiltCard>
            </div>

            {/* Social media handles */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Connect with Us:</span>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-brand-green hover:border-brand-green/20 transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label={social.label}
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
