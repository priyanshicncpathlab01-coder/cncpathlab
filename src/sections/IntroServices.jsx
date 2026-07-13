import { useRef, useEffect, useLayoutEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useAnimationFrame, wrap } from 'framer-motion';
import { Layers, Microscope, Dna, Search, Activity, TestTube, ArrowRight } from 'lucide-react';

const technologyCards = [
  {
    title: 'Multiplex Immunofluorescence',
    description: 'Simultaneously visualize multiple biomarkers within a single tissue section using high-parameter fluorescence panels for deep spatial insight.',
    icon: Layers,
    path: '/multiplex-immunofluorescence',
  },
  {
    title: 'Immunohistochemistry (IHC)',
    description: 'Precise antigen detection and biomarker localization in tissue sections, validated for both research and clinical diagnostic workflows.',
    icon: Microscope,
    path: '/immunohistochemistry',
  },
  {
    title: 'FISH / ISH',
    description: 'Fluorescence and chromogenic in situ hybridization to detect gene rearrangements, copy number changes, and RNA expression at the single-cell level.',
    icon: Dna,
    path: '/fish-ish',
  },
  {
    title: 'Pathology',
    description: 'Expert histopathological review and diagnostic interpretation by board-certified pathologists to support accurate, evidence-based conclusions.',
    icon: Search,
    path: '/pathology-services',
  },
  {
    title: 'Gene Expression Profiling of Biopsies',
    description: 'Quantitative transcriptomic analysis of biopsy specimens to characterize gene expression signatures and inform biomarker discovery.',
    icon: Activity,
  },
  {
    title: 'RT-PCR',
    description: 'Reverse transcription polymerase chain reaction for highly sensitive detection and quantification of RNA targets directly from biopsy specimens.',
    icon: TestTube,
    path: '/rt-pcr',
  },
];

// Extremely subtle (3-4% opacity) scientific corner motifs, cycled per card.
const CornerDecoration = ({ variant }) => {
  const common = {
    className: 'absolute top-5 right-5 w-24 h-24 opacity-[0.035] pointer-events-none select-none',
    viewBox: '0 0 100 100',
    'aria-hidden': true,
  };

  switch (variant) {
    case 0: // DNA helix outline
      return (
        <svg {...common}>
          <path d="M32,0 C72,18 -8,38 32,56 C72,74 -8,86 32,100" fill="none" stroke="#00AEEF" strokeWidth="2" />
          <path d="M68,0 C28,18 108,38 68,56 C28,74 108,86 68,100" fill="none" stroke="#00AEEF" strokeWidth="2" />
        </svg>
      );
    case 1: // Molecular network lines
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="3" fill="#00AEEF" />
          <circle cx="55" cy="12" r="3" fill="#00AEEF" />
          <circle cx="80" cy="40" r="3" fill="#00AEEF" />
          <circle cx="45" cy="55" r="3" fill="#00AEEF" />
          <line x1="20" y1="20" x2="55" y2="12" stroke="#00AEEF" strokeWidth="1.5" />
          <line x1="55" y1="12" x2="80" y2="40" stroke="#00AEEF" strokeWidth="1.5" />
          <line x1="20" y1="20" x2="45" y2="55" stroke="#00AEEF" strokeWidth="1.5" />
          <line x1="80" y1="40" x2="45" y2="55" stroke="#00AEEF" strokeWidth="1.5" />
        </svg>
      );
    case 2: // Hexagonal chemistry pattern
      return (
        <svg {...common}>
          <polygon points="30,4 52,17 52,43 30,56 8,43 8,17" fill="none" stroke="#00AEEF" strokeWidth="2" />
          <polygon points="68,30 90,43 90,69 68,82 46,69 46,43" fill="none" stroke="#00AEEF" strokeWidth="2" />
        </svg>
      );
    case 3: // Dot grid
      return (
        <svg {...common}>
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={12 + col * 22} cy={12 + row * 22} r="2.5" fill="#00AEEF" />
            ))
          )}
        </svg>
      );
    case 4: // Circular scientific blueprint
    default:
      return (
        <svg {...common}>
          <circle cx="50" cy="50" r="46" fill="none" stroke="#00AEEF" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#00AEEF" strokeWidth="1.5" />
          <line x1="50" y1="4" x2="50" y2="96" stroke="#00AEEF" strokeWidth="1" />
          <line x1="4" y1="50" x2="96" y2="50" stroke="#00AEEF" strokeWidth="1" />
        </svg>
      );
  }
};

