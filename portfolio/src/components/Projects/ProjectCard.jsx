import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { images } from '../../assets/images';
import { fadeUp } from '../../constants/animations';

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.06}
      layoutId={`project-card-${project.id}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group glass-card overflow-hidden cursor-pointer hover:copper-border hover:shadow-glow"
      onClick={() => onOpen(project)}
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <motion.img
          src={images[project.images[0]]}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full glass text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold text-ink group-hover:text-amber transition-colors">
            {project.name}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-muted group-hover:text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
          />
        </div>
        <p className="text-sm text-muted leading-relaxed mb-5">{project.tagline}</p>
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <Github size={13} /> Code
          </span>
          <span className="flex items-center gap-1.5">
            <ArrowUpRight size={13} /> Live Demo
          </span>
        </div>
      </div>
    </motion.div>
  );
}
