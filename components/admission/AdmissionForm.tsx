"use client";

import React, { useState } from "react";

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate 2-second processing micro-interaction from original template
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      alert(
        "Thank you! Your admission application has been successfully submitted. Our team will contact you within 3-5 business days."
      );
    }, 2000);
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-[#f2f4f6]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="p-6 md:p-12">
            {/* Form Header Title Banner */}
            <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
              <img 
                alt="Satrop Schools Logo" 
                className="w-full h-full object-contain" 
                src="/satrap-logo.png" 
              />
            </div>   
           <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#131b2e]">
                  Student Application Form
                </h2>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">
                  Academic Session 2024/2025
                </p>
              </div>
            </div>

            {/* Main Interactive Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Section 1: Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#131b2e] flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-[#006398] inline-block rounded-sm"></span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">First Name</label>
                    <input required className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all text-sm" placeholder="e.g. Julian" type="text" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Last Name</label>
                    <input required className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all text-sm" placeholder="e.g. Ashford" type="text" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Date of Birth</label>
                    <input required className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all text-sm" type="date" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Gender</label>
                    <select required className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all text-sm">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Academic Intent */}
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#131b2e] flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-[#006398] inline-block rounded-sm"></span>
                  Academic Intent
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Grade Applying For</label>
                    <select required className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all text-sm">
                      <option value="grade9">Grade 9</option>
                      <option value="grade10">Grade 10</option>
                      <option value="grade11">Grade 11</option>
                      <option value="grade12">Grade 12 (Senior)</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Previous School Name</label>
                    <input required className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all text-sm" placeholder="Institution Name" type="text" />
                  </div>
                </div>
              </div>

              {/* Section 3: Guardian Contact */}
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#131b2e] flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-[#006398] inline-block rounded-sm"></span>
                  Guardian Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Guardian Email</label>
                    <input required className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all text-sm" placeholder="email@example.com" type="email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Phone Number</label>
                    <input required className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all text-sm" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                  <div className="md:col-span-2 flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Home Address</label>
                    <textarea required className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all text-sm resize-none" placeholder="Full street address, city, state" rows={3} />
                  </div>
                </div>
              </div>

              {/* Submit Button Block */}
              <div className="pt-8 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-[0.99] flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-[#dc2626] hover:bg-[#b91c1c]"
                  } disabled:opacity-80 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : isSubmitted ? (
                    <>Application Sent ✓</>
                  ) : (
                    <>
                      Submit Application
                      <span className="text-sm">➔</span>
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 mt-4 italic">
                  By submitting, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>

            </form>
          </div>
        </div>

        {/* Dynamic Help Informational Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#cce5ff]/40 rounded-full border border-[#93ccff]/30">
            <span className="text-[#004b73] text-sm">ℹ</span>
            <p className="text-sm text-[#00476e]">
              Need help with the application?{" "}
              <a className="font-bold underline tracking-wide" href="#">
                Contact our Admissions Office
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}