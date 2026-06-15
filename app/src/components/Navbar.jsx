import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Report', path: '/report' },
  { label: 'Emergency', path: '/emergency' },
  { label: 'Volunteer', path: '/volunteer' },
  { label: 'Donate', path: '/donate' },
  { label: 'Dashboard', path: '/dashboard' }
];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-gradient-to-br from-action-purple to-action-cyan text-lg font-bold shadow-glass">
            A
          </span>
          <div>
            <p className="font-semibold tracking-[0.18em] text-slate-300">ActionPeak</p>
            <p className="text-xs uppercase text-slate-500">GBV Protection Network</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive ? 'bg-action-purple/15 text-white' : 'text-slate-400 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/report"
          className="rounded-full bg-gradient-to-r from-action-purple to-action-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition duration-300 hover:scale-[1.02]"
        >
          Report Now
        </Link>
      </div>
    </motion.header>
  );
}

export default Navbar;
