import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Survivors supported', value: 1480 },
  { label: 'Campaigns completed', value: 52 },
  { label: 'Volunteers onboard', value: 690 },
  { label: 'Donations raised', value: 840000 },
  { label: 'Communities reached', value: 78 }
];

function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const animation = setInterval(() => {
      setCounts((prev) =>
        prev.map((current, index) => {
          const target = stats[index].value;
          const step = Math.ceil(target / 60);
          return current < target ? Math.min(current + step, target) : target;
        })
      );
    }, 45);

    return () => clearInterval(animation);
  }, []);

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glass backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-action-cyan">Impact at a glance</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Real-time impact statistics</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">Transparent performance counters for survivors, campaigns, volunteers, donations and community outreach.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 text-center"
            >
              <p className="text-4xl font-semibold text-white">{counts[index].toLocaleString()}</p>
              <p className="mt-3 text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
