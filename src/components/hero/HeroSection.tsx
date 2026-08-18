// "use client";

// import React, { useState, useEffect } from "react";
// import { ArrowRight } from "lucide-react";
// import { HOSPITAL_INFO } from "@/data/hospitalData";

// interface HeroSlide {
//   video: string;
//   line1: string;
//   line2: string;
// }

// export default function HeroSection() {
//   const slides: HeroSlide[] = [
//     {
//       video: "/5991800-uhd_3840_2160_25fps.mp4",
//       line1: "Relieve Pain, Restore Mobility",
//       line2: "Body Balance",
//     },
//     {
//       video: "/6023232-uhd_3840_2160_25fps.mp4",
//       line1: "Advanced Stroke & Paralysis Care",
//       line2: "Motor Independence",
//     },
//     {
//       video: "/6023241-uhd_3840_2160_25fps.mp4",
//       line1: "Post-Knee & Joint Replacement",
//       line2: "Mobility Restoration",
//     },
//     {
//       video: "/6326960-hd_2048_1054_25fps.mp4",
//       line1: "Sports Injury & Spine Decompression",
//       line2: "Active Movement",
//     },
//   ];

//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   // Auto-switch video background and headline text every 5 seconds with 1s smooth crossfade
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   // Hide browser scrollbar when in Hero section (at top of page), show when scrolled down
//   useEffect(() => {
//     const handleScroll = () => {
//       const heroHeight = window.innerHeight * 0.75;
//       if (window.scrollY < heroHeight) {
//         document.documentElement.classList.add("hide-scrollbar");
//         document.body.classList.add("hide-scrollbar");
//       } else {
//         document.documentElement.classList.remove("hide-scrollbar");
//         document.body.classList.remove("hide-scrollbar");
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       document.documentElement.classList.remove("hide-scrollbar");
//       document.body.classList.remove("hide-scrollbar");
//     };
//   }, []);

//   return (
//     <section id="home" className="p-[4px] bg-[#FAFAFE] w-full h-screen max-h-screen">
//       <div className="relative w-full h-full bg-[#FAFAFE] flex flex-col justify-between overflow-hidden pt-20 pb-3 text-white rounded-lg">
        
//         {/* Background Video Carousel with Smooth 1s Opacity Dissolve */}
//         <div className="absolute inset-0 z-0 bg-[#FAFAFE]">
//           {slides.map((slide, idx) => (
//             <video
//               key={slide.video}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out pointer-events-none ${
//                 currentSlideIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
//               }`}
//             >
//               <source src={slide.video} type="video/mp4" />
//             </video>
//           ))}
//         </div>

//         {/* Main Hero Left Content */}
//         <div className="max-w-7xl mx-auto px-2 relative z-20 w-full flex-1 flex flex-col justify-start pt-14 lg:pt-16">
//           <div className="max-w-2xl relative min-h-[180px]">
//             {slides.map((slide, idx) => (
//               <div
//                 key={idx}
//                 className={`transition-all duration-1000 ease-in-out ${
//                   currentSlideIndex === idx
//                     ? "opacity-100 translate-y-0 relative z-20"
//                     : "opacity-0 -translate-y-2 absolute inset-0 z-0 pointer-events-none"
//                 }`}
//               >
//                 {/* 2-Line Main Headline */}
//                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.5] text-white">
//                   {slide.line1} <br />
//                   <span className="font-serif italic font-normal text-white block mt-4 sm:mt-5">
//                     {slide.line2}
//                   </span>
//                 </h1>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Overlaid Area */}
//         <div className="relative z-20 max-w-7xl mx-auto px-2 w-full shrink-0 pb-2">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            
//             {/* 1. Left: Action Buttons */}
//             <div className="lg:col-span-4 flex flex-wrap items-center gap-3">
//               {/* Primary White Pill Button with Sage Green Accent */}
//               <a
//                 href="#contact"
//                 className="inline-flex items-center space-x-3 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-bold text-xs border border-white transition-all group shadow-sm"
//               >
//                 <span>Book Appointment</span>
//                 <div className="w-5 h-5 rounded-full bg-[#A8D0A6] group-hover:bg-[#96C494] flex items-center justify-center">
//                   <ArrowRight className="w-3 h-3 text-slate-900" />
//                 </div>
//               </a>

//               {/* Secondary Dark Outline Pill Button */}
//               <a
//                 href="#departments"
//                 className="inline-flex items-center space-x-3 px-5 py-2.5 bg-slate-950/40 hover:bg-slate-950/70 text-white rounded-full font-bold text-xs border border-white/30 transition-all group"
//               >
//                 <span>Our Services</span>
//                 <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center">
//                   <ArrowRight className="w-3 h-3 text-white" />
//                 </div>
//               </a>
//             </div>

//             {/* 2. Center: Targeted Care Paragraph Text */}
//             <div className="lg:col-span-4">
//               <p className="text-slate-100 text-[11px] sm:text-xs font-normal leading-relaxed">
//                 Targeted care focused on relieving pain, improving movement, and restoring everyday comfort through guided, personalized hands-on treatment by <strong className="text-white font-semibold">{HOSPITAL_INFO.chiefDoctor} ({HOSPITAL_INFO.doctorQualification})</strong>.
//               </p>
//             </div>

