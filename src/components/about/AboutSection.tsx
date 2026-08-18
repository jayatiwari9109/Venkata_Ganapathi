// // "use client";

// // import React from "react";
// // import { HeartPulse, Target, Shield, Compass, Heart, Eye } from "lucide-react";
// // import { HOSPITAL_INFO } from "@/data/hospitalData";

// // export default function AboutSection() {
// //   const pillars = [
// //     {
// //       title: "1-on-1 Dedicated Therapy",
// //       desc: "Undivided senior specialist care by Dr. Maruti Rao.",
// //       icon: <HeartPulse className="w-4 h-4 text-[#588356]" />,
// //     },
// //     {
// //       title: "Evidence-Based Modalities",
// //       desc: "FDA-approved Electrotherapy, Traction & NMES.",
// //       icon: <Target className="w-4 h-4 text-[#588356]" />,
// //     },
// //     {
// //       title: "Non-Surgical Disc Care",
// //       desc: "Decompression for herniated discs.",
// //       icon: <Shield className="w-4 h-4 text-[#588356]" />,
// //     },
// //     {
// //       title: "Personalized Roadmap",
// //       desc: "Custom exercise & gait rehabilitation.",
// //       icon: <Compass className="w-4 h-4 text-[#588356]" />,
// //     },
// //   ];

// //   return (
// //     <section id="about" className="py-10 sm:py-14 bg-[#FAFAFE]/90 backdrop-blur-xl">
// //       <div className="max-w-7xl mx-auto px-2">
        
// //         {/* Main Grid: Responsive 1-col on Mobile, 12-col on Desktop */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
// //           {/* Left Column: Tall Vertical Video Media Card (Mobile-Optimized Height) */}
// //           <div className="lg:col-span-4 relative flex flex-col">
// //             <div className="relative w-full h-[340px] sm:h-[420px] lg:h-full lg:min-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-950 flex flex-col justify-between p-4 sm:p-5">
              
// //               {/* Live Background Video */}
// //               <video
// //                 autoPlay
// //                 loop
// //                 muted
// //                 playsInline
// //                 className="absolute inset-0 w-full h-full object-cover pointer-events-none"
// //               >
// //                 <source src="/6023241-uhd_3840_2160_25fps.mp4" type="video/mp4" />
// //               </video>
// //               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/40" />

// //               {/* Top Badges Overlay */}
// //               <div className="relative z-10 flex items-center justify-between">
// //                 <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
// //                   <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
// //                   <span>• LIVE REHAB</span>
// //                 </div>

// //                 <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold">
// //                   <Eye className="w-3.5 h-3.5 text-white" />
// //                   <span>8,500+</span>
// //                 </div>
// //               </div>

// //               {/* Bottom Large Text Overlay */}
// //               <div className="relative z-10 space-y-1">
// //                 <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
// //                   Heal with Senior <br />
// //                   <span className="text-[#A8D0A6]">Physio Specialists</span>
// //                 </p>
// //                 <p className="text-[11px] sm:text-xs text-slate-300 font-medium pt-0.5">
// //                   Established 2015 • Reg. No: 75/2015
// //                 </p>
// //               </div>

// //             </div>
// //           </div>

// //           {/* Right Column: Narrative Header + 3-Card Bento Grid */}
// //           <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            
// //             {/* Header Narrative */}
// //             <div className="space-y-3.5">
// //               {/* Top Pill Badges Row */}
// //               <div className="flex flex-wrap items-center justify-between gap-2">
// //                 <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#EBF5EA] border border-[#A8D0A6] text-[#588356] text-xs font-bold uppercase">
// //                   <span>About Clinic</span>
// //                 </div>

// //                 <a
// //                   href="#contact"
// //                   className="inline-flex items-center space-x-2 px-3.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-all shadow-xs"
// //                 >
// //                   <span>Our History</span>
// //                 </a>
// //               </div>

// //               {/* Main Headline */}
// //               <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.18]">
// //                 We believe in the <br className="hidden sm:inline" />
// //                 <span className="text-[#588356]">transformative power</span> of <br className="hidden sm:inline" />
// //                 modern physical rehab
// //               </h2>

// //               {/* Subtitle Paragraph */}
// //               <p className="text-slate-600 leading-relaxed text-xs sm:text-sm max-w-2xl">
// //                 Founded under the leadership of <strong className="text-slate-900 font-semibold">{HOSPITAL_INFO.chiefDoctor} ({HOSPITAL_INFO.doctorQualification})</strong>, {HOSPITAL_INFO.name} ({HOSPITAL_INFO.regNo}) has served Hanuman Junction for over 10 years. By combining electrotherapy, computerized traction, NMES paralysis re-education, and manual joint mobilization, we help patients overcome severe pain without surgery.
// //               </p>
// //             </div>

