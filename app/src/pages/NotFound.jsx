import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="container mx-auto px-6 py-24 text-center text-white">
      <h1 className="text-5xl font-semibold">Page not found</h1>
      <p className="mt-4 text-slate-400">The page you are looking for is unavailable or has moved.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-action-purple px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-action-cyan">
        Return to home
      </Link>
    </main>
  );
}

export default NotFound;
