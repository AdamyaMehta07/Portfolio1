import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Target } from 'lucide-react';
import { personal, quickFacts } from '../../data/content';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../../constants/animations';

const ICONS = [MapPin, GraduationCap, Briefcase, Target];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <span className="section-eyebrow">About</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 text-ink">
            The engineer behind the code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="glass-card copper-border p-8 md:p-10">
              <p className="text-body text-muted leading-relaxed mb-6">
                {personal.summary}
              </p>
              <p className="text-body text-muted leading-relaxed">
                My work centers on the MERN stack — building secure, production-ready
                applications with an emphasis on clean architecture, authenticated
                APIs, and interfaces that feel considered rather than default. More
                recently, I&apos;ve been integrating AI directly into the products I
                build, using Groq&apos;s LLaMA models to turn raw data — resumes,
                repositories — into structured, useful output.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {quickFacts.map((fact, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={fact.label}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 hover:copper-border transition-all"
                >
                  <Icon size={20} className="text-bronze mb-4" strokeWidth={1.6} />
                  <p className="text-xs uppercase tracking-wider text-muted mb-1">
                    {fact.label}
                  </p>
                  <p className="text-ink font-medium">{fact.value}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
