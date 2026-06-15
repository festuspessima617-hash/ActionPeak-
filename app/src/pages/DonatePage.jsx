import { motion } from 'framer-motion';

function DonatePage() {
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
            <span className="inline-flex items-center gap-2 rounded-full bg-action-cyan/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-action-cyan">
              Donation platform
            </span>
            <h1 className="text-4xl font-semibold text-white">Support survivor care and prevention campaigns</h1>
            <p className="max-w-2xl text-slate-300">
              Choose a sustainable giving option with trusted payment methods, campaign funding and impact tracking for every contribution.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">Recurring donations</p>
                <p className="mt-2 text-slate-400">Set up monthly support packages for survivors and education programs.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-white">Multiple gateways</p>
                <p className="mt-2 text-slate-400">PayPal, Stripe, Visa/MasterCard and local mobile money supported.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900/80 p-8 shadow-inner">
            <form className="space-y-5" action="/api/donate" method="POST">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Donation Amount</label>
                <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="number" name="amount" min="5" placeholder="USD 50" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Payment Method</label>
                <select className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="method" required>
                  <option value="">Select payment option</option>
                  <option value="paypal">PayPal</option>
                  <option value="stripe">Stripe</option>
                  <option value="visa">Visa / MasterCard</option>
                  <option value="orange-money">Orange Money</option>
                  <option value="afrimoney">Afrimoney</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Campaign</label>
                <select className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" name="campaign">
                  <option value="general">General support</option>
                  <option value="education">Education & awareness</option>
                  <option value="legal-aid">Legal aid</option>
                  <option value="youth-programs">Youth empowerment</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Donor Email</label>
                <input className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-action-cyan" type="email" name="email" placeholder="name@example.com" required />
              </div>
              <button type="submit" className="w-full rounded-full bg-gradient-to-r from-action-purple to-action-cyan px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                Give a gift today
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default DonatePage;