const TechnologyCard = ({ title, description, icon: Icon, variant, path, focusable, onActivate }) => (
  <div
    className={`group relative h-full w-full ${path ? 'cursor-pointer' : ''}`}
    onClick={path ? () => onActivate?.(path) : undefined}
    role={path ? 'link' : undefined}
    tabIndex={path && focusable ? 0 : undefined}
    onKeyDown={
      path
        ? (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onActivate?.(path);
            }
          }
        : undefined
    }
    aria-label={path ? `${title} — view service page` : undefined}
  >
    {/* Animated glowing border line (scans top → right → bottom → left, infinitely) */}
    <div className="its-border-line pointer-events-none absolute inset-0 rounded-[28px] z-20" aria-hidden="true" />

    <div
      className="relative h-full flex flex-col overflow-hidden px-9 py-6 transition-all duration-[350ms] ease-in-out will-change-transform
                 rounded-[28px] border border-[rgba(255,255,255,0.22)]
                 shadow-[0_15px_40px_rgba(0,120,255,0.12)] group-hover:shadow-[0_26px_60px_rgba(0,150,255,0.32)]
                 group-hover:-translate-y-[10px] group-hover:scale-[1.02]"
      style={{
        background:
          'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(224,244,255,0.06) 55%, rgba(0,180,255,0.05) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Soft light reflection in the top-left corner for the glass sheen */}
      <div
        className="pointer-events-none absolute -top-16 -left-12 w-60 h-44 rounded-full opacity-50"
        style={{ background: 'radial-gradient(60% 60% at 42% 42%, rgba(255,255,255,0.55), rgba(255,255,255,0) 70%)' }}
        aria-hidden="true"
      />

      <CornerDecoration variant={variant} />

      <div className="relative shrink-0">
        <div
          className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.35)] shadow-[0_0_22px_rgba(0,180,255,0.35)]"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
        >
          <div className="absolute inset-0 rounded-full bg-[#00AEEF]/30 blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-[350ms]" />
          <Icon className="w-8 h-8 text-[#0284C7] relative z-10 transition-transform duration-[350ms] ease-in-out group-hover:rotate-[8deg] group-hover:scale-[1.12]" />
        </div>

        <h3 className="text-[30px] leading-[1.15] font-bold text-[#0F172A] mt-5 min-h-[70px] break-words [text-wrap:balance]">{title}</h3>
      </div>

      <p className="text-[17px] leading-[1.7] text-[#475569] mt-3 line-clamp-3 flex-grow">{description}</p>

      <div className="h-px mt-5 mb-4 shrink-0" style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0), rgba(0,180,255,0.25), rgba(15,23,42,0))' }} />

      <div className="shrink-0">
        <button
          type="button"
          className="group/btn relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-[#00AEEF] bg-white px-7 h-[50px] text-[#0284C7] text-sm font-semibold
                     transition-all duration-[350ms] ease-in-out
                     group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_10px_30px_rgba(0,120,255,0.35)]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2"
        >
          <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">
            Explore Technology
            <ArrowRight className="w-4 h-4 transition-transform duration-[350ms] ease-in-out group-hover:translate-x-1" />
          </span>
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]"
            style={{ background: 'linear-gradient(90deg,#00C6FF,#0072FF)' }}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </div>
);

