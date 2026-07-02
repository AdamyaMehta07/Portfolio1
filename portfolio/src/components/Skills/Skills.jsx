import { motion } from 'framer-motion';
import { skills } from '../../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../../constants/animations';

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <span className="section-eyebrow">Skills</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 text-ink">
            Tools I reach for
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={gi * 0.05}
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-bronze mb-5">
                {group.category}
              </h3>
              <motion.div
                variants={staggerContainer(0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-wrap gap-3"
              >
                {group.items.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    whileHover={{ y: -6, rotate: -1 }}
                    className="glass-card px-5 py-3 text-sm text-ink/90 cursor-default hover:copper-border hover:shadow-glow-sm transition-shadow"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
