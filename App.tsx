import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import CoursePlayerPhase1 from './pages/CoursePlayerPhase1';
import CoursePlayerPhase2 from './pages/CoursePlayerPhase2';
import CoursePlayerPhase3 from './pages/CoursePlayerPhase3';
import CoursePlayerPhase4 from './pages/CoursePlayerPhase4';
import CoursePlayerPhase5 from './pages/CoursePlayerPhase5';

import Tools from './pages/Tools';
import Mentors from './pages/Mentors';
import Pricing from './pages/Pricing';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-white font-bold text-lg mb-4">FA Academy</h3>
        <p className="text-sm text-slate-400">Educación financiera de clase mundial para inversores independientes.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Plataforma</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/#catalog" className="hover:text-primary-400 transition-colors">Academy</a></li>
          <li><a href="#/mentors" className="hover:text-primary-400 transition-colors">Mentores</a></li>
          <li><a href="#/pricing" className="hover:text-primary-400 transition-colors">Precios</a></li>
          <li><a href="#/tools" className="hover:text-primary-400 transition-colors">Herramientas</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-primary-400 transition-colors">Términos</a></li>
          <li><a href="#" className="hover:text-primary-400 transition-colors">Privacidad</a></li>
          <li><a href="#" className="hover:text-primary-400 transition-colors">Cookies</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Contacto</h4>
        <p className="text-sm text-slate-400">soporte@fa-academy.com</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
      © 2024 FA Academy. Todos los derechos reservados.
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname, hash } = React.useMemo(() => window.location, []);

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-950">
          <Ticker />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/academy" element={<Home />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/academy/:id" element={<CourseDetail />} />

              {/* Public Phases */}
              <Route path="/course/phase/1" element={<CoursePlayerPhase1 />} />
              <Route path="/course/phase/2" element={<CoursePlayerPhase2 />} />

              {/* Protected Phases */}
              <Route path="/course/phase/3" element={
                <ProtectedRoute>
                  <CoursePlayerPhase3 />
                </ProtectedRoute>
              } />
              <Route path="/course/phase/4" element={
                <ProtectedRoute>
                  <CoursePlayerPhase4 />
                </ProtectedRoute>
              } />
              <Route path="/course/phase/5" element={
                <ProtectedRoute>
                  <CoursePlayerPhase5 />
                </ProtectedRoute>
              } />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;