import { motion } from 'framer-motion';

function EmergencyPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl"
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-action-cyan/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-action-cyan">
              Emergency response
            </span>
            <h1 className="text-4xl font-semibold text-white">Secure emergency reporting and support</h1>
            <p className="max-w-2xl text-slate-300">
              Submit confidential incidents, share evidence, and request immediate assistance from ActionPeak’s emergency team. Your safety and privacy are prioritized.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">Anonymous reporting</p>
                <p className="mt-2 text-slate-400">Protect your identity with secure submission and encrypted tracking.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">WhatsApp support</p>
                <p className="mt-2 text-slate-400">Connect immediately with local responders through trusted messaging.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900/80 p-8 shadow-inner">
            <form className="space-y-5" action="/api/report" method="POST" encType="multipart/form-data">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Full Name (optional)</label>
                <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="text" name="fullName" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Incident Type</label>
                <select className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="incidentType" required>
                  <option value="">Select incident</option>
                  <option value="physical">Physical violence</option>
                  <option value="sexual">Sexual abuse</option>
                  <option value="psychological">Psychological abuse</option>
                  <option value="economic">Economic abuse</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Description</label>
                <textarea className="h-28 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="description" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Upload Evidence</label>
                <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none file:border-0 file:bg-action-purple/10 file:text-sm file:text-white" type="file" name="evidence" accept="image/*,video/*" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Location</label>
                  <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="text" name="location" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Contact Information</label>
                  <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="text" name="contactInfo" required />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Emergency Level</label>
                <select className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="severity" required>
                  <option value="">Select severity</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>
              <button type="submit" className="w-full rounded-full bg-gradient-to-r from-action-purple to-action-cyan px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                Send Emergency Report
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default EmergencyPage;
