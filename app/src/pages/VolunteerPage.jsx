import { motion } from 'framer-motion';

function VolunteerPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl"
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-action-purple/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-action-purple">
              Volunteer with us
            </span>
            <h1 className="text-4xl font-semibold text-white">Join ActionPeak’s volunteer force</h1>
            <p className="max-w-2xl text-slate-300">
              Share your skills, support survivors, and help build safer communities with structured onboarding and regional deployment.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">Skill-based matching</p>
                <p className="mt-2 text-slate-400">Connect your experience to counseling, advocacy, and outreach roles.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">Approval workflow</p>
                <p className="mt-2 text-slate-400">Our team reviews applications and provides certificates for approved volunteers.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900/80 p-8 shadow-inner">
            <form className="space-y-5" action="/api/volunteer" method="POST" encType="multipart/form-data">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Full Name</label>
                <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="text" name="fullName" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                  <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="email" name="email" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Phone</label>
                  <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="tel" name="phone" required />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Region</label>
                <select className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="region" required>
                  <option value="">Select region</option>
                  <option value="western">Western Area</option>
                  <option value="east">Eastern Province</option>
                  <option value="north">Northern Province</option>
                  <option value="south">Southern Province</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Skills</label>
                <textarea className="h-24 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="skills" placeholder="Counseling, advocacy, training, admin, media" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Availability</label>
                <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="text" name="availability" required placeholder="Weekdays, evenings, weekends" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">CV Upload</label>
                <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none file:border-0 file:bg-action-purple/10 file:text-sm file:text-white" type="file" name="cv" accept="application/pdf" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Motivation Letter</label>
                <textarea className="h-24 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="motivation" required />
              </div>
              <button type="submit" className="w-full rounded-full bg-gradient-to-r from-action-purple to-action-cyan px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                Submit Volunteer Request
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default VolunteerPage;
