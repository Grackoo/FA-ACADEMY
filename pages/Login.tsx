import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User, ArrowRight, AlertCircle, Loader2, Sparkles } from 'lucide-react';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tokenLoading, setTokenLoading] = useState(false);
    
    const { login, loginWithToken } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirección por defecto
    const from = location.state?.from?.pathname || '/academy';

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token');
        if (token) {
            const verifyToken = async () => {
                setTokenLoading(true);
                setError('');
                // Un pequeño retraso para mejorar el efecto visual del spinner premium
                await new Promise((resolve) => setTimeout(resolve, 1500));
                const res = await loginWithToken(token);
                setTokenLoading(false);
                if (res.success) {
                    navigate(from, { replace: true });
                } else {
                    setError(res.error || 'El Super Link es inválido o ha expirado.');
                }
            };
            verifyToken();
        }
    }, [location.search, navigate, from, loginWithToken]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        const res = await login(username, password);
        setIsSubmitting(false);
        if (res.success) {
            navigate(from, { replace: true });
        } else {
            setError(res.error || 'Credenciales incorrectas. Intenta de nuevo.');
        }
    };

    if (tokenLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                {/* Efectos de fondo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-[80px]"></div>
                <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-primary-500/5 rounded-full blur-[100px]"></div>

                <div className="relative z-10 text-center max-w-sm w-full bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
                    <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-teal-500/20 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 border-t-2 border-teal-400 rounded-full animate-spin"></div>
                        <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-teal-400 shadow-inner">
                            <Sparkles size={24} className="animate-pulse" />
                        </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-2 tracking-wide font-display">Iniciando sesión con Super Link</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Espera un momento mientras validamos tus credenciales y configuramos tu espacio en FA Academy...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Luces de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px]"></div>

            <div className="relative z-10 bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden backdrop-blur-md">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 overflow-hidden bg-slate-900/50 shadow-[0_0_20px_rgba(13,148,136,0.3)] border border-slate-800">
                            <img src="/logo.png" alt="FA Academy Logo" className="w-full h-full object-contain" />
                        </div>
                        <h1 className="text-2xl font-display font-bold text-white mb-2">Acceso Restringido</h1>
                        <p className="text-slate-400 text-sm">
                            Ingresa tus credenciales para acceder a la academia de inversiones.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="bg-red-950/30 border border-red-500/30 text-red-200 px-4 py-3 rounded-xl flex items-start gap-2.5 text-sm animate-shake">
                                <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                                <span>{error}</span>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-slate-300 text-sm font-medium ml-1">Usuario o Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="ej: carlos92 o carlos@email.com"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-slate-300 text-sm font-medium ml-1">Contraseña</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Autenticando...
                                </>
                            ) : (
                                <>
                                    Ingresar
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
                <div className="bg-slate-950/60 p-4 border-t border-slate-800/80 text-center">
                    <p className="text-xs text-slate-500">
                        ¿No tienes acceso? <a href="https://wa.me/527711960057" target="_blank" rel="noreferrer" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">Contacta a soporte</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

