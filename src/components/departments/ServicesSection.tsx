// "use client";

// import React, { useState } from "react";
// import { DEPARTMENTS, Department } from "@/data/hospitalData";
// import { Activity, Brain, Zap, ShieldCheck, HeartPulse, Users, ArrowRight, CheckCircle, X, Stethoscope, Sparkles } from "lucide-react";

// export default function ServicesSection() {
//   const [activeCategory, setActiveCategory] = useState<string>("All");
//   const [selectedDept, setSelectedDept] = useState<Department | null>(null);

//   const categories = ["All", "Orthopedics", "Neurology", "Sports Science", "Spine Care", "Post-Op"];

//   const filteredDepts = activeCategory === "All"
//     ? DEPARTMENTS
//     : DEPARTMENTS.filter((d) => d.category === activeCategory);

//   const getIcon = (iconName: string) => {
//     switch (iconName) {
//       case "Activity": return <Activity className="w-5 h-5 text-sky-700" />;
//       case "Brain": return <Brain className="w-5 h-5 text-teal-700" />;
//       case "Zap": return <Zap className="w-5 h-5 text-amber-600" />;
//       case "ShieldPulse": return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
//       case "HeartPulse": return <HeartPulse className="w-5 h-5 text-rose-600" />;
//       default: return <Users className="w-5 h-5 text-indigo-700" />;
//     }
//   };

//   return (
//     <section id="departments" className="py-16 bg-[#FAFAFE]/90 backdrop-blur-xl">
//       <div className="max-w-7xl mx-auto px-2">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
//           <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#EBF5EA] border border-[#A8D0A6] text-[#588356] text-xs font-bold uppercase">
//             <Sparkles className="w-3.5 h-3.5 text-[#588356]" />
//             <span>Specialized Clinical Care</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
//             Comprehensive Physiotherapy <br className="hidden sm:inline" />
//             <span className="text-[#588356]">Departments & Treatments</span>
//           </h2>
//           <p className="text-slate-600 text-sm sm:text-base">
//             From acute sports tears to chronic spinal degeneration and post-stroke rehabilitation, our specialized clinical divisions provide targeted therapy protocols tailored to your recovery goals.
//           </p>
//         </div>

//         {/* Filter Categories */}
//         <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors ${
//                 activeCategory === cat
//                   ? "bg-slate-900 text-white border-slate-900"
//                   : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Departments Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredDepts.map((dept) => (
//             <div
//               key={dept.id}
//               className="bg-white border border-slate-300 rounded-2xl overflow-hidden flex flex-col group"
//             >
//               {/* Image Banner */}
//               <div className="relative h-48 overflow-hidden bg-slate-100">
//                 <img
//                   src={dept.image}
//                   alt={dept.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <span className="absolute top-3 left-3 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded">
//                   {dept.category}
//                 </span>
//                 <div className="absolute bottom-3 left-3 right-3 text-white bg-slate-900/90 p-2 rounded-lg flex items-center space-x-2 border border-slate-800">
//                   <div className="p-1 bg-white rounded">
//                     {getIcon(dept.iconName)}
//                   </div>
//                   <span className="text-xs font-semibold text-slate-200 truncate">
//                     Lead: {dept.doctorInCharge}
//                   </span>
//                 </div>
//               </div>

//               {/* Card Body */}
//               <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                 <div>
//                   <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
//                     {dept.name}
//                   </h3>
//                   <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
//                     {dept.shortDesc}
//                   </p>

//                   {/* Highlights list */}
//                   <div className="mt-4 space-y-1.5">
//                     {dept.treatments.slice(0, 3).map((treatment, idx) => (
//                       <div key={idx} className="flex items-center text-xs text-slate-700 font-medium">
//                         <CheckCircle className="w-3.5 h-3.5 text-teal-600 mr-2 shrink-0" />
//                         <span className="truncate">{treatment}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Card Action */}
//                 <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
//                   <button
//                     onClick={() => setSelectedDept(dept)}
//                     className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center space-x-1"
//                   >
//                     <span>View Protocol</span>
//                     <ArrowRight className="w-3.5 h-3.5" />
//                   </button>

//                   <a
//                     href="#contact"
//                     className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-sky-700 hover:bg-sky-800 border border-sky-800"
//                   >
//                     Book Specialist
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* Department Detail Modal */}
//       {selectedDept && (
//         <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl border border-slate-300 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
//             <button
//               onClick={() => setSelectedDept(null)}
//               className="absolute top-5 right-5 p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center space-x-3 mb-4">
//               <div className="p-2.5 bg-slate-100 border border-slate-200 rounded-xl">
//                 {getIcon(selectedDept.iconName)}
//               </div>
//               <div>
//                 <span className="text-xs font-bold text-sky-700 uppercase">
//                   {selectedDept.category} Department
//                 </span>
//                 <h3 className="text-xl font-black text-slate-900">
//                   {selectedDept.name}
//                 </h3>
//               </div>
//             </div>

//             <p className="text-sm text-slate-600 leading-relaxed mb-6">
//               {selectedDept.fullDesc}
//             </p>

