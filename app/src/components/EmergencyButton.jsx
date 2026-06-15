import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function EmergencyButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/95 px-4 py-4 shadow-glass backdrop-blur-xl"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-action-pink to-action-cyan text-white shadow-lg">
        SOS
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Emergency</p>
        <Link
          to="/emergency"
          className="text-sm font-semibold text-white hover:text-action-cyan"
        >
          Secure help now
        </Link>
      </div>
    </motion.div>
  );
}

export default EmergencyButton;
