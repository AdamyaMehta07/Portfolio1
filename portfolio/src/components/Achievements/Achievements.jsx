import { motion } from 'framer-motion';
import { achievements } from '../../data/content';
import { useCountUp } from '../../hooks/useCountUp';
import { fadeUp, staggerContainer, viewportOnce } from '../../constants/animations';

function StatCard({ item }) {
  const { ref, value } = useCountUp(item.value, 1800);
  const display = Number.isInteger(item.value)
    ? Math.round(value)
    : value.toFixed(1);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="glass-card p-8 text-center hover:copper-border transition-all"
    >
      <p className="text-4xl md:text-5xl font-semibold copper-gradient-text mb-2">
        {display}
        {item.suffix}
      </p>
      <p className="text-sm text-muted">{item.label}</p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 md:py-36">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <span className="section-eyebrow">By The Numbers</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 text-ink">
            Track record
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {achievements.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
