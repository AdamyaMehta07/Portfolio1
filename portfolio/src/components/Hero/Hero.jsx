import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { personal } from '../../data/content';
import { images } from '../../assets/images';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { scrollToId } from '../../utils/helpers';
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '../../constants/animations';

export default function Hero() {
  const typed = useTypingEffect(personal.roles, { pause: 1800 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40"
    >
      <div className="container-x grid md:grid-cols-2 gap-16 md:gap-10 items-center">
        {/* LEFT */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8 copper-border"
          >
            <Sparkles size={13} className="text-amber" />
            <span className="text-xs text-muted tracking-wide">
              Open to Full Stack &amp; AI roles
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-hero-sm md:text-hero font-semibold tracking-tight text-ink mb-6"
          >
            {personal.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="h-9 mb-6">
            <span className="text-subhead copper-gradient-text font-medium">
              {typed}
            </span>
            <span className="text-subhead text-bronze animate-pulse">|</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-body text-muted max-w-lg mb-10"
          >
            {personal.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
            <button onClick={() => scrollToId('projects')} className="btn-copper">
              View Projects <ArrowUpRight size={16} />
            </button>
            <a href="/Adamya_Mehta_Resume.pdf" download className="btn-ghost">
              Download Resume
            </a>
            <button onClick={() => scrollToId('contact')} className="btn-ghost">
              Let&apos;s Talk
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-5">
            {[
              { icon: Github, href: personal.github, label: 'GitHub' },
              { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-amber hover:copper-border transition-colors"
              >
                <Icon size={17} strokeWidth={1.8} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-copper-radial blur-2xl opacity-70"
              aria-hidden="true"
            />
            <div className="relative glass-card copper-border p-3 shadow-glow rounded-[2rem] w-[280px] sm:w-[340px] md:w-[380px]">
              <img
                src={images.portrait}
                alt="Portrait of Adamya Mehta"
                className="rounded-[1.5rem] w-full h-auto object-cover"
                loading="eager"
              />
              <div
                className="absolute inset-3 rounded-[1.5rem] pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 60px 10px rgba(245,158,11,0.10)',
                }}
              />
            </div>

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="absolute -left-8 bottom-8 glass-card copper-border px-4 py-3 shadow-card hidden sm:block"
            >
              <p className="text-xs text-muted">Commits shipped</p>
              <p className="text-lg font-semibold text-ink">204+</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
