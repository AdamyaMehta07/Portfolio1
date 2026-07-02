import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../../constants/animations';

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <span className="section-eyebrow">Education</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 text-ink">
            Academic background
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass-card p-8 hover:copper-border transition-all"
            >
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center mb-6">
                <GraduationCap size={20} className="text-bronze" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-1">{edu.degree}</h3>
              <p className="text-sm text-muted mb-4">
                {edu.school} · {edu.location}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-hairline">
                <span className="text-sm text-amber">{edu.detail}</span>
                <span className="text-xs text-muted">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