// Infinite auto-scrolling, drag-enabled carousel. Duplicates the card list so the
// translateX wrap is seamless (no jumps); auto-scroll pauses on hover and while dragging.
const TechnologyCarousel = ({ cards }) => {
  const navigate = useNavigate();
  const baseX = useMotionValue(0);
  const trackRef = useRef(null);
  const [setWidth, setSetWidth] = useState(0);

  const paused = useRef(false);
  const dragging = useRef(false);
  const dragMoved = useRef(false);
  const dragStartX = useRef(0);
  const baseAtStart = useRef(0);
  const reduceMotion = useRef(false);
  const SPEED = 40; // px per second, right-to-left
  const GAP = 32; // matches gap-8 on the track

  // Measure the width of a single (non-duplicated) set of cards for seamless wrapping.
  // scrollWidth omits the trailing gap, so add one GAP back before halving.
  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) setSetWidth((trackRef.current.scrollWidth + GAP) / 2);
    };
    measure();
    window.addEventListener('resize', measure);
    reduceMotion.current = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    return () => window.removeEventListener('resize', measure);
  }, [cards]);

  const x = useTransform(baseX, (v) => (setWidth ? `${wrap(-setWidth, 0, v)}px` : '0px'));

  useAnimationFrame((_, delta) => {
    if (paused.current || dragging.current || reduceMotion.current || !setWidth) return;
    baseX.set(baseX.get() - (SPEED * delta) / 1000);
  });

  const onPointerDown = useCallback(
    (e) => {
      dragging.current = true;
      dragMoved.current = false;
      dragStartX.current = e.clientX;
      baseAtStart.current = baseX.get();
    },
    [baseX]
  );

  // Navigate only on a genuine click — never when a drag has occurred.
  const handleActivate = useCallback(
    (path) => {
      if (!path || dragMoved.current) return;
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [navigate]
  );

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      if (Math.abs(e.clientX - dragStartX.current) > 6) dragMoved.current = true;
      baseX.set(baseAtStart.current + (e.clientX - dragStartX.current));
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [baseX]);

  const doubled = [...cards, ...cards];

  return (
    <div
      className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
      style={{ touchAction: 'pan-y' }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onPointerDown={onPointerDown}
      role="region"
      aria-label="Tissue biopsy analysis technologies carousel"
    >
      <motion.div ref={trackRef} className="flex gap-8 w-max will-change-transform" style={{ x }}>
        {doubled.map((card, i) => (
          <div
            key={`${card.title}-${i}`}
            className="shrink-0 w-[85vw] sm:w-[56vw] lg:w-[42vw] lg:max-w-[540px] h-[400px]"
            aria-hidden={i >= cards.length ? true : undefined}
          >
            <TechnologyCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              variant={i % 5}
              path={card.path}
              focusable={i < cards.length}
              onActivate={handleActivate}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const IntroServices = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F8FCFF 55%, #F3FAFF 100%)' }}>
      <style>{`
        @keyframes its-glow-drift-a {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(40px, -30px, 0); }
        }
        @keyframes its-glow-drift-b {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-35px, 25px, 0); }
        }
        .its-glow-a { animation: its-glow-drift-a 16s ease-in-out infinite; }
        .its-glow-b { animation: its-glow-drift-b 14s ease-in-out infinite; }

        @keyframes its-particle-drift {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.5; }
          50% { transform: translate3d(6px, -14px, 0); opacity: 0.15; }
        }
        .its-particle { animation: its-particle-drift 6s ease-in-out infinite; }

        /* Animated glowing border line that scans around each card */
        @property --its-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes its-border-spin { to { --its-angle: 360deg; } }
        .its-border-line {
          --its-angle: 0deg;
          padding: 1.5px;
          background: conic-gradient(
            from var(--its-angle),
            rgba(0,229,255,0) 0deg,
            rgba(0,229,255,0) 235deg,
            #00E5FF 280deg,
            #009DFF 315deg,
            #00E5FF 350deg,
            rgba(0,229,255,0) 360deg
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          animation: its-border-spin 5s linear infinite;
          filter: drop-shadow(0 0 3px rgba(0,200,255,0.5));
          transition: filter 350ms ease;
        }
        .group:hover .its-border-line {
          filter: drop-shadow(0 0 8px rgba(0,215,255,0.95));
        }

        @media (prefers-reduced-motion: reduce) {
          .its-glow-a, .its-glow-b, .its-particle, .its-border-line {
            animation: none !important;
          }
        }
      `}</style>

      {/* Soft blue radial glows */}
      <div className="its-glow-a absolute -top-24 right-[6%] w-[420px] h-[420px] bg-[#00B8FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="its-glow-b absolute bottom-0 left-[4%] w-[360px] h-[360px] bg-[#00D4AA]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Large low-opacity DNA helix illustrations */}
      <svg
        className="absolute -right-16 top-10 w-[320px] h-[640px] opacity-[0.06] pointer-events-none select-none hidden lg:block"
        viewBox="0 0 300 600"
        aria-hidden="true"
      >
        <path d="M80,0 C220,80 -60,160 80,240 C220,320 -60,400 80,480 C220,560 -60,600 80,600" fill="none" stroke="#00B8FF" strokeWidth="5" />
        <path d="M220,0 C80,80 360,160 220,240 C80,320 360,400 220,480 C80,560 360,600 220,600" fill="none" stroke="#00D4AA" strokeWidth="5" />
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={i} x1="80" y1={i * 50} x2="220" y2={i * 50} stroke="#00B8FF" strokeWidth="3" />
        ))}
      </svg>
      <svg
        className="absolute -left-20 bottom-0 w-[260px] h-[520px] opacity-[0.05] pointer-events-none select-none hidden lg:block"
        viewBox="0 0 300 600"
        aria-hidden="true"
      >
        <path d="M80,0 C220,80 -60,160 80,240 C220,320 -60,400 80,480 C220,560 -60,600 80,600" fill="none" stroke="#00D4AA" strokeWidth="5" />
        <path d="M220,0 C80,80 360,160 220,240 C80,320 360,400 220,480 C80,560 360,600 220,600" fill="none" stroke="#00B8FF" strokeWidth="5" />
      </svg>

      {/* Thin molecular connection lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none select-none"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="120" y1="80" x2="260" y2="180" stroke="#0098FF" strokeWidth="1.5" />
        <line x1="260" y1="180" x2="180" y2="320" stroke="#0098FF" strokeWidth="1.5" />
        <line x1="820" y1="120" x2="700" y2="240" stroke="#00D4AA" strokeWidth="1.5" />
        <line x1="700" y1="240" x2="860" y2="360" stroke="#00D4AA" strokeWidth="1.5" />
        <line x1="500" y1="40" x2="600" y2="140" stroke="#0098FF" strokeWidth="1.5" />
        <circle cx="120" cy="80" r="4" fill="#00B8FF" />
        <circle cx="260" cy="180" r="4" fill="#00B8FF" />
        <circle cx="180" cy="320" r="4" fill="#00B8FF" />
        <circle cx="820" cy="120" r="4" fill="#00D4AA" />
        <circle cx="700" cy="240" r="4" fill="#00D4AA" />
        <circle cx="860" cy="360" r="4" fill="#00D4AA" />
        <circle cx="500" cy="40" r="4" fill="#0098FF" />
        <circle cx="600" cy="140" r="4" fill="#0098FF" />
      </svg>

      {/* Soft floating particles */}
      {[
        { top: '12%', left: '18%', size: '6px', delay: '0s' },
        { top: '35%', left: '92%', size: '5px', delay: '1.4s' },
        { top: '70%', left: '8%', size: '5px', delay: '2.2s' },
        { top: '85%', left: '55%', size: '6px', delay: '0.8s' },
      ].map((p, i) => (
        <span
          key={i}
          className="its-particle absolute rounded-full bg-[#00B8FF]/50 blur-[1px] pointer-events-none"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
        />
      ))}

      <div className="container-custom relative z-10">
        {/* Section intro — left-aligned like PFM */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-14">
          <div className="flex-1 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold tracking-widest text-primary-600 uppercase mb-4"
            >
              Our Technologies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Explore Technologies and Insights for{' '}
              <span className="text-primary-600">Tissue Biopsy Analysis</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="lg:max-w-sm text-slate-600 leading-relaxed lg:mb-1"
          >
            A comprehensive suite of tissue-based technologies delivering precise biomarker detection, molecular characterization, and expert pathology interpretation for biopsy specimens.
          </motion.p>
        </div>

        {/* Technology cards — infinite auto-scrolling carousel */}
        <TechnologyCarousel cards={technologyCards} />
      </div>
    </section>
  );
};

export default IntroServices;
