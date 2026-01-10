import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Academy', path: '/#catalog' },
    { name: 'Herramientas', path: '/tools' },
    { name: 'Mentores', path: '/mentors' },
    { name: 'Precios', path: '/pricing' },
  ];

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

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 border-b border-slate-800 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(13,148,136,0.5)]">
                <GraduationCap size={20} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                FA Academy
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
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
            <Link to="/" className="bg-primary-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-primary-500 transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_25px_rgba(13,148,136,0.5)]">
              Empieza Gratis
            </Link>
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
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </button>
            ))}
            <Link to="/" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-primary-600 text-white px-5 py-3 rounded-lg font-bold text-sm">
              Empieza Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;