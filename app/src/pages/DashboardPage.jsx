import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const donationsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Donations (USD)',
      data: [9200, 12000, 14000, 16500, 18000, 22000],
      backgroundColor: 'rgba(79, 209, 197, 0.75)'
    }
  ]
};

const caseData = {
  labels: ['Pending', 'Investigation', 'Resolved', 'Emergency'],
  datasets: [
    {
      data: [28, 15, 44, 13],
      backgroundColor: ['#7c3aed', '#0ea5e9', '#22c55e', '#f472b6']
    }
  ]
};

function DashboardPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-action-cyan">Admin dashboard</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Organizational analytics and case oversight</h1>
            </div>
            <button className="rounded-full bg-gradient-to-r from-action-purple to-action-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg">
              Export reports
            </button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Active cases', value: '102' },
              { title: 'Volunteers active', value: '69' },
              { title: 'Monthly donors', value: '240' },
              { title: 'Campaigns live', value: '8' }
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glass">
                <p className="text-sm text-slate-400">{item.title}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glass">
            <p className="text-sm text-slate-400">Notification center</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="font-semibold text-white">Emergency alert</p>
                <p className="mt-2 text-sm text-slate-400">New high-priority case submitted from Port Loko region.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="font-semibold text-white">Volunteer request</p>
                <p className="mt-2 text-sm text-slate-400">A new volunteer application has been received for youth training support.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glass">
            <p className="text-sm text-slate-400">Donation trend</p>
            <Bar data={donationsData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glass">
            <p className="text-sm text-slate-400">Case distribution</p>
            <Doughnut data={caseData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default DashboardPage;
