import { useState } from 'react';
import { motion } from 'framer-motion';

const answers = [
  'If you are in danger, call the nearest hotline immediately and use the emergency button.',
  'Our legal team can guide survivors through reporting, confidential support, and safety planning.',
  'We provide safe shelter referrals, counseling, and community resources across Sierra Leone.',
  'Want to volunteer? Submit your profile and we will connect you with local campaigns.',
  'Need donation receipts or campaign support? Our team can issue receipts and campaign summaries.'
];

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('How can ActionPeak support you today?');

  const handleSend = () => {
    if (!message.trim()) return;
    const next = answers[Math.floor(Math.random() * answers.length)];
    setResponse(next);
    setMessage('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-6 left-6 z-50 w-[320px] rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-glass backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">ActionPeak Assistant</p>
          <p className="text-xs text-slate-400">Private GBV support guidance</p>
        </div>
        <button
          type="button"
          className="rounded-full bg-slate-800 px-3 py-2 text-xs text-white hover:bg-slate-700"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'Close' : 'Open'}
        </button>
      </div>

      {open && (
        <div className="mt-4 space-y-4">
          <div className="rounded-3xl bg-slate-900/90 p-4 text-sm leading-6 text-slate-200 shadow-inner">
            {response}
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.28em] text-slate-400">Ask the assistant</label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a question..."
              className="w-full rounded-3xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-action-cyan"
            />
            <button
              type="button"
              onClick={handleSend}
              className="w-full rounded-3xl bg-gradient-to-r from-action-purple to-action-cyan px-4 py-3 text-sm font-semibold text-white shadow-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default ChatWidget;
