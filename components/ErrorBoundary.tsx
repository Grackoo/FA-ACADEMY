import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary capturó un error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-slate-900 border border-rose-500/40 p-6 rounded-2xl text-center my-4 shadow-xl">
          <AlertTriangle className="text-rose-400 mx-auto mb-3" size={36} />
          <h4 className="text-white font-bold text-base mb-1">
            {this.props.fallbackMessage || 'Hubo un inconveniente al cargar este componente visual'}
          </h4>
          <p className="text-slate-400 text-xs mb-4">
            {this.state.error?.message || 'Error inesperado de ejecución en el navegador.'}
          </p>
          <button
            onClick={this.handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition-all"
          >
            <RefreshCw size={14} />
            Reintentar Visualización
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