// //             {/* Bottom 3 Bento Grid Cards (Stacked 1-Col on Mobile, 3-Col on Desktop) */}
// //             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-4.5 items-stretch">
              
// //               {/* Card 1: 4-Pillars List Card */}
// //               <div className="md:col-span-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-2.5">
// //                 {pillars.map((pillar, idx) => (
// //                   <div key={idx} className="flex items-start space-x-3 p-1.5 rounded-xl hover:bg-[#EBF5EA]/60 transition-colors">
// //                     <div className="p-2 bg-[#EBF5EA] rounded-lg shrink-0 border border-[#A8D0A6]/60">
// //                       {pillar.icon}
// //                     </div>
// //                     <div>
// //                       <h4 className="text-xs font-bold text-slate-900 leading-snug">
// //                         {pillar.title}
// //                       </h4>
// //                       <p className="text-[10px] text-slate-500 leading-tight pt-0.5">
// //                         {pillar.desc}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Card 2: Sage Green Accent Quote Card */}
// //               <div className="md:col-span-4 bg-[#A8D0A6] p-4 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-col justify-between space-y-5 shadow-sm relative overflow-hidden">
// //                 <div className="flex justify-between items-start">
// //                   <div className="w-8 h-8 rounded-full bg-white text-[#588356] flex items-center justify-center shadow-xs">
// //                     <Heart className="w-4 h-4 fill-[#588356]" />
// //                   </div>
// //                 </div>

// //                 <p className="text-base sm:text-lg font-black text-slate-900 leading-snug">
// //                   "Physiotherapy has restored mobility to 8,500+ patients without surgery."
// //                 </p>

// //                 <div className="flex items-center space-x-3 pt-1">
// //                   <img
// //                     className="w-8.5 h-8.5 rounded-full object-cover ring-2 ring-white shrink-0"
// //                     src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200"
// //                     alt="Dr. Maruti Rao Pulavarthi"
// //                   />
// //                   <div>
// //                     <h5 className="text-xs font-black text-slate-900 leading-tight">
// //                       {HOSPITAL_INFO.chiefDoctor}
// //                     </h5>
// //                     <p className="text-[10px] font-semibold text-slate-800">
// //                       Chief Physio (B.P.T)
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Card 3: Secondary Video Media Card */}
// //               <div className="md:col-span-3 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-900 min-h-[180px] sm:min-h-[190px] flex flex-col justify-between p-3.5">
// //                 <video
// //                   autoPlay
// //                   loop
// //                   muted
// //                   playsInline
// //                   className="absolute inset-0 w-full h-full object-cover pointer-events-none"
// //                 >
// //                   <source src="/5991800-uhd_3840_2160_25fps.mp4" type="video/mp4" />
// //                 </video>
// //                 <div className="absolute inset-0 bg-slate-950/40" />

// //                 {/* Top Badge */}
// //                 <div className="relative z-10 flex justify-end">
// //                   <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold">
// //                     Reg #75/2015
// //                   </span>
// //                 </div>

// //                 {/* Bottom Floating White Pill Badge */}
// //                 <div className="relative z-10">
// //                   <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-extrabold shadow-sm text-center">
// //                     Non-Surgical Care
// //                   </div>
// //                 </div>
// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import React from "react";
// import {
//   HeartPulse,
//   Target,
//   ShieldCheck,
//   Compass,
//   Award,
//   CheckCircle2,
//   Activity,
//   UserCheck,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// export default function AboutSection() {
//   const pillars = [
//     {
//       title: "1-on-1 Dedicated Therapy",
//       desc: "Undivided senior specialist care tailored to individual patient needs.",
//       icon: <HeartPulse className="w-5 h-5 text-emerald-600" />,
//     },
//     {
//       title: "Evidence-Based Modalities",
//       desc: "FDA-approved Electrotherapy, Traction & NMES treatment protocols.",
//       icon: <Target className="w-5 h-5 text-emerald-600" />,
//     },
//     {
//       title: "Non-Surgical Disc Care",
//       desc: "Advanced spinal decompression therapy for herniated & bulging discs.",
//       icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
//     },
//     {
//       title: "Personalized Roadmap",
//       desc: "Targeted exercise regimes and gait rehabilitation for long-term recovery.",
//       icon: <Compass className="w-5 h-5 text-emerald-600" />,
//     },
//   ];

//   return (
//     <section id="about" className="py-16 sm:py-24 bg-slate-50/80 relative overflow-hidden">
//       {/* Background Decorative Accents */}
//       <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full filter blur-3xl pointer-events-none -z-10" />
//       <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100/30 rounded-full filter blur-3xl pointer-events-none -z-10" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
//           <div className="space-y-3 max-w-3xl">
//             <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-800 text-xs font-bold uppercase tracking-wider">
//               <Award className="w-4 h-4 text-emerald-600" />
//               <span>About Our Clinic & Expertise</span>
//             </div>
            
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
//               Dedicated to Restoring Motion, <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800">
//                 Without Surgical Interventions
//               </span>
//             </h2>
//           </div>

