import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import EmergencyButton from './components/EmergencyButton';
import ChatWidget from './components/ChatWidget';
import HomePage from './pages/HomePage';
import EmergencyPage from './pages/EmergencyPage';
import VolunteerPage from './pages/VolunteerPage';
import DonatePage from './pages/DonatePage';
import ReportPage from './pages/ReportPage';
import DashboardPage from './pages/DashboardPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_25%),linear-gradient(180deg,#050816_0%,#111827_100%)] text-slate-100">
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>

        <Footer />
        <EmergencyButton />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
