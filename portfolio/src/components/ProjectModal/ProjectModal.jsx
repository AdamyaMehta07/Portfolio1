import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ArrowUpRight, Clock, UserRound } from 'lucide-react';
import { images } from '../../assets/images';

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h4 className="text-xs uppercase tracking-[0.2em] text-bronze mb-3">{title}</h4>
      {children}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = project ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-start md:items-center justify-center p-0 md:p-6"
        >
          <motion.div
            className="absolute inset-0 bg-bg/85 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            layoutId={`project-card-${project.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative glass-card copper-border w-full md:max-w-4xl max-h-[92vh] overflow-y-auto rounded-none md:rounded-[1.75rem]"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="sticky top-4 float-right mr-4 md:mr-6 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-ink hover:text-amber"
            >
              <X size={18} />
            </button>

            <div className="p-6 md:p-10 pt-16 md:pt-16">
              <div className="mb-8">
                <h3 className="text-2xl md:text-4xl font-semibold text-ink mb-2">
                  {project.name}
                </h3>
                <p className="text-muted text-body">{project.tagline}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {project.metrics.map((m) => (
                  <div key={m.label} className="glass-card p-4 text-center">
                    <p className="text-2xl font-semibold copper-gradient-text">
                      {m.value}
                    </p>
                    <p className="text-xs text-muted mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {project.images.map((img) => (
                  <div
                    key={img}
                    className="rounded-xl overflow-hidden copper-border"
                  >
                    <img
                      src={images[img]}
                      alt={`${project.name} interface`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-x-12">
                <div>
                  <Section title="Overview">
                    <p className="text-sm text-muted leading-relaxed">{project.overview}</p>
                  </Section>
                  <Section title="Problem">
                    <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
                  </Section>
                  <Section title="Solution">
                    <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
                  </Section>
                  <Section title="Architecture">
                    <p className="text-sm text-muted leading-relaxed">{project.architecture}</p>
                  </Section>
                </div>

                <div>
                  <Section title="Key Features">
                    <ul className="space-y-2">
                      {project.features.map((f) => (
                        <li key={f} className="text-sm text-muted flex gap-2.5">
                          <span className="text-bronze mt-1">—</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Engineering Decisions">
                    <ul className="space-y-2">
                      {project.engineeringDecisions.map((f) => (
                        <li key={f} className="text-sm text-muted flex gap-2.5">
                          <span className="text-bronze mt-1">—</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Challenges">
                    <p className="text-sm text-muted leading-relaxed">{project.challenges}</p>
                  </Section>
                </div>
              </div>

              <Section title="Tech Stack">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full glass text-ink/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Section>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-8 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <UserRound size={14} /> {project.role}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} /> {project.timeline}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-copper"
                >
                  Live Demo <ArrowUpRight size={16} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <Github size={16} /> View Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
