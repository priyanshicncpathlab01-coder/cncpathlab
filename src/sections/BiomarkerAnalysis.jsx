import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Dna, Waves, Layers, Image as ImageIcon, BarChart, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import immuneImg from '../assets/immune.webp';
import bioanalysisImg from '../assets/bioanalysis.webp';
import genomicsImg from '../assets/genomics.webp';
import tissueImg from '../assets/tissue.webp';
import cytokineImg from '../assets/cytokine.webp';
import biomarker from '../assets/apoadvantagetwo.webp';

const analyses = [
  { title: 'Immune Monitoring & Flow Cytometry', icon: Layers, image: immuneImg,path:'/immune-monitoring'},
  { title: 'Bioanalysis', icon: BarChart, image: bioanalysisImg,path:'/bioanalytical-testing'},
  { title: 'Genomics', icon: Dna, image: genomicsImg ,path:'/whole-genome-sequencing'},
  { title: 'Tissue Imaging & Analysis', icon: ImageIcon, image: tissueImg, path: '/tissue-imaging-analysis' },
  { title: 'Cytokine Profiling & Proteomics', icon: Waves, image: cytokineImg, path: '/cytokine-profiling' },
  { title: 'Target & Biomarker Validation', icon: CheckCircle2, image: biomarker, path: '/target-biomarker-validation' },
];

const BiomarkerAnalysis = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    if (!path) return;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section id="solutions" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          title="Comprehensive Biomarker & Sample Analysis"
          subtitle="Our state-of-the-art facilities and expert scientists deliver high-quality data across a broad range of technology platforms."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {analyses.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                onClick={item.path ? () => handleCardClick(item.path) : undefined}
                role={item.path ? 'link' : undefined}
                tabIndex={item.path ? 0 : undefined}
                onKeyDown={item.path ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCardClick(item.path); } } : undefined}
                className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer"
              >
                {/* Background image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                />

                {/* Default dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-900/40 to-transparent transition-opacity duration-300" />

                {/* Hover teal overlay */}
                <div className="absolute inset-0 bg-primary-900/65 opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                  <div className="w-9 h-9 rounded-lg bg-teal-400/25 border border-teal-400/40 text-teal-300 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug mb-3">{item.title}</h3>
                  {/* Slide-up CTA on hover */}
                  <div className="flex items-center gap-2 text-teal-300 text-sm font-semibold translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore Capability <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BiomarkerAnalysis;