//             <div className="space-y-4 mb-6">
//               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
//                 Key Treatments Offered
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                 {selectedDept.treatments.map((t, i) => (
//                   <div key={i} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 flex items-center">
//                     <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
//                     <span>{t}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-4 mb-6">
//               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
//                 Advanced Equipment & Modalities
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                 {selectedDept.features.map((f, i) => (
//                   <div key={i} className="p-2.5 bg-sky-50 border border-sky-200 rounded-lg text-xs font-semibold text-sky-950 flex items-center">
//                     <Stethoscope className="w-4 h-4 text-sky-700 mr-2 shrink-0" />
//                     <span>{f}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between">
//               <div>
//                 <p className="text-xs text-slate-400">Head of Department</p>
//                 <p className="text-sm font-bold text-white">{selectedDept.doctorInCharge}</p>
//               </div>
//               <a
//                 href="#contact"
//                 onClick={() => setSelectedDept(null)}
//                 className="px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg text-xs font-bold text-white border border-sky-700"
//               >
//                 Book Appointment
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import React, { useState } from "react";
import { DEPARTMENTS, Department } from "@/data/hospitalData";
import {
  Activity,
  Brain,
  Zap,
  ShieldCheck,
  HeartPulse,
  Users,
  ArrowUpRight,
  CheckCircle2,
  X,
  Stethoscope,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const categories = [
    "All",
    "Orthopedics",
    "Neurology",
    "Sports Science",
    "Spine Care",
    "Post-Op",
  ];

  const filteredDepts =
    activeCategory === "All"
      ? DEPARTMENTS
      : DEPARTMENTS.filter((d) => d.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity":
        return <Activity className="w-5 h-5 text-teal-600" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-teal-600" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-teal-600" />;
      case "ShieldPulse":
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-teal-600" />;
      default:
        return <Users className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section
      id="services"
      className="relative w-full py-24 bg-slate-50/60 text-slate-900 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background Subtle Light Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-100/50 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-100/50 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Matching Hero & About Theme */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Specialized Clinical Care</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Physiotherapy <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-teal-700">
              Departments &amp; Treatments
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            From acute sports tears to chronic spinal degeneration and post-stroke rehabilitation, our specialized clinical divisions provide targeted therapy protocols tailored to your recovery goals.
          </p>
        </div>

        {/* Filter Categories Pill Group */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-2xs ${
                activeCategory === cat
                  ? "bg-teal-600 text-white border border-teal-600 shadow-teal-600/20 shadow-md"
                  : "bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepts.map((dept) => (
            <div
              key={dept.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden flex flex-col group shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300"
            >
              {/* Image Banner Frame */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Bottom Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                {/* Category Pill Tag */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold rounded-full shadow-md border border-slate-100">
                  {dept.category}
                </span>

                {/* Lead Doctor Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white bg-slate-900/80 backdrop-blur-md p-2.5 rounded-2xl flex items-center space-x-2.5 border border-white/10">
                  <div className="p-1.5 bg-teal-500/20 text-teal-300 rounded-xl border border-teal-500/30">
                    {getIcon(dept.iconName)}
                  </div>
                  <span className="text-xs font-medium text-slate-200 truncate">
                    Lead: <strong className="text-white">{dept.doctorInCharge}</strong>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {dept.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-2 space-y-2">
                    {dept.treatments.slice(0, 3).map((treatment, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mr-2 shrink-0" />
                        <span className="truncate">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDept(dept)}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center space-x-1 group/btn"
                  >
                    <span>View Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-1 px-4 py-2 rounded-full text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-600/20 transition-all"
                  >
                    <span>Book Specialist</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Department Detail Light Modal */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedDept(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-3.5 mb-5 pr-8">
              <div className="p-3 bg-teal-50 border border-teal-100 rounded-2xl">
                {getIcon(selectedDept.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded border border-teal-100">
                  {selectedDept.category} Department
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-1">
                  {selectedDept.name}
                </h3>
              </div>
            </div>

            {/* Full Narrative */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              {selectedDept.fullDesc}
            </p>

            {/* Treatments Offered Grid */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Key Clinical Treatments Offered
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedDept.treatments.map((t, i) => (
                  <div
                    key={i}
                    className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-800 flex items-center"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Modalities */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Advanced Modalities &amp; Equipment
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedDept.features.map((f, i) => (
                  <div
                    key={i}
                    className="p-3 bg-teal-50/50 border border-teal-100 rounded-xl text-xs font-semibold text-teal-950 flex items-center"
                  >
                    <Stethoscope className="w-4 h-4 text-teal-600 mr-2 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA Bar */}
            <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Head of Department</p>
                <p className="text-sm font-bold text-white">{selectedDept.doctorInCharge}</p>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedDept(null)}
                className="w-full sm:w-auto text-center px-5 py-2.5 bg-teal-600 hover:bg-teal-700 rounded-full text-xs font-bold text-white transition-all shadow-md flex items-center justify-center space-x-1.5"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}