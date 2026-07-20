'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { Dna, TestTube2, Atom, Aperture, Microscope, ArrowRight, FlaskConical, Sparkles } from 'lucide-react';

// Existing sample types and descriptions are preserved verbatim; the redesign adds
// a light biotech palette, floating pulse icons, feature tags and a cursor-reactive
// 3D-tilt glass card. Feature tags summarize each platform's core techniques.
const types = [
  {
    name: 'DNA',
    icon: Dna,
    desc: 'High-throughput sequencing and genomic profiling for precision diagnostics.',
    features: ['Whole-genome & exome', 'Variant profiling', 'Copy-number analysis'],
    // light blue
    surface: 'linear-gradient(150deg, rgba(255,255,255,0.85) 0%, rgba(234,246,255,0.72) 100%)',
    iconGradient: 'linear-gradient(135deg,#38bdf8,#22d3ee)',
    glow: 'rgba(56,189,248,0.35)',
    glare: 'rgba(56,189,248,0.22)',
    accent: 'text-sky-600',
    ring: 'group-hover:ring-sky-300/60',
  },
  {
    name: 'RNA',
    icon: TestTube2,
    desc: 'Advanced transcriptomics and gene expression analysis platforms.',
    features: ['Transcriptomics', 'Gene expression', 'RT-PCR assays'],
    // mint green
    surface: 'linear-gradient(150deg, rgba(255,255,255,0.85) 0%, rgba(232,255,245,0.72) 100%)',
    iconGradient: 'linear-gradient(135deg,#34d399,#2dd4bf)',
    glow: 'rgba(52,211,153,0.35)',
    glare: 'rgba(45,212,191,0.22)',
    accent: 'text-emerald-600',
    ring: 'group-hover:ring-emerald-300/60',
  },
  {
    name: 'Protein',
    icon: Atom,
    desc: 'Comprehensive proteomics and protein biomarker validation workflows.',
    features: ['Proteomics', 'Biomarker validation', 'IHC & mIF'],
    // soft cyan
    surface: 'linear-gradient(150deg, rgba(255,255,255,0.85) 0%, rgba(223,251,255,0.72) 100%)',
    iconGradient: 'linear-gradient(135deg,#22d3ee,#06b6d4)',
    glow: 'rgba(34,211,238,0.35)',
    glare: 'rgba(34,211,238,0.22)',
    accent: 'text-cyan-600',
    ring: 'group-hover:ring-cyan-300/60',
  },
  {
    name: 'Cell',
    icon: Aperture,
    desc: 'Single-cell analysis, immune phenotyping and functional cell monitoring.',
    features: ['Single-cell analysis', 'Immune phenotyping', 'Flow cytometry'],
    // lavender tint
    surface: 'linear-gradient(150deg, rgba(255,255,255,0.85) 0%, rgba(241,238,255,0.72) 100%)',
    iconGradient: 'linear-gradient(135deg,#a78bfa,#818cf8)',
    glow: 'rgba(167,139,250,0.35)',
    glare: 'rgba(167,139,250,0.22)',
    accent: 'text-violet-600',
    ring: 'group-hover:ring-violet-300/60',
  },
  {
    name: 'Tissue',
    icon: Microscope,
    desc: 'Digital pathology, IHC staining and spatial transcriptomics capabilities.',
    features: ['Digital pathology', 'IHC staining', 'Spatial transcriptomics'],
    // pearl / pale teal
    surface: 'linear-gradient(150deg, rgba(255,255,255,0.9) 0%, rgba(226,248,246,0.72) 100%)',
    iconGradient: 'linear-gradient(135deg,#2dd4bf,#38bdf8)',
    glow: 'rgba(45,212,191,0.35)',
    glare: 'rgba(45,212,191,0.22)',
    accent: 'text-teal-600',
    ring: 'group-hover:ring-teal-300/60',
  },
];

