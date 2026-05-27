import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
    phase?: number;
    requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, phase, requireAdmin = false }) => {
    const { isAuthenticated, user } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirigir al login y guardar la ruta original
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Si se requiere rol de administrador
    if (requireAdmin && user?.role !== 'admin') {
        return <Navigate to="/academy" replace />;
    }

    // Si se requiere acceso a una fase específica y el usuario es alumno
    if (phase !== undefined && user?.role !== 'admin') {
        const isPhaseAllowed = user?.allowed_phases?.includes(phase.toString());
        if (!isPhaseAllowed) {
            // Redirigir a precios si no tiene acceso
            return <Navigate to="/pricing" state={{ deniedPhase: phase }} replace />;
        }
    }

    return <>{children}</>;
};

export default ProtectedRoute;

