import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Academy', path: '/#catalog' },
    { name: 'Herramientas', path: '/tools' },
    { name: 'Mentores', path: '/mentors' },
    { name: 'Precios', path: '/pricing' },
  ];

  const visibleLinks = [...navLinks];
  if (user?.role === 'admin') {
    visibleLinks.push({ name: 'Panel Admin', path: '/admin' });
  }

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname !== route) {
        navigate(path);
        // Timeout to allow navigation before scrolling
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 border-b border-slate-800 shadow-lg backdrop-blur-md">
      {/* Banner de simulación local */}
      {isAuthenticated && useAuth().isMock && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 text-amber-400 py-1 text-center text-xs">
          ⚠️ Modo Simulación (LocalStorage). Configura tu Google Sheets en .env para persistencia real.
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center shadow-[0_0_15px_rgba(13,148,136,0.5)] rounded-lg overflow-hidden bg-slate-900/50">
                <img src="/logo.png" alt="FA Academy Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                FA Academy
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {visibleLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-medium transition-all hover:scale-105 ${
                  location.pathname === link.path.split('#')[0] && !link.path.includes('#')
                    ? 'text-primary-400' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            {isAuthenticated ? (
              <div className="flex items-center gap-4 pl-4 border-l border-slate-800">
                <div className="flex flex-col text-right">
                  <span className="text-sm font-medium text-white flex items-center gap-1.5 justify-end">
                    {user?.role === 'admin' && <Shield size={14} className="text-teal-400" />}
                    {user?.username}
                  </span>
                  <span className="text-[10px] text-slate-400 capitalize">{user?.role === 'admin' ? 'Administrador' : 'Estudiante'}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800 transition-all"
                  title="Cerrar sesión"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                  Iniciar Sesión
                </Link>
                <Link to="/pricing" className="bg-primary-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-primary-500 transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_25px_rgba(13,148,136,0.5)]">
                  Empieza Gratis
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {visibleLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </button>
            ))}
            
            {isAuthenticated ? (
              <div className="pt-4 mt-4 border-t border-slate-800 px-3">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-white flex items-center gap-1.5">
                      {user?.role === 'admin' && <Shield size={14} className="text-teal-400" />}
                      {user?.username}
                    </span>
                    <span className="text-xs text-slate-400 capitalize">{user?.role === 'admin' ? 'Administrador' : 'Estudiante'}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-red-950/30 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-900/20 transition-all"
                  >
                    <LogOut size={16} /> Salir
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-4 mt-4 border-t border-slate-800 space-y-3 px-3">
                <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center py-2 text-slate-400 hover:text-white font-medium text-base">
                  Iniciar Sesión
                </Link>
                <Link to="/pricing" onClick={() => setIsOpen(false)} className="block w-full text-center bg-primary-600 text-white py-3 rounded-lg font-bold text-sm">
                  Empieza Gratis
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;