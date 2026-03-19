import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Mentors: React.FC = () => {
  const mentors = [
    {
      role: 'Director Académico & Mentor Principal',
      name: 'Alejandro Rivera',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      bio: 'Especialista en educación financiera con más de 10 años de experiencia simplificando conceptos complejos. Ha formado a más de 5,000 estudiantes en Latinoamérica.',
      tags: ['Análisis Técnico', 'Psicología', 'Educación']
    },
    {
      role: 'Gestor de Portafolios (Execution)',
      name: 'Sarah Connor',
      image: 'https://images.unsplash.com/photo-1573496359-136d4755be60?auto=format&fit=crop&q=80&w=400',
      bio: 'Ex-trader institucional en Wall Street. Encargada de la ejecución precisa de órdenes y rebalanceo de carteras. Experta en derivados y gestión de riesgo.',
      tags: ['Gestión de Riesgo', 'Derivados', 'Ejecución']
    },
    {
      role: 'Director de Inversiones (Strategy)',
      name: 'Marcus Chen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      bio: 'CFA Charterholder. Responsable de la visión macroeconómica y la estrategia de asignación de activos del fondo. Toma las decisiones difíciles cuando el mercado tiembla.',
      tags: ['Macroeconomía', 'Value Investing', 'Estrategia']
    }
  ];

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden py-20">
      {/* Background Effects matching Home */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-400/10 text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4 border border-amber-400/20">
            Expertos en Mercados
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-white">
            Conoce a tus Mentores
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Un equipo multidisciplinario que combina teoría académica con experiencia real en los mercados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl hover:shadow-2xl hover:border-primary-900 transition-all group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold text-primary-400 uppercase tracking-wider mb-2">{mentor.role}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{mentor.name}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {mentor.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {mentor.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-slate-500 pt-6 border-t border-slate-800">
                  <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                  <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;