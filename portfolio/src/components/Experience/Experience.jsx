import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../../data/content';
import { fadeUp, fadeLeft, staggerContainer, viewportOnce } from '../../constants/animations';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <span className="section-eyebrow">Experience</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 text-ink">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative pl-8 md:pl-12"
        >
          <div
            className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-bronze via-copper/60 to-transparent"
            aria-hidden="true"
          />

          {experience.map((job) => (
            <motion.div
              key={job.company}
              variants={fadeLeft}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-8 md:-left-12 top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-bronze flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber" />
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card p-7 md:p-8 hover:copper-border transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-ink flex items-center gap-2">
                      <Briefcase size={16} className="text-bronze" />
                      {job.role}
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-amber glass px-3 py-1.5 rounded-full">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="text-sm text-muted flex gap-2.5 leading-relaxed">
                      <span className="text-bronze mt-1 shrink-0">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
