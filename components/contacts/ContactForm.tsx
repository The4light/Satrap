"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Enquiry payload sent:", formState);
    
    setIsSubmitting(false);
    setFormState({ name: "", email: "", phone: "", message: "" });
    alert("Enquiry submitted successfully!");
  };

  return (
    <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-xs shadow-xs">
      <h3 className="font-serif text-xl font-bold text-[#131b2e] mb-6">
        Send an Online Enquiry
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-sans">
              Your Name
            </label>
            <input 
              type="text" 
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full bg-[#f7f9fb] border border-slate-200 px-4 py-3 text-xs rounded-xs focus:outline-hidden focus:border-[#006398] focus:bg-white transition-all text-slate-800"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-sans">
              Phone Number
            </label>
            <input 
              type="tel" 
              required
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              className="w-full bg-[#f7f9fb] border border-slate-200 px-4 py-3 text-xs rounded-xs focus:outline-hidden focus:border-[#006398] focus:bg-white transition-all text-slate-800"
              placeholder="+234..."
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-sans">
            Email Address
          </label>
          <input 
            type="email" 
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full bg-[#f7f9fb] border border-slate-200 px-4 py-3 text-xs rounded-xs focus:outline-hidden focus:border-[#006398] focus:bg-white transition-all text-slate-800"
            placeholder="johndoe@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-sans">
            Message / Enquiry Details
          </label>
          <textarea 
            rows={5}
            required
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full bg-[#f7f9fb] border border-slate-200 p-4 text-xs rounded-xs focus:outline-hidden focus:border-[#006398] focus:bg-white transition-all text-slate-800 resize-none leading-relaxed"
            placeholder="How can our administrative desk assist you?"
          />
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#131b2e] hover:bg-[#006398] disabled:bg-slate-400 text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors duration-300 shadow-xs cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}