//           <div className="flex items-center space-x-4 shrink-0">
//             <div className="bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3">
//               <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
//                 <UserCheck className="w-5 h-5" />
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-slate-900">10+ Years</p>
//                 <p className="text-xs text-slate-500 font-medium">Clinical Excellence</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
//           {/* Left Large Feature Video/Image Card (5 Cols) */}
//           <div className="lg:col-span-5 relative flex flex-col">
//             <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[460px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-950 flex flex-col justify-between p-6 group">
              
//               {/* Background Video */}
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
//               >
//                 <source src="/6023241-uhd_3840_2160_25fps.mp4" type="video/mp4" />
//               </video>

//               {/* Dark Overlay Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/20" />

//               {/* Card Top Pill Badges */}
//               <div className="relative z-10 flex items-center justify-between">
//                 <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/15 shadow-md">
//                   <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
//                   <span className="tracking-wider uppercase">Active Rehabilitation</span>
//                 </div>

//                 <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/20">
//                   <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
//                   <span>Modern Care</span>
//                 </div>
//               </div>

//               {/* Card Bottom Overlay Details */}
//               <div className="relative z-10 space-y-2">
//                 <div className="inline-block px-3 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 rounded-xl text-xs font-semibold">
//                   Evidence-Based Physical Therapy
//                 </div>
                
//                 <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
//                   Heal with Certified <br />
//                   <span className="text-emerald-400">Physio Specialists</span>
//                 </h3>

//                 <p className="text-xs sm:text-sm text-slate-300 font-medium pt-1 flex items-center space-x-2">
//                   <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
//                   <span>Advanced Computerized Spinal Decompression</span>
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* Right Column Grid Content (7 Cols) */}
//           <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
//             {/* Narrative Box */}
//             <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
//               <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
//                 <span className="w-2 h-6 bg-emerald-600 rounded-full inline-block" />
//                 <span>Our Clinical Approach</span>
//               </h3>
              
//               <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
//                 We focus on diagnosing the root cause of movement dysfunction. By combining high-precision electrotherapy, mechanical traction, NMES paralysis re-education, and manual joint mobilization, we deliver long-term pain relief without reliance on surgery or long-term medication.
//               </p>

//               <div className="pt-2 flex items-center space-x-6 text-xs sm:text-sm font-semibold text-slate-700">
//                 <div className="flex items-center space-x-2">
//                   <CheckCircle2 className="w-4 h-4 text-emerald-600" />
//                   <span>Non-Invasive Protocols</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <CheckCircle2 className="w-4 h-4 text-emerald-600" />
//                   <span>Senior Doctor Supervision</span>
//                 </div>
//               </div>
//             </div>

//             {/* Sub-Bento Grid: 4 Pillars & Highlight Banner */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
              
//               {/* Pillars List Card (7 Cols) */}
//               <div className="md:col-span-7 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
//                 <p className="text-xs font-black uppercase text-slate-400 tracking-wider">
//                   Key Rehabilitation Pillars
//                 </p>
                
//                 <div className="space-y-3">
//                   {pillars.map((pillar, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-start space-x-3 p-2.5 rounded-2xl hover:bg-emerald-50/60 transition-colors border border-transparent hover:border-emerald-100/80"
//                     >
//                       <div className="p-2 bg-emerald-100/70 rounded-xl shrink-0 border border-emerald-200/50">
//                         {pillar.icon}
//                       </div>
//                       <div>
//                         <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
//                           {pillar.title}
//                         </h4>
//                         <p className="text-xs text-slate-500 leading-normal pt-0.5">
//                           {pillar.desc}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Deep Emerald Accent Quote Box (5 Cols) */}
//               <div className="md:col-span-5 bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 p-6 rounded-3xl flex flex-col justify-between space-y-6 shadow-md text-white relative overflow-hidden">
//                 <div className="absolute top-0 right-0 -mt-6 -mr-6 w-28 h-28 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

//                 <div className="flex justify-between items-start z-10">
//                   <div className="p-2 bg-white/10 rounded-xl border border-white/15">
//                     <Activity className="w-5 h-5 text-emerald-300 animate-pulse" />
//                   </div>
//                   <span className="text-[10px] uppercase tracking-widest bg-emerald-500/30 px-2.5 py-1 rounded-full border border-emerald-400/30 text-emerald-300 font-bold">
//                     Goal
//                   </span>
//                 </div>

//                 <div className="space-y-2 z-10">
//                   <p className="text-base sm:text-lg font-bold text-emerald-50 leading-snug">
//                     "Restoring natural movement and physical independence with minimal intervention."
//                   </p>
//                   <p className="text-xs text-emerald-200/80 font-medium">
//                     Tailored rehabilitation programs for all age groups.
//                   </p>
//                 </div>

