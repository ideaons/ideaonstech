"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface FormData {
  fullName: string;
  designation: string;
  institutionName: string;
  studentStrength: string;
  location: string;
  email: string;
  mobile: string;
  requirements: string;
}

const INITIAL_FORM: FormData = {
  fullName: "",
  designation: "",
  institutionName: "",
  studentStrength: "",
  location: "",
  email: "",
  mobile: "",
  requirements: "",
};

const CONTACT_INFO = [
  { icon: "📞", label: "Sales", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "💬", label: "Parent Desk", value: "+91 98765 43211", href: "tel:+919876543211" },
  { icon: "✉️", label: "Enquiry", value: "education@ideoans.com", href: "mailto:education@ideoans.com" },
];

function FormField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  isTextarea = false,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder: string;
  required?: boolean;
  isTextarea?: boolean;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);

  const sharedStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: `1px solid ${error ? "rgba(239,68,68,0.5)" : focused ? "rgba(139,92,246,0.4)" : "rgba(255,255,255,0.08)"}`,
    background: focused ? "rgba(139,92,246,0.04)" : "rgba(255,255,255,0.02)",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 400,
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
    boxShadow: focused ? "0 0 20px rgba(139,92,246,0.08)" : "none",
    resize: "none" as const,
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{
        display: "block",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: error ? "rgba(239,68,68,0.7)" : focused ? "rgba(139,92,246,0.8)" : "rgba(255,255,255,0.3)",
        marginBottom: 8,
        transition: "color 0.3s ease",
      }}>
        {label} {required && <span style={{ color: "rgba(139,92,246,0.6)" }}>*</span>}
      </label>
      {isTextarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          rows={3}
          style={sharedStyle}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          style={sharedStyle}
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 11, color: "rgba(239,68,68,0.7)", marginTop: 4, fontWeight: 500 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function EducationDemoForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.institutionName.trim()) newErrors.institutionName = "Institution name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[+]?[\d\s-]{8,15}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API call
    console.log("[IDEOANS Education Demo Request]", form);
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="demo"
      ref={ref}
      style={{
        background: "var(--bg-base)",
        padding: "var(--section-padding-y) var(--section-padding-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        height: 800,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 60%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <motion.p
            className="text-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--violet)", marginBottom: 16 }}
          >
            Talk To Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "#FFFFFF",
              marginBottom: 16,
            }}
          >
            Book Your{" "}
            <span className="gradient-violet">Personalized Demo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              maxWidth: 500,
              margin: "0 auto",
              fontSize: "clamp(14px, 1.1vw, 16px)",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.6,
            }}
          >
            30-minute walkthrough, tailored to your institution. See your school’s data in the dashboard, test the parent app, and ask anything. No sales pitch — just a live product demo.
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderRadius: 28,
            border: "1px solid rgba(139,92,246,0.15)",
            background: "rgba(10,10,12,0.8)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            padding: "clamp(28px, 4vw, 48px)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 40px rgba(139,92,246,0.05)",
          }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: "center", padding: "60px 20px" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(0,229,255,0.15))",
                    border: "2px solid rgba(139,92,246,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: "0 0 40px rgba(139,92,246,0.3)",
                  }}
                >
                  <motion.svg
                    width="32" height="32" viewBox="0 0 32 32" fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.path
                      d="M8 16L14 22L24 10"
                      stroke="#8B5CF6"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    />
                  </motion.svg>
                </motion.div>
                <h3 style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: 12,
                }}>
                  Demo Request Received!
                </h3>
                <p style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.6,
                  maxWidth: 400,
                  margin: "0 auto",
                }}>
                   Our education solutions team will reach out within 24 hours. You’ll get a 30-minute live demo customized for your institution type, student strength, and specific pain points.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}
                  style={{
                    marginTop: 28,
                    padding: "10px 24px",
                    borderRadius: 100,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "transparent",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 13,
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                  }}
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              /* Form */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                  gap: "0 24px",
                }}>
                  <FormField label="Full Name" value={form.fullName} onChange={(v) => updateField("fullName", v)} placeholder="John Doe" required error={errors.fullName} />
                  <FormField label="Designation" value={form.designation} onChange={(v) => updateField("designation", v)} placeholder="Principal / Director / Owner" />
                  <FormField label="Institution Name" value={form.institutionName} onChange={(v) => updateField("institutionName", v)} placeholder="ABC International School" required error={errors.institutionName} />
                  <FormField label="Student Strength" value={form.studentStrength} onChange={(v) => updateField("studentStrength", v)} placeholder="e.g. 500-1000" />
                  <FormField label="Location" value={form.location} onChange={(v) => updateField("location", v)} placeholder="City, State" />
                  <FormField label="Email Address" value={form.email} onChange={(v) => updateField("email", v)} type="email" placeholder="you@school.com" required error={errors.email} />
                  <FormField label="Mobile Number" value={form.mobile} onChange={(v) => updateField("mobile", v)} type="tel" placeholder="+91 98765 43210" required error={errors.mobile} />
                </div>
                <FormField label="Requirements" value={form.requirements} onChange={(v) => updateField("requirements", v)} placeholder="Tell us about your school, current challenges, and what you're looking for..." isTextarea />

                {/* Submit Button */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    onMouseEnter={() => setButtonHovered(true)}
                    onMouseLeave={() => setButtonHovered(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "16px 44px",
                      borderRadius: 100,
                      background: submitting
                        ? "rgba(139,92,246,0.3)"
                        : "linear-gradient(135deg, #8B5CF6, #6D28D9)",
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      border: "1px solid rgba(139,92,246,0.5)",
                      transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                      transform: buttonHovered && !submitting ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
                      boxShadow: buttonHovered && !submitting
                        ? "0 16px 50px rgba(139,92,246,0.4), 0 4px 16px rgba(0,0,0,0.3)"
                        : "0 4px 20px rgba(139,92,246,0.2)",
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          style={{
                            width: 18,
                            height: 18,
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTopColor: "#FFFFFF",
                            borderRadius: "50%",
                          }}
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book A Demo
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 4vw, 48px)",
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          {CONTACT_INFO.map((c) => (
            <a
              key={c.label}
              href={c.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                fontWeight: 500,
                transition: "color 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              <span style={{ fontSize: 16 }}>{c.icon}</span>
              <span>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", display: "block", marginBottom: 2 }}>
                  {c.label}
                </span>
                {c.value}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
