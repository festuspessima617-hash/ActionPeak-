function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-slate-400">
      <div className="container mx-auto space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-white">ActionPeak</h3>
            <p className="mt-3 max-w-md leading-7 text-slate-400">
              A Sierra Leone NGO platform delivering survivor support, community outreach, and secure emergency response.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Case reporting</li>
              <li>Volunteer portal</li>
              <li>Donation platform</li>
              <li>Support resources</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <p className="mt-4 text-sm text-slate-400">info@actionpeak.org</p>
            <p className="text-sm text-slate-400">+232 76 000 000</p>
            <p className="text-sm text-slate-400">Freetown, Sierra Leone</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 ActionPeak. All rights reserved.</p>
          <p>Designed for secure GBV support and nonprofit impact.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
