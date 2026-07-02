import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { scrollToId } from '../../utils/helpers';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const { direction, scrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: direction === 'down' && !mobileOpen ? -120 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-0"
    >
      <nav
        className={`container-x flex items-center justify-between rounded-full px-5 md:px-7 py-3 md:py-3.5 transition-all duration-300 ${
          scrolled ? 'glass shadow-card' : 'bg-transparent border border-transparent'
        }`}
      >
        <button
          onClick={() => handleNav('hero')}
          className="text-lg font-semibold tracking-tight text-ink"
        >
          Adamya<span className="copper-gradient-text">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="underline-anim text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Adamya_Mehta_Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-sm text-ink border border-hairline rounded-full px-5 py-2.5 hover:border-bronze/50 transition-colors"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-3"
          >
            <div className="glass rounded-3xl mx-4 p-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-left text-base text-ink"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/Adamya_Mehta_Resume.pdf"
                download
                className="btn-copper w-full mt-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
