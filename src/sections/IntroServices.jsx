import { useRef, useEffect, useLayoutEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useAnimationFrame, wrap, animate } from 'framer-motion';
import { Layers, Microscope, Dna, Search, Activity, TestTube, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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

// Per-card premium blue theme. Each card gets its own light glass tint + matching
// glow, expressed as CSS custom properties so the gradient, border, animated
// border-line, breathing glow and icon halo all shift together in one place.
// `tint/mid/deep` build the two-tone glass gradient; `accent` drives all glows;
// `line`/`line2` color the rotating border-line. All kept light & harmonious.
const cardThemes = [
  { name: 'Ice Blue',    tint: '240,251,255', mid: '213,244,255', deep: '197,240,253', accent: '0,196,245',  line: '#7FE9FF', line2: '#22B8F0' },
  { name: 'Sky Blue',    tint: '238,248,255', mid: '205,233,255', deep: '186,222,255', accent: '56,168,248',  line: '#8FD4FF', line2: '#3B9EFF' },
  { name: 'Powder Blue', tint: '242,249,255', mid: '216,236,252', deep: '199,227,248', accent: '96,178,235',  line: '#A9D8FF', line2: '#5AB6F0' },
  { name: 'Azure',       tint: '236,246,255', mid: '203,229,255', deep: '184,216,255', accent: '40,148,255',  line: '#7CC0FF', line2: '#2E86FF' },
  { name: 'Teal Blue',   tint: '236,252,253', mid: '205,244,244', deep: '189,237,235', accent: '18,190,200',  line: '#82ECEF', line2: '#1FC2CC' },
  { name: 'Frost Blue',  tint: '240,252,255', mid: '209,244,250', deep: '192,237,246', accent: '28,200,220',  line: '#88ECF7', line2: '#28C6DC' },
];

// Turn a theme into the CSS custom properties consumed by the card + its glow layers.
const themeVars = (t) => ({
  '--its-bg': `linear-gradient(160deg, rgba(${t.tint},0.66) 0%, rgba(${t.mid},0.5) 52%, rgba(${t.deep},0.44) 100%)`,
  '--its-border': `rgba(${t.accent},0.32)`,
  '--its-border-hover': `rgba(${t.accent},0.75)`,
  '--its-shadow': `0 15px 40px rgba(${t.accent},0.16), 0 0 0 1px rgba(255,255,255,0.5) inset`,
  '--its-shadow-hover': `0 28px 70px rgba(${t.accent},0.4), 0 0 28px rgba(${t.accent},0.3), 0 0 0 1px rgba(255,255,255,0.62) inset`,
  '--its-line-a': t.line,
  '--its-line-b': t.line2,
  '--its-line-glow': `rgba(${t.accent},0.5)`,
  '--its-line-glow-hover': `rgba(${t.accent},0.95)`,
  '--its-icon-glow': `rgba(${t.accent},0.32)`,
  '--its-divider': `linear-gradient(90deg, rgba(15,23,42,0), rgba(${t.accent},0.3), rgba(15,23,42,0))`,
});

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

const TechnologyCard = ({ title, description, icon: Icon, variant, path, focusable, onActivate, theme, glowDelay = 0 }) => (
  <div
    className={`group relative h-full w-full ${path ? 'cursor-pointer' : ''}`}
    style={theme}
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
    {/* Gentle breathing outer glow, tinted to this card's blue shade */}
    <div
      className="its-breathe pointer-events-none absolute -inset-[6px] rounded-[32px] z-0"
      style={{ animationDelay: `${glowDelay}s` }}
      aria-hidden="true"
    />

    {/* Animated glowing border line (scans top → right → bottom → left, infinitely) */}
    <div className="its-border-line pointer-events-none absolute inset-0 rounded-[28px] z-20" aria-hidden="true" />

    <div
      className="its-card relative h-full flex flex-col overflow-hidden px-9 py-6 transition-all duration-[350ms] ease-in-out will-change-transform
                 rounded-[28px] border
                 group-hover:-translate-y-[10px] group-hover:scale-[1.02]"
      style={{
        background: 'var(--its-bg)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
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
          className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.35)]"
          style={{ background: 'rgba(255,255,255,0.18)', boxShadow: '0 0 22px var(--its-icon-glow)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
        >
          <div
            className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-[350ms]"
            style={{ background: 'var(--its-icon-glow)' }}
          />
          <Icon className="w-8 h-8 text-[#0284C7] relative z-10 transition-transform duration-[350ms] ease-in-out group-hover:rotate-[8deg] group-hover:scale-[1.12]" />
        </div>

        <h3 className="text-[30px] leading-[1.15] font-bold text-[#0F172A] mt-5 min-h-[70px] break-words [text-wrap:balance]">{title}</h3>
      </div>

      <p className="text-[17px] leading-[1.7] text-[#334155] mt-3 line-clamp-3 flex-grow">{description}</p>

      <div className="h-px mt-5 mb-4 shrink-0" style={{ background: 'var(--its-divider)' }} />

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
  const manualScrolling = useRef(false); // true while an arrow-triggered smooth scroll is animating
  const manualControls = useRef(null);
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
    if (paused.current || dragging.current || manualScrolling.current || reduceMotion.current || !setWidth) return;
    baseX.set(baseX.get() - (SPEED * delta) / 1000);
  });

  // Manual navigation — smoothly scroll exactly one card, then hand back to auto-scroll.
  // dir = 1 advances (right), dir = -1 goes back (left). Auto-scroll is only suspended
  // for the duration of the tween, so it always resumes afterwards.
  const scrollByCards = useCallback(
    (dir) => {
      if (!setWidth) return;
      const step = setWidth / cards.length; // one card + its gap
      manualControls.current?.stop();
      manualScrolling.current = true;
      manualControls.current = animate(baseX, baseX.get() - dir * step, {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        onComplete: () => {
          manualScrolling.current = false;
        },
      });
    },
    [baseX, setWidth, cards.length]
  );

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
    <div className="relative">
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
                theme={themeVars(cardThemes[(i % cards.length) % cardThemes.length])}
                glowDelay={((i % cards.length) % cardThemes.length) * 0.7}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Manual navigation arrows — glassmorphism, kept outside the drag region so
          clicks never start a drag. Auto-scroll continues after each click. */}
      <button
        type="button"
        aria-label="Previous technologies"
        onClick={() => scrollByCards(-1)}
        className="its-nav-btn absolute left-2 sm:left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-30
                   flex items-center justify-center rounded-full cursor-pointer
                   w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                   border border-[rgba(255,255,255,0.65)] text-[#0284C7]
                   transition-transform duration-300 ease-out hover:scale-110 hover:text-[#0369A1]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2"
        style={{
          background: 'linear-gradient(160deg, rgba(255,255,255,0.78), rgba(224,244,255,0.55))',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
      </button>
      <button
        type="button"
        aria-label="Next technologies"
        onClick={() => scrollByCards(1)}
        className="its-nav-btn absolute right-2 sm:right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-30
                   flex items-center justify-center rounded-full cursor-pointer
                   w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                   border border-[rgba(255,255,255,0.65)] text-[#0284C7]
                   transition-transform duration-300 ease-out hover:scale-110 hover:text-[#0369A1]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2"
        style={{
          background: 'linear-gradient(160deg, rgba(255,255,255,0.78), rgba(224,244,255,0.55))',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
      </button>
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
            var(--its-line-a, #00E5FF) 280deg,
            var(--its-line-b, #009DFF) 315deg,
            var(--its-line-a, #00E5FF) 350deg,
            rgba(0,229,255,0) 360deg
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          animation: its-border-spin 5s linear infinite;
          filter: drop-shadow(0 0 3px var(--its-line-glow, rgba(0,200,255,0.5)));
          transition: filter 350ms ease;
        }
        .group:hover .its-border-line {
          filter: drop-shadow(0 0 8px var(--its-line-glow-hover, rgba(0,215,255,0.95)));
        }

        /* Per-card glass surface — border + glow driven by the card's theme vars */
        .its-card {
          border-color: var(--its-border, rgba(186,232,255,0.55));
          box-shadow: var(--its-shadow, 0 15px 40px rgba(0,140,255,0.16));
        }
        .group:hover .its-card {
          border-color: var(--its-border-hover, rgba(120,224,255,0.85));
          box-shadow: var(--its-shadow-hover, 0 28px 70px rgba(0,160,255,0.4));
        }

        /* Gentle breathing outer glow, tinted per card */
        @keyframes its-breathe-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .its-breathe {
          box-shadow: 0 0 34px 4px var(--its-line-glow, rgba(0,200,255,0.4));
          opacity: 0.28;
          animation: its-breathe-pulse 4.5s ease-in-out infinite;
        }
        .group:hover .its-breathe {
          box-shadow: 0 0 46px 7px var(--its-line-glow-hover, rgba(0,215,255,0.6));
        }

        /* Glassmorphism nav arrows — soft blue glow, stronger on hover */
        .its-nav-btn {
          box-shadow: 0 8px 24px rgba(0,150,255,0.22), 0 0 0 1px rgba(255,255,255,0.35) inset;
          transition: box-shadow 300ms ease, transform 300ms ease, color 300ms ease;
        }
        .its-nav-btn:hover {
          box-shadow: 0 12px 34px rgba(0,170,255,0.45), 0 0 20px rgba(0,195,255,0.5), 0 0 0 1px rgba(255,255,255,0.5) inset;
        }

        @media (prefers-reduced-motion: reduce) {
          .its-glow-a, .its-glow-b, .its-particle, .its-border-line, .its-breathe {
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
