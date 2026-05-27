import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { config } from '../config';
import { 
  Users, CheckCircle2, Award, UserPlus, Search, 
  ExternalLink, Copy, Check, Send, Sparkles, Shield,
  BookOpen, ChevronRight, RefreshCw, AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';

interface Client {
  id: string;
  username: string;
  email: string;
  role: string;
  allowed_phases: string[];
  super_link_token: string;
  created_at: string;
}

interface ProgressRecord {
  id: string;
  username: string;
  email: string;
  phase: string | number;
  lesson_index: string | number;
  total_lessons: string | number;
  percentage: string;
  updated_at: string;
}

interface TestResult {
  id: string;
  username: string;
  email: string;
  phase: string | number;
  score: string | number;
  total: string | number;
  percentage: string;
  completed_at: string;
}

export default function AdminDashboard() {
  const { user, isMock } = useAuth();
  
  // State for data
  const [clients, setClients] = useState<Client[]>([]);
  const [progress, setProgress] = useState<ProgressRecord[]>([]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  // Registration form state
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [selectedPhases, setSelectedPhases] = useState<string[]>(['1', '2', '3', '4', '5']);
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState<any>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  
  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  
  // UI states
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [generatedLink, setGeneratedLink] = useState('');
  
  const loadData = async (showRefreshIndicator = false) => {
    if (showRefreshIndicator) setRefreshing(true);
    else setLoading(true);
    
    try {
      if (isMock) {
        // Cargar desde localStorage
        const localUsers = JSON.parse(localStorage.getItem('fa_mock_users') || '[]');
        const localProgress = JSON.parse(localStorage.getItem('fa_mock_progress') || '[]');
        const localTests = JSON.parse(localStorage.getItem('fa_mock_test_results') || '[]');
        
        // Mapear al tipo Client
        const formattedClients = localUsers.map((u: any) => ({
          id: u.id,
          username: u.username,
          email: u.email,
          role: u.role,
          allowed_phases: u.allowed_phases || [],
          super_link_token: u.super_link_token || '',
          created_at: u.created_at
        }));
        
        setClients(formattedClients);
        setProgress(localProgress);
        setTestResults(localTests);
      } else {
        // Cargar desde la API real de Google Sheets
        const secret = config.sheetsApiSecret;
        const url = config.sheetsApiUrl;
        
        const [clientsRes, progressRes, testsRes] = await Promise.all([
          fetch(`${url}?action=getClients&secret=${encodeURIComponent(secret)}`).then(r => r.json()),
          fetch(`${url}?action=getProgress&secret=${encodeURIComponent(secret)}`).then(r => r.json()),
          fetch(`${url}?action=getTestResults&secret=${encodeURIComponent(secret)}`).then(r => r.json())
        ]);
        
        if (clientsRes.success) setClients(clientsRes.clients);
        if (progressRes.success) setProgress(progressRes.progress);
        if (testsRes.success) setTestResults(testsRes.results);
      }
    } catch (error) {
      console.error('Error cargando datos del panel admin:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [isMock]);

  const handleRegisterClient = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationError('');
    setRegistrationSuccess(null);
    setIsRegistering(true);
    
    const allowedPhasesStr = selectedPhases.sort().join(',');
    
    try {
      if (isMock) {
        // Registro simulado
        const localUsers = JSON.parse(localStorage.getItem('fa_mock_users') || '[]');
        
        // Verificar duplicados
        const exists = localUsers.some(
          (u: any) => 
            u.username.toLowerCase() === newUsername.toLowerCase() || 
            u.email.toLowerCase() === newEmail.toLowerCase()
        );
        
        if (exists) {
          throw new Error('El nombre de usuario o correo ya existe en la simulación.');
        }
        
        const userId = 'USR_' + Math.floor(Math.random() * 900000 + 100000);
        // Hashing
        const msgBuffer = new TextEncoder().encode(newPassword);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const passHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        const token = 'SL_' + Math.random().toString(36).substring(2, 10).toUpperCase() + '_' + Math.floor(Math.random() * 9000 + 1000);
        
        const newUser = {
          id: userId,
          username: newUsername,
          email: newEmail,
          password_hash: passHash,
          role: 'student',
          allowed_phases: selectedPhases,
          super_link_token: token,
          token_expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          created_at: new Date().toISOString()
        };
        
        localUsers.push(newUser);
        localStorage.setItem('fa_mock_users', JSON.stringify(localUsers));
        
        const successClient = {
          id: userId,
          username: newUsername,
          email: newEmail,
          allowed_phases: selectedPhases,
          super_link_token: token
        };
        
        setRegistrationSuccess(successClient);
        setGeneratedLink(`${window.location.origin}/login?token=${token}`);
        
        // Reset form
        setNewUsername('');
        setNewEmail('');
        setNewPassword('');
        loadData();
      } else {
        // Registro real API
        const response = await fetch(config.sheetsApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            action: 'registerClient',
            username: newUsername,
            email: newEmail,
            password: newPassword,
            allowedPhases: allowedPhasesStr,
            secret: config.sheetsApiSecret
          })
        });
        const data = await response.json();
        if (data.success) {
          setRegistrationSuccess(data.client);
          setGeneratedLink(`${window.location.origin}/login?token=${data.client.super_link_token}`);
          setNewUsername('');
          setNewEmail('');
          setNewPassword('');
          loadData();
        } else {
          setRegistrationError(data.error || 'Error registrando al cliente.');
        }
      }
    } catch (err: any) {
      setRegistrationError(err.message || 'Error de red.');
    } finally {
      setIsRegistering(false);
    }
  };

  const handleGenerateNewToken = async (clientUsername: string) => {
    try {
      if (isMock) {
        const localUsers = JSON.parse(localStorage.getItem('fa_mock_users') || '[]');
        const idx = localUsers.findIndex((u: any) => u.username === clientUsername);
        if (idx !== -1) {
          const token = 'SL_' + Math.random().toString(36).substring(2, 10).toUpperCase() + '_' + Math.floor(Math.random() * 9000 + 1000);
          localUsers[idx].super_link_token = token;
          localUsers[idx].token_expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
          localStorage.setItem('fa_mock_users', JSON.stringify(localUsers));
          
          alert(`Nuevo Super Link generado para ${clientUsername}:\n${window.location.origin}/login?token=${token}`);
          loadData();
        }
      } else {
        const response = await fetch(config.sheetsApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            action: 'generateSuperLink',
            clientUsername,
            secret: config.sheetsApiSecret
          })
        });
        const data = await response.json();
        if (data.success) {
          alert(`Nuevo Super Link generado para ${clientUsername}:\n${window.location.origin}/login?token=${data.super_link_token}`);
          loadData();
        } else {
          alert('Error: ' + data.error);
        }
      }
    } catch (err) {
      console.error(err);
      alert('Error de red al regenerar token.');
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const togglePhaseCheckbox = (phase: string) => {
    if (selectedPhases.includes(phase)) {
      setSelectedPhases(selectedPhases.filter(p => p !== phase));
    } else {
      setSelectedPhases([...selectedPhases, phase]);
    }
  };

  // Filter clients based on search query
  const filteredClients = clients.filter(c => 
    c.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper to find progress percentage for a user and phase
  const getProgressPercentage = (username: string, phase: number) => {
    const record = progress.find(p => p.username === username && Number(p.phase) === phase);
    return record ? record.percentage : '0%';
  };

  const getProgressLessonString = (username: string, phase: number) => {
    const record = progress.find(p => p.username === username && Number(p.phase) === phase);
    return record ? `Lección ${Number(record.lesson_index) + 1}/${record.total_lessons}` : 'Sin iniciar';
  };

  // Stats calculation
  const totalStudents = clients.filter(c => c.role !== 'admin').length;
  const totalTestsDone = testResults.length;
  const activeStudents = progress.map(p => p.username).filter((value, index, self) => self.indexOf(value) === index).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <SEO title="Panel de Administración | FA Academy" description="Monitoreo y administración de clientes y progreso académico." />

      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                <Shield size={12} /> Consola de Administración
              </span>
              {isMock && (
                <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Modo Simulación
                </span>
              )}
            </div>
            <h1 className="text-3xl font-display font-bold text-white tracking-tight">FA Academy Control Panel</h1>
            <p className="text-slate-400 text-sm">Gestiona clientes, genera Super Links y evalúa progresos en tiempo real.</p>
          </div>
          
          <button 
            onClick={() => loadData(true)} 
            disabled={refreshing}
            className="self-start md:self-center flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 font-medium rounded-xl transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw size={16} className={refreshing ? 'animate-spin text-teal-400' : ''} />
            Actualizar Datos
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 shadow-xl backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <Users size={24} />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium block">Total Alumnos Activos</span>
              <span className="text-2xl font-bold text-white block mt-0.5">{totalStudents}</span>
            </div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 shadow-xl backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
              <BookOpen size={24} />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium block">Estudiantes Estudiando</span>
              <span className="text-2xl font-bold text-white block mt-0.5">{activeStudents}</span>
            </div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 shadow-xl backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Award size={24} />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium block">Evaluaciones Entregadas</span>
              <span className="text-2xl font-bold text-white block mt-0.5">{totalTestsDone}</span>
            </div>
          </div>
        </div>

        {/* Form and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Add Client Form */}
          <div className="lg:col-span-1 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm h-fit">
            <div className="flex items-center gap-2 mb-6">
              <UserPlus className="text-primary-400" size={20} />
              <h2 className="text-xl font-bold text-white">Dar de Alta Cliente</h2>
            </div>
            
            <form onSubmit={handleRegisterClient} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">Nombre de usuario</label>
                <input 
                  type="text" 
                  value={newUsername} 
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="ej: carlosm"
                  className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">Correo Electrónico</label>
                <input 
                  type="email" 
                  value={newEmail} 
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="ej: carlos@gmail.com"
                  className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">Contraseña Temporal</label>
                <input 
                  type="password" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Contraseña del cliente"
                  className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Phase permissions */}
              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-medium block">Fases de Acceso Permitidas</label>
                <div className="grid grid-cols-5 gap-2">
                  {['1', '2', '3', '4', '5'].map((phaseNum) => (
                    <button
                      type="button"
                      key={phaseNum}
                      onClick={() => togglePhaseCheckbox(phaseNum)}
                      className={`py-2 text-center text-xs font-bold rounded-lg border transition-all ${
                        selectedPhases.includes(phaseNum)
                          ? 'bg-teal-950 border-teal-500/60 text-teal-400 shadow-md shadow-teal-500/5'
                          : 'bg-slate-800/50 border-transparent text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      F{phaseNum}
                    </button>
                  ))}
                </div>
              </div>
              
              {registrationError && (
                <div className="bg-red-950/20 border border-red-500/30 text-red-200 p-3 rounded-xl flex items-start gap-2 text-xs">
                  <AlertCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  <span>{registrationError}</span>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isRegistering}
                className="w-full py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isRegistering ? 'Creando Cliente...' : 'Crear y Generar Super Link'}
              </button>
            </form>

            {/* Generated Super Link Section */}
            {registrationSuccess && (
              <div className="mt-6 bg-slate-950/80 border border-teal-500/20 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold">
                  <Sparkles size={14} /> ¡Cliente Creado Exitosamente!
                </div>
                <div className="text-xs text-slate-400">
                  Envíale este enlace a <strong>{registrationSuccess.username}</strong> para que inicie sesión inmediatamente sin ingresar contraseña:
                </div>
                
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg text-slate-300 text-xs select-all break-all relative">
                  {generatedLink}
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => copyToClipboard(generatedLink, 'reg_link')}
                    className="py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg text-xs flex items-center justify-center gap-1 transition-all cursor-pointer"
                  >
                    {copiedToken === 'reg_link' ? (
                      <>
                        <Check size={12} className="text-teal-400" /> Copiado
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Copiar Enlace
                      </>
                    )}
                  </button>
                  
                  <a
                    href={`https://wa.me/?text=Hola%20${registrationSuccess.username}!%20Aqu%C3%AD%20tienes%20tu%20enlace%20de%20acceso%20directo%20a%20FA%20Academy%20para%20comenzar%20tu%20curso:%20${encodeURIComponent(generatedLink)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 bg-[#25D366] hover:opacity-90 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1 transition-all text-center"
                  >
                    <Send size={12} /> WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {/* Main Clients and Progress List */}
          <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-white">Monitoreo de Alumnos</h2>
              
              {/* Search Bar */}
              <div className="relative max-w-xs w-full">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por usuario o email..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            
            {loading ? (
              <div className="py-20 text-center text-slate-500 text-sm">
                <RefreshCw size={24} className="animate-spin mx-auto mb-2 text-teal-400" />
                Cargando datos de Google Sheets...
              </div>
            ) : filteredClients.length === 0 ? (
              <div className="py-20 text-center text-slate-500 text-sm">
                No se encontraron alumnos registrados.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500 text-xs font-bold">
                      <th className="pb-3 pr-4 font-semibold">Usuario</th>
                      <th className="pb-3 px-4 font-semibold">Correo</th>
                      <th className="pb-3 px-4 font-semibold">Fases Permitidas</th>
                      <th className="pb-3 px-4 font-semibold">Progreso Académico</th>
                      <th className="pb-3 pl-4 font-semibold text-right">Acceso Rápido</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-xs">
                    {filteredClients.map((client) => {
                      if (client.role === 'admin') return null; // Omitir administradores
                      
                      const linkUrl = `${window.location.origin}/login?token=${client.super_link_token}`;
                      
                      return (
                        <tr key={client.id} className="hover:bg-slate-800/10 transition-colors">
                          <td className="py-4 pr-4">
                            <span className="font-semibold text-white block">{client.username}</span>
                            <span className="text-[10px] text-slate-500">ID: {client.id}</span>
                          </td>
                          <td className="py-4 px-4 text-slate-400 select-all">{client.email}</td>
                          <td className="py-4 px-4">
                            <div className="flex flex-wrap gap-1">
                              {client.allowed_phases.map(p => (
                                <span key={p} className="bg-slate-800 border border-slate-700 text-slate-300 text-[10px] px-1.5 py-0.5 rounded font-bold">
                                  F{p}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-4 px-4 space-y-2">
                            {/* Mostrar progreso de las fases protegidas (Fase 3, 4, 5) */}
                            {[1, 2, 3, 4, 5].map((phNum) => {
                              const pct = getProgressPercentage(client.username, phNum);
                              const details = getProgressLessonString(client.username, phNum);
                              const numericPct = parseInt(pct) || 0;
                              
                              return (
                                <div key={phNum} className="flex items-center gap-2">
                                  <span className="text-[10px] font-bold text-slate-500 w-4">F{phNum}:</span>
                                  <div className="flex-grow h-1.5 bg-slate-800 rounded-full overflow-hidden w-20 relative">
                                    <div 
                                      className={`h-full rounded-full ${
                                        numericPct === 100 
                                          ? 'bg-emerald-500' 
                                          : numericPct > 0 
                                            ? 'bg-teal-500' 
                                            : 'bg-slate-700/50'
                                      }`}
                                      style={{ width: pct }}
                                    ></div>
                                  </div>
                                  <span className="text-[10px] text-slate-400 font-medium w-8 text-right">{pct}</span>
                                  <span className="text-[9px] text-slate-500 hidden sm:inline">({details})</span>
                                </div>
                              );
                            })}
                          </td>
                          <td className="py-4 pl-4 text-right">
                            {client.super_link_token ? (
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => copyToClipboard(linkUrl, client.id)}
                                  className="p-1.5 bg-slate-800 border border-slate-700 hover:bg-slate-700 rounded-lg text-slate-300 transition-all cursor-pointer"
                                  title="Copiar Super Link"
                                >
                                  {copiedToken === client.id ? (
                                    <Check size={14} className="text-teal-400 animate-fade-in" />
                                  ) : (
                                    <Copy size={14} />
                                  )}
                                </button>
                                <a
                                  href={`https://wa.me/?text=Hola%20${client.username}!%20Aqu%C3%AD%20tienes%20tu%20enlace%20de%20acceso%20directo%20a%20FA%20Academy%20para%20comenzar%20tu%20curso:%20${encodeURIComponent(linkUrl)}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-1.5 bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/30 rounded-lg transition-all"
                                  title="Enviar por WhatsApp"
                                >
                                  <Send size={14} />
                                </a>
                              </div>
                            ) : (
                              <button
                                onClick={() => handleGenerateNewToken(client.username)}
                                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-teal-400 hover:text-teal-300 font-bold border border-slate-700 rounded-lg text-[10px] transition-all cursor-pointer"
                              >
                                Generar Link
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Test Results Table */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-purple-400" size={20} />
            <h2 className="text-xl font-bold text-white">Resultados de Evaluaciones Finales</h2>
          </div>
          
          {loading ? (
            <div className="py-10 text-center text-slate-500 text-sm">
              Cargando historial de exámenes...
            </div>
          ) : testResults.length === 0 ? (
            <div className="py-10 text-center text-slate-500 text-sm">
              Ningún alumno ha realizado exámenes finales aún.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 text-xs font-bold">
                    <th className="pb-3 pr-4 font-semibold">Estudiante</th>
                    <th className="pb-3 px-4 font-semibold">Correo</th>
                    <th className="pb-3 px-4 font-semibold">Fase Evaluada</th>
                    <th className="pb-3 px-4 font-semibold">Puntaje</th>
                    <th className="pb-3 px-4 font-semibold">Calificación</th>
                    <th className="pb-3 pl-4 font-semibold text-right">Fecha Completado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                  {testResults.map((test) => {
                    const scoreNum = Number(test.score);
                    const totalNum = Number(test.total);
                    const pctVal = totalNum > 0 ? (scoreNum / totalNum) * 100 : 0;
                    
                    return (
                      <tr key={test.id} className="hover:bg-slate-800/10 transition-colors">
                        <td className="py-3.5 pr-4 font-semibold text-white">{test.username}</td>
                        <td className="py-3.5 px-4 text-slate-400 select-all">{test.email}</td>
                        <td className="py-3.5 px-4 font-medium">Fase {test.phase}</td>
                        <td className="py-3.5 px-4 font-bold">
                          {test.score} / {test.total}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            pctVal >= 80 
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/20' 
                              : pctVal >= 60 
                                ? 'bg-amber-950 text-amber-400 border border-amber-500/20' 
                                : 'bg-red-950 text-red-400 border border-red-500/20'
                          }`}>
                            {test.percentage}
                          </span>
                        </td>
                        <td className="py-3.5 pl-4 text-right text-slate-500 text-[10px]">
                          {new Date(test.completed_at).toLocaleString('es-MX', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
