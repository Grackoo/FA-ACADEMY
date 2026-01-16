import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User, ArrowRight, AlertCircle } from 'lucide-react';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Get the page the user was trying to access, or default to home/academy
    const from = location.state?.from?.pathname || '/academy';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(username, password)) {
            navigate(from, { replace: true });
        } else {
            setError('Credenciales incorrectas. Intenta de nuevo.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary-900/30 text-primary-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                            <Lock size={32} />
                        </div>
                        <h1 className="text-2xl font-display font-bold text-white mb-2">Acceso Restringido</h1>
                        <p className="text-slate-400 text-sm">
                            Ingresa tus credenciales para acceder a este contenido.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-900/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
                                <AlertCircle size={16} />
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-slate-300 text-sm font-medium ml-1">Usuario</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Tu usuario"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-slate-300 text-sm font-medium ml-1">Contraseña</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2"
                        >
                            Ingresar
                            <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
                <div className="bg-slate-950 p-4 border-t border-slate-800 text-center">
                    <p className="text-xs text-slate-500">
                        ¿No tienes acceso? <a href="https://wa.me/527711960057" target="_blank" rel="noreferrer" className="text-primary-400 hover:text-primary-300">Contacta a soporte</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
