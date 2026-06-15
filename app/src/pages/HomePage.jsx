import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StatsSection from '../components/StatsSection';

function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pt-10 pb-20 md:pt-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[400px] bg-hero-gradient opacity-75 blur-3xl"></div>
        <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-action-cyan backdrop-blur-sm">
              Sierra Leone | GBV Action
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Together We Can End <span className="text-action-purple">Gender-Based Violence</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Empowering communities, protecting survivors, and creating equality across Sierra Leone through confidential reporting, emergency response, and trusted support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/report"
                className="rounded-full bg-gradient-to-r from-action-purple to-action-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-action-purple/20 transition hover:scale-[1.02]"
              >
                Report a Case
              </Link>
              <Link
                to="/volunteer"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-action-cyan hover:text-action-cyan"
              >
                Become a Volunteer
              </Link>
              <Link
                to="/donate"
                className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Donate Now
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center">
                <p className="text-3xl font-semibold text-action-cyan">24/7</p>
                <p className="text-sm text-slate-400">Emergency Support</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center">
                <p className="text-3xl font-semibold text-action-purple">100+</p>
                <p className="text-sm text-slate-400">Partner Networks</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center">
                <p className="text-3xl font-semibold text-action-cyan">4.9/5</p>
                <p className="text-sm text-slate-400">Community Trust</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-10 top-12 h-32 w-32 rounded-full bg-action-cyan/10 blur-3xl"></div>
            <div className="pointer-events-none absolute right-0 top-24 h-24 w-24 rounded-full bg-action-purple/20 blur-3xl"></div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-glass backdrop-blur-xl">
              <div className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(99,67,235,0.18),transparent_40%)] p-8">
                <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Survivor support portal</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Confidential help in minutes</h2>
                  <p className="mt-4 text-slate-300">Book counseling, request legal aid, and connect securely with our dedicated support team.</p>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-3xl bg-slate-950/90 p-4 text-sm text-slate-200">
                      <p className="font-semibold text-white">Private appointments</p>
                      <p className="mt-2 text-slate-400">Schedule safe-house referrals and trauma-informed counseling.</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/90 p-4 text-sm text-slate-200">
                      <p className="font-semibold text-white">Legal aid access</p>
                      <p className="mt-2 text-slate-400">Receive guidance through case reporting and justice pathways.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-glass backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-action-cyan">Community outreach</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Empowering youth, families and leaders</h2>
            <p className="mt-4 text-slate-300">
              Our campaigns mobilize schools, communities and local partners to create safe environments and nurture gender equality for the next generation.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">Awareness workshops</p>
                <p className="mt-2 text-slate-400">Interactive training across regional hubs and schools.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">Safe spaces</p>
                <p className="mt-2 text-slate-400">Access to safe-house referrals, legal resources, and trusted counselors.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-r from-action-purple/25 to-action-cyan/15 p-8 transition hover:-translate-y-1 hover:shadow-glass">
              <h3 className="text-xl font-semibold text-white">Case reporting</h3>
              <p className="mt-3 text-slate-300">Secure, anonymous reporting with evidence upload, severity levels, and confidential tracking.</p>
            </div>
            <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-r from-action-cyan/20 to-action-purple/10 p-8 transition hover:-translate-y-1 hover:shadow-glass">
              <h3 className="text-xl font-semibold text-white">Donation system</h3>
              <p className="mt-3 text-slate-300">Multiple payment methods, campaign goals, receipts and donor analytics for trusted giving.</p>
            </div>
            <div className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 transition hover:-translate-y-1 hover:shadow-glass">
              <h3 className="text-xl font-semibold text-white">Volunteer network</h3>
              <p className="mt-3 text-slate-300">Professional volunteer onboarding, profile management, and region-based deployment.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
