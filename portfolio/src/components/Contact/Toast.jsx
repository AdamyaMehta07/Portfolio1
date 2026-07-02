import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Toast({ status, message, onClose }) {
  return (
    <AnimatePresence>
      {status && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] glass-card copper-border px-6 py-4 flex items-center gap-3 shadow-glow"
        >
          {status === 'success' ? (
            <CheckCircle2 size={20} className="text-amber shrink-0" />
          ) : (
            <XCircle size={20} className="text-copper shrink-0" />
          )}
          <p className="text-sm text-ink">{message}</p>
          <button
            onClick={onClose}
            className="text-muted hover:text-ink text-xs ml-2"
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