// Premium, cursor-reactive light glass card with 3D tilt, mouse-follow reflection,
// floating pulse icon and animated border.
const SampleCard = ({ type, index }) => {
  const Icon = type.icon;
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 150, damping: 18 });

  const glareX = useTransform(mx, (v) => `${v * 100}%`);
  const glareY = useTransform(my, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(340px circle at ${glareX} ${glareY}, ${type.glare}, transparent 55%)`;

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full [perspective:1400px]"
    >
      {/* soft pastel glow halo */}
      <div
        className="se-breathe pointer-events-none absolute -inset-2.5 rounded-[32px] opacity-70 blur-2xl"
        style={{ background: `radial-gradient(circle at 50% 40%, ${type.glow}, transparent 72%)` }}
      />

      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
        className="relative h-full"
      >
        {/* animated gradient border */}
        <div className="se-card-border pointer-events-none absolute -inset-px rounded-[27px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* light glass body */}
        <div
          className={`relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/70 p-7 shadow-[0_14px_40px_-16px_rgba(30,64,175,0.25)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-400 ring-0 ring-inset ${type.ring} group-hover:ring-2 group-hover:shadow-[0_28px_60px_-20px_rgba(13,148,136,0.4)]`}
          style={{ background: type.surface }}
        >
          {/* top-edge glass reflection */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
          {/* soft corner sheen */}
          <div className="pointer-events-none absolute -top-14 -left-10 h-40 w-52 rounded-full opacity-60" style={{ background: 'radial-gradient(60% 60% at 42% 42%, rgba(255,255,255,0.75), rgba(255,255,255,0) 70%)' }} />
          {/* mouse-follow light reflection */}
          <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex h-full flex-col" style={{ transform: 'translateZ(40px)' }}>
            {/* Top area — floating, pulsing glowing icon */}
            <div className="relative mb-6 inline-flex">
              <span
                className="se-pulse pointer-events-none absolute -inset-2 rounded-2xl blur-md"
                style={{ background: `radial-gradient(circle, ${type.glow}, transparent 70%)` }}
              />
              <span
                className="se-float relative flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-[0_10px_24px_-8px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,0.5)] transition-transform duration-400 group-hover:rotate-6 group-hover:scale-110"
                style={{ background: type.iconGradient }}
              >
                <Icon className="h-8 w-8" />
              </span>
            </div>

            {/* Content area */}
            <h4 className="text-2xl font-black tracking-tight text-slate-900 mb-2">
              {type.name}
            </h4>
            <div className={`h-1 w-9 rounded-full bg-current ${type.accent} mb-4 origin-left transition-all duration-400 group-hover:w-16`} />
            <p className="text-slate-600 text-sm leading-relaxed mb-5">{type.desc}</p>

            {/* Small feature list */}
            <ul className="space-y-2 mb-6">
              {type.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13px] text-slate-500">
                  <span className={`inline-flex h-1.5 w-1.5 rounded-full bg-current ${type.accent}`} />
                  {f}
                </li>
              ))}
            </ul>

            {/* Explore Capability button */}
            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SampleExpertise = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #EAF6FF 32%, #DFFBFF 63%, #E8FFF5 100%)' }}
    >
      <style>{`
        @property --se-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @keyframes se-border-spin { to { --se-angle: 360deg; } }
        @keyframes se-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes se-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.85; transform: scale(1.05); } }
        @keyframes se-pulse { 0%,100% { opacity:.55; transform: scale(1); } 50% { opacity:1; transform: scale(1.12); } }
        @keyframes se-drift-a { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(34px,-26px,0); } }
        @keyframes se-drift-b { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(-30px,22px,0); } }
        @keyframes se-particle { 0%,100% { transform: translateY(0); opacity:.35; } 50% { transform: translateY(-20px); opacity:.9; } }
        @keyframes se-spin { to { transform: rotate(360deg); } }
        @keyframes se-spin-rev { to { transform: rotate(-360deg); } }
        @keyframes se-core-pulse { 0%,100% { transform: scale(1); opacity:.9; } 50% { transform: scale(1.06); opacity:1; } }
        @keyframes se-dash { to { stroke-dashoffset: -1000; } }

        .se-card-border {
          padding: 1.5px;
          background: conic-gradient(from var(--se-angle), rgba(56,189,248,0), #38bdf8 90deg, #2dd4bf 180deg, #22d3ee 270deg, rgba(56,189,248,0) 360deg);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          animation: se-border-spin 6s linear infinite;
        }
        .se-float { animation: se-float 5s ease-in-out infinite; }
        .se-breathe { animation: se-breathe 6s ease-in-out infinite; }
        .se-pulse { animation: se-pulse 4s ease-in-out infinite; }
        .se-drift-a { animation: se-drift-a 18s ease-in-out infinite; }
        .se-drift-b { animation: se-drift-b 15s ease-in-out infinite; }
        .se-particle { animation: se-particle 7s ease-in-out infinite; }
        .se-spin { animation: se-spin 26s linear infinite; }
        .se-spin-rev { animation: se-spin-rev 34s linear infinite; }
        .se-core-pulse { animation: se-core-pulse 5s ease-in-out infinite; }
        .se-dash { stroke-dasharray: 7 11; animation: se-dash 22s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .se-card-border, .se-float, .se-breathe, .se-pulse, .se-drift-a, .se-drift-b,
          .se-particle, .se-spin, .se-spin-rev, .se-core-pulse, .se-dash { animation: none !important; }
        }
      `}</style>

      {/* ── Animated biotech background ─────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* soft glowing circles */}
        <div className="se-drift-a absolute -top-20 right-[8%] h-[380px] w-[380px] rounded-full bg-sky-300/20 blur-3xl" />
        <div className="se-drift-b absolute bottom-[-4rem] left-[4%] h-[340px] w-[340px] rounded-full bg-teal-300/20 blur-3xl" />
        <div className="se-drift-a absolute top-[35%] left-[42%] h-64 w-64 rounded-full bg-cyan-200/25 blur-3xl" style={{ animationDelay: '4s' }} />

        {/* minimal scientific grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)',
          }}
        />

        {/* DNA helix — very low opacity */}
        <svg className="absolute -right-10 top-16 w-[260px] h-[520px] opacity-[0.07] hidden lg:block" viewBox="0 0 200 600" fill="none">
          <path d="M50 0 C160 60 -40 120 70 180 C160 240 -40 300 70 360 C160 420 -40 480 70 540 C130 570 90 600 90 600" stroke="#0ea5e9" strokeWidth="3" />
          <path d="M150 0 C40 60 240 120 130 180 C40 240 240 300 130 360 C40 420 240 480 130 540 C70 570 110 600 110 600" stroke="#14b8a6" strokeWidth="3" />
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={i} x1="60" y1={i * 55 + 20} x2="140" y2={i * 55 + 20} stroke="#22d3ee" strokeWidth="2" />
          ))}
        </svg>
        <svg className="absolute -left-16 bottom-4 w-[220px] h-[440px] opacity-[0.06] hidden lg:block" viewBox="0 0 200 600" fill="none">
          <path d="M50 0 C160 60 -40 120 70 180 C160 240 -40 300 70 360 C160 420 -40 480 70 540 C130 570 90 600 90 600" stroke="#14b8a6" strokeWidth="3" />
          <path d="M150 0 C40 60 240 120 130 180 C40 240 240 300 130 360 C40 420 240 480 130 540 C70 570 110 600 110 600" stroke="#0ea5e9" strokeWidth="3" />
        </svg>

        {/* abstract cell structures */}
        <svg className="se-drift-b absolute left-[10%] top-[18%] w-40 h-40 opacity-[0.10]" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="34" stroke="#2dd4bf" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="12" fill="#22d3ee" fillOpacity="0.4" />
          <circle cx="66" cy="40" r="4" fill="#38bdf8" fillOpacity="0.5" />
          <circle cx="38" cy="62" r="3" fill="#2dd4bf" fillOpacity="0.5" />
        </svg>
        <svg className="se-drift-a absolute right-[14%] bottom-[16%] w-32 h-32 opacity-[0.10]" viewBox="0 0 100 100" fill="none" style={{ animationDelay: '3s' }}>
          <circle cx="50" cy="50" r="30" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="10" fill="#a78bfa" fillOpacity="0.35" />
          <circle cx="62" cy="58" r="3.5" fill="#22d3ee" fillOpacity="0.5" />
        </svg>

        {/* floating molecular particles */}
        {[
          { left: '16%', top: '24%', d: '0s', c: 'bg-sky-400/40' },
          { left: '84%', top: '30%', d: '1.2s', c: 'bg-teal-400/40' },
          { left: '72%', top: '66%', d: '2.4s', c: 'bg-cyan-400/40' },
          { left: '26%', top: '74%', d: '3.1s', c: 'bg-violet-400/40' },
          { left: '54%', top: '14%', d: '1.8s', c: 'bg-cyan-400/40' },
          { left: '46%', top: '82%', d: '2.7s', c: 'bg-teal-400/40' },
        ].map((p, i) => (
          <span
            key={i}
            className={`se-particle absolute h-2 w-2 rounded-full ${p.c} shadow-[0_0_10px_2px_rgba(45,212,191,0.3)]`}
            style={{ left: p.left, top: p.top, animationDelay: p.d }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* ── Premium header ──────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-16">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-600 uppercase mb-4"
            >
              <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-sky-400 to-teal-400 text-white shadow-[0_0_14px_rgba(45,212,191,0.6)]">
                <FlaskConical className="h-3.5 w-3.5" />
              </span>
              Analytical Platforms
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-slate-900"
            >
              Advanced Expertise for <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500">
                  Every Sample Type
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1.5 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400"
                />
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-slate-600 lg:max-w-sm leading-relaxed lg:mb-1"
          >
            Our specialized teams are equipped to handle and analyze a diverse array of biological materials with precision and care.
          </motion.p>
        </div>

        {/* ── Central "Precision Sample Intelligence" core ────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-16 flex max-w-2xl items-center justify-center"
        >
          {/* connecting network line behind the core */}
          <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 hidden h-24 w-full -translate-y-1/2 md:block" viewBox="0 0 800 100" preserveAspectRatio="none" fill="none">
            <path className="se-dash" d="M0 50 C160 10 260 90 400 50 C540 10 640 90 800 50" stroke="#2dd4bf" strokeWidth="1.5" strokeOpacity="0.5" />
            <path className="se-dash" d="M0 50 C160 90 260 10 400 50 C540 90 640 10 800 50" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" style={{ animationDelay: '2s' }} />
          </svg>

          <div className="relative flex h-52 w-52 items-center justify-center">
            {/* slow rotating rings */}
            <div className="se-spin absolute inset-0 rounded-full border border-dashed border-teal-400/40" />
            <div className="se-spin-rev absolute inset-3 rounded-full border border-sky-400/30" />
            <div
              className="se-spin absolute inset-0 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, transparent, rgba(45,212,191,0.35), transparent 40%, rgba(56,189,248,0.35), transparent 70%)', WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))', mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))' }}
            />
            {/* pulsing halo */}
            <div className="se-breathe absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.35),rgba(56,189,248,0.15)_60%,transparent_75%)] blur-xl" />

            {/* orbiting particles */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${deg}deg) translateY(-98px)` }}
              >
                <span className="se-pulse block h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 shadow-[0_0_10px_2px_rgba(45,212,191,0.5)]" style={{ animationDelay: `${i * 0.4}s` }} />
              </span>
            ))}

            {/* glowing core */}
            <div className="se-core-pulse relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/80 bg-white/70 text-center backdrop-blur-xl shadow-[0_20px_45px_-15px_rgba(13,148,136,0.5),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <Sparkles className="mb-1 h-5 w-5 text-teal-500" />
              <span className="px-3 text-[13px] font-black leading-tight text-slate-800">
                Precision Sample <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-500">Intelligence</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Sample type cards ──────────────────────────────────── */}
        <div className="relative">
          {/* faint connecting molecular lines behind the grid (desktop) */}
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 hidden h-full w-full lg:block" preserveAspectRatio="none" viewBox="0 0 1200 300" fill="none">
            <path className="se-dash" d="M120 150 H1080" stroke="#2dd4bf" strokeWidth="1.2" strokeOpacity="0.35" />
            <path className="se-dash" d="M120 90 C400 200 800 40 1080 150" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.25" style={{ animationDelay: '3s' }} />
          </svg>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {types.map((type, index) => (
              <SampleCard key={type.name} type={type} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleExpertise;
