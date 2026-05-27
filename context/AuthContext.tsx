import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { config } from '../config';

export interface User {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'student';
    allowed_phases: string[];
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
    isMock: boolean;
    login: (username: string, pass: string) => Promise<{ success: boolean; error?: string }>;
    loginWithToken: (token: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    updateProgress: (phase: number, lessonIndex: number, totalLessons: number) => Promise<void>;
    submitTestResult: (phase: number, score: number, total: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper para hashing en el Mock
async function sha256(message: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const isMock = config.isMockMode;

    // Inicializar base de datos de simulación si estamos en modo mock
    useEffect(() => {
        if (isMock) {
            const initMockDb = async () => {
                if (!localStorage.getItem('fa_mock_users')) {
                    const adminHash = await sha256('fa-academy-2026');
                    const studentHash = await sha256('fa-academy-2026');
                    const defaultUsers = [
                        {
                            id: 'USR_ADMIN',
                            username: 'admin',
                            email: 'admin@fa-academy.com',
                            password_hash: adminHash,
                            role: 'admin',
                            allowed_phases: ['1', '2', '3', '4', '5'],
                            super_link_token: '',
                            token_expires: '',
                            created_at: new Date().toISOString()
                        },
                        {
                            id: 'USR_TEST',
                            username: 'alumno1',
                            email: 'alumno1@gmail.com',
                            password_hash: studentHash,
                            role: 'student',
                            allowed_phases: ['1', '2', '3'],
                            super_link_token: 'SL_TEST1234',
                            token_expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
                            created_at: new Date().toISOString()
                        }
                    ];
                    localStorage.setItem('fa_mock_users', JSON.stringify(defaultUsers));
                }
                if (!localStorage.getItem('fa_mock_progress')) {
                    localStorage.setItem('fa_mock_progress', JSON.stringify([]));
                }
                if (!localStorage.getItem('fa_mock_test_results')) {
                    localStorage.setItem('fa_mock_test_results', JSON.stringify([]));
                }
            };
            initMockDb();
        }

        // Recuperar sesión persistida
        const cachedUser = localStorage.getItem('fa_academy_user');
        const cachedAuth = localStorage.getItem('fa_academy_auth');
        if (cachedUser && cachedAuth === 'true') {
            setUser(JSON.parse(cachedUser));
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, [isMock]);

    const login = async (username: string, pass: string): Promise<{ success: boolean; error?: string }> => {
        try {
            if (isMock) {
                const users = JSON.parse(localStorage.getItem('fa_mock_users') || '[]');
                const passHash = await sha256(pass);
                const found = users.find(
                    (u: any) =>
                        (u.username.toLowerCase() === username.toLowerCase() ||
                            u.email.toLowerCase() === username.toLowerCase()) &&
                        u.password_hash === passHash
                );

                if (found) {
                    const loggedUser: User = {
                        id: found.id,
                        username: found.username,
                        email: found.email,
                        role: found.role,
                        allowed_phases: found.allowed_phases
                    };
                    setUser(loggedUser);
                    setIsAuthenticated(true);
                    localStorage.setItem('fa_academy_user', JSON.stringify(loggedUser));
                    localStorage.setItem('fa_academy_auth', 'true');
                    return { success: true };
                }
                return { success: false, error: 'Usuario o contraseña incorrectos.' };
            } else {
                // Modo Real con API de Google Sheets
                const response = await fetch(config.sheetsApiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' }, // Evita CORS preflight
                    body: JSON.stringify({
                        action: 'loginWithPassword',
                        username,
                        password: pass,
                        secret: config.sheetsApiSecret
                    })
                });
                const data = await response.json();
                if (data.success) {
                    const loggedUser: User = data.user;
                    setUser(loggedUser);
                    setIsAuthenticated(true);
                    localStorage.setItem('fa_academy_user', JSON.stringify(loggedUser));
                    localStorage.setItem('fa_academy_auth', 'true');
                    return { success: true };
                }
                return { success: false, error: data.error || 'Fallo de autenticación.' };
            }
        } catch (err: any) {
            console.error(err);
            return { success: false, error: 'Error de red al intentar iniciar sesión.' };
        }
    };

    const loginWithToken = async (token: string): Promise<{ success: boolean; error?: string }> => {
        try {
            if (isMock) {
                const users = JSON.parse(localStorage.getItem('fa_mock_users') || '[]');
                const found = users.find((u: any) => u.super_link_token === token);
                if (found) {
                    if (found.token_expires && new Date() > new Date(found.token_expires)) {
                        return { success: false, error: 'El Super Link ha expirado.' };
                    }
                    const loggedUser: User = {
                        id: found.id,
                        username: found.username,
                        email: found.email,
                        role: found.role,
                        allowed_phases: found.allowed_phases
                    };
                    setUser(loggedUser);
                    setIsAuthenticated(true);
                    localStorage.setItem('fa_academy_user', JSON.stringify(loggedUser));
                    localStorage.setItem('fa_academy_auth', 'true');
                    return { success: true };
                }
                return { success: false, error: 'Super Link inválido o ya utilizado.' };
            } else {
                // Modo Real
                const url = `${config.sheetsApiUrl}?action=loginWithToken&token=${encodeURIComponent(token)}&secret=${encodeURIComponent(config.sheetsApiSecret)}`;
                const response = await fetch(url);
                const data = await response.json();
                if (data.success) {
                    const loggedUser: User = data.user;
                    setUser(loggedUser);
                    setIsAuthenticated(true);
                    localStorage.setItem('fa_academy_user', JSON.stringify(loggedUser));
                    localStorage.setItem('fa_academy_auth', 'true');
                    return { success: true };
                }
                return { success: false, error: data.error || 'Super Link inválido.' };
            }
        } catch (err: any) {
            console.error(err);
            return { success: false, error: 'Error al verificar el Super Link.' };
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('fa_academy_user');
        localStorage.removeItem('fa_academy_auth');
    };

    const updateProgress = async (phase: number, lessonIndex: number, totalLessons: number) => {
        if (!user) return;
        try {
            if (isMock) {
                const progress = JSON.parse(localStorage.getItem('fa_mock_progress') || '[]');
                const percentage = Math.round((lessonIndex / (totalLessons - 1)) * 100) + '%';
                const foundIndex = progress.findIndex((p: any) => p.username === user.username && Number(p.phase) === phase);
                
                const nowStr = new Date().toISOString();
                if (foundIndex !== -1) {
                    progress[foundIndex].lesson_index = lessonIndex;
                    progress[foundIndex].total_lessons = totalLessons;
                    progress[foundIndex].percentage = percentage;
                    progress[foundIndex].updated_at = nowStr;
                } else {
                    progress.push({
                        id: 'PRG_' + Math.floor(Math.random() * 900000 + 100000),
                        username: user.username,
                        email: user.email,
                        phase,
                        lesson_index: lessonIndex,
                        total_lessons: totalLessons,
                        percentage,
                        updated_at: nowStr
                    });
                }
                localStorage.setItem('fa_mock_progress', JSON.stringify(progress));
            } else {
                // Modo Real
                await fetch(config.sheetsApiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify({
                        action: 'updateProgress',
                        username: user.username,
                        email: user.email,
                        phase,
                        lessonIndex,
                        totalLessons,
                        secret: config.sheetsApiSecret
                    })
                });
            }
        } catch (err) {
            console.error('Error al actualizar progreso:', err);
        }
    };

    const submitTestResult = async (phase: number, score: number, total: number) => {
        if (!user) return;
        try {
            if (isMock) {
                const results = JSON.parse(localStorage.getItem('fa_mock_test_results') || '[]');
                const percentage = Math.round((score / total) * 100) + '%';
                results.push({
                    id: 'TST_' + Math.floor(Math.random() * 900000 + 100000),
                    username: user.username,
                    email: user.email,
                    phase,
                    score,
                    total,
                    percentage,
                    completed_at: new Date().toISOString()
                });
                localStorage.setItem('fa_mock_test_results', JSON.stringify(results));
            } else {
                // Modo Real
                await fetch(config.sheetsApiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify({
                        action: 'submitTestResult',
                        username: user.username,
                        email: user.email,
                        phase,
                        score,
                        total,
                        secret: config.sheetsApiSecret
                    })
                });
            }
        } catch (err) {
            console.error('Error al guardar resultado del test:', err);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, isLoading, isMock, login, loginWithToken, logout, updateProgress, submitTestResult }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