//             {/* 3. Right: Stacked Text Features */}
//             <div className="lg:col-span-4 flex flex-wrap items-center justify-start lg:justify-end gap-6 text-xs font-semibold">
//               {/* First Item */}
//               <div className="flex items-center space-x-3">
//                 <div className="w-0.5 h-8 bg-[#A8D0A6] shrink-0" />
//                 <div className="leading-tight text-white">
//                   <div className="font-normal text-slate-200">Personalized</div>
//                   <div className="font-bold">Physiotherapy Treatments</div>
//                 </div>
//               </div>

//               {/* Second Item */}
//               <div className="flex items-center space-x-3">
//                 <div className="w-0.5 h-8 bg-[#A8D0A6] shrink-0" />
//                 <div className="leading-tight text-white">
//                   <div className="font-normal text-slate-200">Trusted and Trained</div>
//                   <div className="font-bold">Physiotherapy Experts</div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Activity,
  PhoneCall,
  Sparkles,
  Award,
  CheckCircle2,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const treatments = [
    {
      title: "Spine & Disc Decompression",
      tag: "Non-Surgical",
      desc: "Targeted spinal traction for herniated, bulging, and slipped discs.",
      stat: "98% Pain Relief",
    },
    {
      title: "Robotic & Electrotherapy Modalities",
      tag: "FDA Approved",
      desc: "Advanced TENS, IFT, & Deep Tissue Stimulation for acute pain.",
      stat: "Fast Recovery",
    },
    {
      title: "Paralysis & NMES Neuro Rehab",
      tag: "Specialized",
      desc: "Targeted nerve-muscle stimulation for stroke & facial palsy.",
      stat: "Guided Care",
    },
  ];

  return (
    <section id="home" className="relative w-full min-h-screen bg-slate-50 text-slate-900 pt-28 pb-16 overflow-hidden flex items-center border-b border-slate-200/80">
      
      {/* Light Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-teal-100/60 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-100/60 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main 12-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (7 Cols): Main Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Pill - Live Status */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              <span>Senior Specialist Doctor Available Today</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900">
              Precision Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-sky-600">
                For Natural Motion
              </span> <br />
              <span className="font-serif italic font-normal text-slate-600 text-3xl sm:text-5xl lg:text-6xl">
                Without Surgery.
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {HOSPITAL_INFO?.name || "Our Clinic"} integrates advanced electrotherapy, non-surgical spine decompression, and manual mobilization to eliminate root pain and rebuild strength.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="group px-7 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-teal-600/20 transition-all flex items-center space-x-2"
              >
                <span>Book Appointment Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
              href={`tel:${HOSPITAL_INFO?.primaryPhone || "+919876543210"}`}
                className="px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm tracking-wide border border-slate-200/90 shadow-sm transition-all flex items-center space-x-2"
              >
                <PhoneCall className="w-4 h-4 text-teal-600" />
                <span>Call Specialist</span>
              </a>
            </div>

            {/* Interactive Treatment Selector Box */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Specialized Care Protocols</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {treatments.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                      activeTab === idx
                        ? "bg-white border-teal-600 shadow-md ring-1 ring-teal-600/20"
                        : "bg-slate-100/80 border-slate-200/60 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {t.tag}
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold">{t.stat}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 mt-2 line-clamp-1">{t.title}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 Cols): Asymmetrical Visual Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white bg-slate-100 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                  alt="Doctor performing physio therapy"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Soft Light Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Badge on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-md flex items-center space-x-2">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span>Certified Spine Clinic</span>
                  </div>
                </div>

                {/* Floating Bottom Card on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-700 flex items-center space-x-1">
                      <Activity className="w-3.5 h-3.5" />
                      <span>{treatments[activeTab].title}</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Targeted Relief</span>
                  </div>
                  <p className="text-xs text-slate-600 font-normal leading-snug">
                    {treatments[activeTab].desc}
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge (Top Right Offset) */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xl flex items-center space-x-3.5">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 border border-teal-100">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-slate-900 leading-none">10+ Years</p>
                  <p className="text-[11px] text-slate-500 pt-0.5 font-medium">Clinical Excellence</p>
                </div>
              </div>

              {/* Floating Review Badge (Bottom Left Offset) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white border border-slate-200/90 p-3.5 rounded-2xl shadow-xl flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <span className="inline-block w-7 h-7 rounded-full bg-teal-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">P1</span>
                  <span className="inline-block w-7 h-7 rounded-full bg-sky-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">P2</span>
                  <span className="inline-block w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">P3</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">8,500+ Patients</p>
                  <p className="text-[10px] text-teal-600 font-bold">★ 4.9 Rating (500+ Reviews)</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-700 font-semibold">Non-Surgical Disc Protocol</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-700 font-semibold">FDA-Approved Modalities</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-700 font-semibold">1-on-1 Specialist Care</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-700 font-semibold">Personalized Rehab Roadmap</span>
          </div>
        </div>

      </div>
    </section>
  );
}