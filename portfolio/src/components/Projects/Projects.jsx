import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import ProjectCard from './ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';
import { fadeUp, staggerContainer, viewportOnce } from '../../constants/animations';

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 max-w-2xl"
        >
          <span className="section-eyebrow">Selected Work</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 text-ink">
            Projects built end-to-end
          </h2>
          <p className="text-body text-muted mt-5">
            Three production applications spanning AI integration, secure auth, and
            client-side tooling — each shipped, deployed, and live.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setActive}
            />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
