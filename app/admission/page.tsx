"use client";

// Context: One step at a time code architecture updates
import AdmissionHero from "@/components/admission/AdmissionHero";
import AdmissionForm from "@/components/admission/AdmissionForm";

export default function AdmissionPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fb]">
      {/* Hero Banner Component */}
      <AdmissionHero />
      
      {/* Student Form Section Block */}
      <AdmissionForm />
    </main>
  );
}