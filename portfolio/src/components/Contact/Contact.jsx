import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin } from 'lucide-react';
import { personal } from '../../data/content';
import { EMAILJS_CONFIG } from '../../constants/emailjs';
import Toast from './Toast';
import { fadeUp, fadeLeft, fadeRight, viewportOnce } from '../../constants/animations';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      if (
        EMAILJS_CONFIG.SERVICE_ID.startsWith('YOUR_') ||
        EMAILJS_CONFIG.TEMPLATE_ID.startsWith('YOUR_') ||
        EMAILJS_CONFIG.PUBLIC_KEY.startsWith('YOUR_')
      ) {
        throw new Error('EmailJS is not configured yet.');
      }

      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setStatus('success');
      setToast({ type: 'success', message: 'Message sent — I\u2019ll reply soon.' });
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setToast({
        type: 'error',
        message:
          'Could not send right now — email me directly at ' + personal.email,
      });
    } finally {
      setTimeout(() => setStatus(null), 2500);
    }
  };

  const fields = [
    { name: 'name', label: 'Your Name', type: 'text' },
    { name: 'email', label: 'Your Email', type: 'email' },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container-x grid md:grid-cols-2 gap-14 md:gap-10">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="section-eyebrow">Contact</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 text-ink mb-6">
            Let&apos;s build something
          </h2>
          <p className="text-body text-muted max-w-md mb-10">
            Have a role, a project, or just want to talk engineering? My inbox is
            open.
          </p>

          <div className="space-y-5">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:copper-border transition-colors shrink-0">
                <Mail size={17} className="text-bronze" />
              </div>
              <span className="text-ink/90 group-hover:text-amber transition-colors text-sm">
                {personal.email}
              </span>
            </a>
            <a href={`tel:${personal.phone}`} className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:copper-border transition-colors shrink-0">
                <Phone size={17} className="text-bronze" />
              </div>
              <span className="text-ink/90 group-hover:text-amber transition-colors text-sm">
                {personal.phone}
              </span>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center shrink-0">
                <MapPin size={17} className="text-bronze" />
              </div>
              <span className="text-ink/90 text-sm">{personal.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-amber hover:copper-border transition-colors"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-amber hover:copper-border transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card copper-border p-8 md:p-9 space-y-5"
          >
            {fields.map((field) => (
              <div key={field.name} className="relative">
                <label
                  htmlFor={field.name}
                  className="block text-xs uppercase tracking-wider text-muted mb-2"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={handleChange}
                  className="w-full bg-surface/60 border border-hairline rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-muted/50 focus:border-bronze/60 outline-none transition-colors"
                  placeholder={field.type === 'email' ? 'you@email.com' : 'Your Name'}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-surface/60 border border-hairline rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-muted/50 focus:border-bronze/60 outline-none transition-colors resize-none"
                placeholder="Tell me a bit about the opportunity..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="btn-copper w-full disabled:opacity-70"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <Toast
        status={toast?.type}
        message={toast?.message}
        onClose={() => setToast(null)}
      />
    </section>
  );
}
