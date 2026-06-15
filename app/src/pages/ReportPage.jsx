import { motion } from 'framer-motion';

function ReportPage() {
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
              Case reporting
            </span>
            <h1 className="text-4xl font-semibold text-white">Professional case tracking and secure updates</h1>
            <p className="max-w-2xl text-slate-300">
              Submit GBV reports, attach evidence, and monitor status updates with transparent case progress and secure communication.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">Status tracking</p>
                <p className="mt-2 text-slate-400">Follow case updates from pending to investigation and resolution.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">Secure intake</p>
                <p className="mt-2 text-slate-400">Encrypted forms and privacy-first case documentation.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900/80 p-8 shadow-inner">
            <form className="space-y-5" action="/api/report" method="POST" encType="multipart/form-data">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Report Title</label>
                <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="text" name="title" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Case Description</label>
                <textarea className="h-28 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="details" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Evidence Upload</label>
                <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none file:border-0 file:bg-action-cyan/10 file:text-sm file:text-white" type="file" name="evidence" accept="image/*,video/*" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Preferred Contact</label>
                  <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="text" name="contact" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Case Severity</label>
                  <select className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="severity" required>
                    <option value="">Select severity</option>
                    <option value="pending">Pending</option>
                    <option value="investigation">Under Investigation</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full rounded-full bg-gradient-to-r from-action-purple to-action-cyan px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                Submit Case Report
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default ReportPage;