//                 <div className="pt-3 border-t border-white/10 z-10 flex items-center justify-between">
//                   <span className="text-xs font-semibold text-slate-300">Learn More</span>
//                   <a href="#services" className="p-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors text-white">
//                     <ArrowRight className="w-4 h-4" />
//                   </a>
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
  ShieldCheck,
  Target,
  Award,
  HeartPulse,
  Activity,
  CheckCircle2,
  Compass,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const corePillars = [
    {
      id: 0,
      title: "Evidence-Based Protocols",
      subtitle: "FDA-Approved Electrotherapy & Traction",
      desc: "Hum har patient ke pain cause ko identify karke clinically proven non-surgical modalities use karte hain taaki recovery fast aur long-lasting ho.",
      icon: <Target className="w-5 h-5 text-teal-600" />,
      tag: "Clinical Excellence",
    },
    {
      id: 1,
      title: "1-on-1 Specialist Care",
      subtitle: "Dedicated Senior Doctor Attention",
      desc: "Har session senior physical therapy specialist dwara personally supervise hota hai, bina kisi general assistant ya delayed care ke.",
      icon: <HeartPulse className="w-5 h-5 text-teal-600" />,
      tag: "Personalized",
    },
    {
      id: 2,
      title: "Non-Surgical Disc Care",
      subtitle: "Targeted Mechanical Decompression",
      desc: "Herniated, bulging discs aur sciatica ke cases ko bina kisi surgery ya heavy medication ke natural decompression techniques se manage karte hain.",
      icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
      tag: "Zero Invasive",
    },
  ];

  const highlights = [
    { label: "Clinical Experience", value: "10+ Years" },
    { label: "Successful Recoveries", value: "8,500+" },
    { label: "Patient Satisfaction", value: "98.4%" },
    { label: "Specialized Protocols", value: "25+" },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-100">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-50 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-50 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          
          {/* Left Column (5 Cols): Feature Image Stack & Interactive Card */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            
            {/* Main Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white bg-slate-100 shadow-xl group flex-1">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000"
                alt="Physiotherapy specialist helping patient"
                className="w-full h-[420px] sm:h-[500px] lg:h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay for text readability at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Top Tag Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-md flex items-center space-x-2">
                  <Award className="w-4 h-4 text-teal-600" />
                  <span>Reg #{HOSPITAL_INFO?.regNo || "75/2015"}</span>
                </div>
              </div>

              {/* Dynamic Bottom Glass Card synced with Right Active Tab */}
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider flex items-center space-x-1.5">
                    <Activity className="w-4 h-4" />
                    <span>{corePillars[activeTab].title}</span>
                  </span>
                  <span className="text-[10px] bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded font-bold">
                    {corePillars[activeTab].tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {corePillars[activeTab].desc}
                </p>
              </div>

            </div>

            {/* Floating Experience Badge Offset */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xl items-center space-x-3.5 z-20">
              <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 border border-teal-100">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-slate-900 leading-none">100% Natural</p>
                <p className="text-[11px] text-slate-500 pt-0.5 font-medium">Non-Invasive Recovery</p>
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Content & Interactive Tab Selector */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Header Content */}
            <div className="space-y-4">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>About Our Specialized Clinic</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Restoring Pain-Free Motion, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-sky-600">
                  Root Cause Recovery
                </span> <br />
                <span className="font-serif italic font-normal text-slate-600 text-2xl sm:text-4xl">
                  Built On Clinical Trust.
                </span>
              </h2>

              {/* Bio Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                {HOSPITAL_INFO?.name || "Our Clinic"} is led by dedicated clinical specialists committed to treating acute and chronic musculoskeletal conditions. Hum advanced technology aur hands-on manual techniques ka perfect balance combine karke aapki mobility wapas laate hain.
              </p>

            </div>

            {/* Interactive Core Pillars Selector */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                Why Patients Trust Our Approach:
              </p>

              <div className="grid grid-cols-1 gap-3">
                {corePillars.map((pillar) => (
                  <div
                    key={pillar.id}
                    onClick={() => setActiveTab(pillar.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-4 ${
                      activeTab === pillar.id
                        ? "bg-white border-teal-600 shadow-md ring-1 ring-teal-600/20"
                        : "bg-slate-50/80 border-slate-200/70 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-100 shrink-0">
                      {pillar.icon}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {pillar.title}
                        </h3>
                        {activeTab === pillar.id && (
                          <span className="text-xs font-bold text-teal-600 flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Active View</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 leading-normal">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom 4-Stat Grid */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-teal-600 hover:text-teal-700 uppercase tracking-wider transition-all group"
              >
                <span>Explore Our Full Specialized Treatments</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}