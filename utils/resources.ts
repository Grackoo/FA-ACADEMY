// Utilidades para generación y descarga de plantillas reales de Excel/CSV y Guías de Estudio imprimibles (PDF)

function downloadCSV(filename: string, content: string) {
  // \uFEFF añade el Byte Order Mark (BOM) para que Microsoft Excel lo abra en UTF-8 sin errores de acentos o caracteres especiales
  const blob = new Blob(['\uFEFF' + content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadTradingJournalTemplate() {
  const csv = [
    'ID Operación,Fecha,Ticker / Activo,Mercado / Broker,Dirección (Long/Short),Timeframe,Precio Entrada (USD/MXN),Stop Loss,Take Profit,Ratio R:B,Tamaño de Posición (Títulos),Riesgo Monetario (1-2%),Precio Salida,Resultado Neto ($),Resultado en R (+/- R),¿Siguió el Plan? (Sí/No),Emoción al Operar,Lección Aprendida',
    'OP-001,2026-03-02,AAPL,NASDAQ / GBM+,Long,Daily,168.00,158.00,195.00,2.70,10,$100.00,195.00,+$270.00,+2.7R,Sí,Tranquilo y disciplinado,La paciencia tras el doble suelo en soporte pagó.',
    'OP-002,2026-03-15,BIMBOA,BMV / GBM+,Long,Daily,68.20,64.00,78.50,2.45,50,$210.00,76.00,+$390.00,+1.85R,Sí,Confiado con fundamentales,Comprar tras pánico injustificado del reporte 4T.',
    'OP-003,2026-03-22,NVDA,NASDAQ / GBM+,Long,4H,115.00,111.00,126.00,2.75,25,$100.00,111.00,-$100.00,-1.0R,Sí,Acepté la pérdida sin rencor,El Stop Loss evitó una caída mayor hasta $102.'
  ].join('\n');
  downloadCSV('Plantilla_Diario_Trading_Backtesting_FA_Academy.csv', csv);
}

export function downloadAssetAllocationTemplate() {
  const csv = [
    'Clase de Activo,Instrumento Ejemplo,Función en el Portafolio,Ponderación Objetivo (%),Valor Actual ($ MXN),Ponderación Actual (%),Desviación (%),Acción de Rebalanceo Requerida,Monto Sugerido de Ajuste ($ MXN)',
    'Renta Variable Global,IVVPESO / VOO,Motor de Crecimiento,40.0%,$45000.00,45.0%,+5.0%,VENDER Ganancias para rebalancear,-$5000.00',
    'Renta Fija Gubernamental,Cetes 28d / Mbonos,Freno y Estabilidad,25.0%,$22000.00,22.0%,-3.0%,COMPRAR con flujo o ventas,+$3000.00',
    'Bienes Raíces / FIBRAS,FMTY14 / FUNO11,Flujo de Efectivo Trimestral,20.0%,$19000.00,19.0%,-1.0%,COMPRAR con dividendos,+$1000.00',
    'Combustible / Oportunidades,Efectivo / Cuentas a la Vista (Nu/Cetes),Fondo de Oportunidad,15.0%,$14000.00,14.0%,-1.0%,COMPRAR para colchón,+$1000.00',
    'TOTAL PORTAFOLIO,Diversificado,-,100.0%,$100000.00,100.0%,0.0%,EQUILIBRADO,Regla: Rebalancear anual o ante desviación >5%'
  ].join('\n');
  downloadCSV('Plantilla_Asset_Allocation_Rebalanceo_FA_Academy.csv', csv);
}

export function downloadFiscalDeclarationTemplate() {
  const csv = [
    'Concepto Fiscal (LISR México),Fundamento Legal LISR,Monto Bruto ($ MXN),Costo Actualizado o Retención Provisional,Base Gravable Neta ($ MXN),Tasa Aplicable,ISR a Pagar en Declaración Anual ($ MXN),Observaciones y Reglas SAT',
    'Enajenación de Acciones Bolsa (Ganancia Bruta),Art. 129 LISR,$50000.00,$0.00,$50000.00,10.0%,$5000.00,Se calcula y declara en Anual (Abril). No es retención mensual definitiva.',
    'Pérdidas en Bolsa Ejercicio Anterior (Amortizable),Art. 129 Fracc. VI LISR,-$18000.00,$0.00,-$18000.00,10.0%,-$1800.00,Amortizable contra ganancias bursátiles hasta por 10 ejercicios futuros.',
    'Ganancia Bursátil Neta Sujeta a ISR,Art. 129 LISR,-,-,$32000.00,10.0%,$3200.00,Total a pagar en el formulario del SAT (enajenación de acciones).',
    'Dividendos Nacionales Percibidos,Art. 140 LISR,$12000.00,Retención 10% ($1200.00),Se acumula a ingresos,Tarifa Art. 152,Acreditable ISR corporativo,La empresa retiene 10% definitivo; se acumula monto piramidado.',
    'Renta Fija / Cetes (Interés Real),Art. 133-135 LISR,$15000.00,Retención anual provisional,Interés real (descontando inflación),Tarifa Art. 152,Ajuste anual,Solo el interés que supere a la inflación paga impuesto real.',
    'Deducción Personal PPR (Plan Personal de Retiro),Art. 151 Fracc. V LISR,-$45000.00,-,-$45000.00,Devolución según tasa marginal,-$13500.00 (Saldo a favor),Hasta el 10% de ingresos anuales o 5 UMAs anuales (~$200k MXN).'
  ].join('\n');
  downloadCSV('Plantilla_Fiscal_SAT_Amortizacion_Perdidas_FA_Academy.csv', csv);
}

export function downloadInvestmentThesisTemplate() {
  const csv = [
    'Sección de la Tesis,Parámetro / Pregunta Clave,Respuesta / Datos Analizados,Fuente de Información,Evaluación de Riesgo / Veredicto',
    '1. Identificación,Empresa y Ticker,Grupo Bimbo S.A.B. de C.V. (BIMBOA.MX),Bolsa Mexicana de Valores (BMV),Negocio de Consumo Básico defensivo',
    '2. Foso Económico (Moat),¿Qué ventaja competitiva sostenible posee?,Red de distribución global líder mundial en panificación; economías de escala y marca.,Reporte Anual BMV 2023-2024,Alto foso defensivo contra nuevos competidores',
    '3. Salud Financiera,Margen EBITDA y Razón Deuda/EBITDA,Margen EBITDA saludable 13.9%; Deuda Neta / EBITDA en 2.4x dentro del rango grado de inversión.,Estados Financieros Auditados,Riesgo financiero bajo a moderado',
    '4. Catalizadores de Crecimiento,¿Qué impulsará el valor en los próximos 1-3 años?,Normalización de costos de materias primas (trigo) y expansión de margen en Norteamérica.,Guía de Dirección (Guidance 2026),Catalizadores tangibles',
    '5. Valuación por Múltiplos,Múltiplo P/E y EV/EBITDA vs Mediana Histórica,P/E actual 16.5x vs promedio histórico de 21x. EV/EBITDA en 7.8x.,Terminal Bloomberg / TradingView,Descuento de ~20% respecto a su valor intrínseco',
    '6. Escenario Bajista (Bear Case),¿Qué invalidaría la tesis?,Aumento desmedido y sostenido de materias primas o disrupción laboral grave.,Matriz de Riesgo Interna,Stop Loss fundamental si EBITDA cae >25%',
    '7. Plan de Salida y Objetivos,Precio Entrada / Precio Objetivo / Stop Loss,Entrada: $68.00 MXN / Objetivo: $88.00 MXN (+29%) / Stop: $61.00 MXN (-10%),Comité de Inversiones FA Academy,Ratio R:B atractivo de 1:2.9'
  ].join('\n');
  downloadCSV('Plantilla_Tesis_Inversion_Valuacion_FA_Academy.csv', csv);
}

// Generador de Guías Oficiales de Estudio Imprimibles / PDF
export function openPrintableStudyGuide(phase: number, title: string, lessons: { title: string; content: string; details: string; concepts?: { term: string; def: string }[] }[]) {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Por favor permite las ventanas emergentes (pop-ups) para generar la Guía de Estudio en PDF.');
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Guía Oficial de Estudio - Fase ${phase} | FA Academy</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          color: #1e293b;
          max-width: 850px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .header {
          border-bottom: 3px solid #0d9488;
          padding-bottom: 20px;
          margin-bottom: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 24px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.5px;
        }
        .logo span { color: #0d9488; }
        .badge {
          background-color: #0d9488;
          color: white;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }
        h1 { color: #0f172a; font-size: 26px; margin: 0 0 8px 0; }
        .subtitle { color: #64748b; font-size: 15px; margin: 0; }
        .lesson-card {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
          background-color: #f8fafc;
          page-break-inside: avoid;
        }
        .lesson-number {
          font-size: 12px;
          font-weight: 800;
          color: #0d9488;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .lesson-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 10px 0;
        }
        .lesson-summary {
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          margin-bottom: 12px;
          padding-left: 10px;
          border-left: 3px solid #0d9488;
        }
        .lesson-details {
          font-size: 13.5px;
          color: #475569;
          margin-bottom: 16px;
        }
        .concepts-title {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 8px;
        }
        .concepts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .concept-item {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12px;
        }
        .concept-term { font-weight: 700; color: #0f172a; }
        .concept-def { color: #64748b; margin-top: 2px; }
        .footer {
          margin-top: 40px;
          border-top: 1px solid #e2e8f0;
          padding-top: 20px;
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
        }
        .btn-print {
          background-color: #0d9488;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          font-size: 14px;
          margin-bottom: 20px;
        }
        @media print {
          .no-print { display: none; }
          body { padding: 0; }
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="text-align: right;">
        <button class="btn-print" onclick="window.print()">🖨️ Guardar como PDF / Imprimir Guía</button>
      </div>
      <div class="header">
        <div>
          <div class="logo">FA <span>ACADEMY</span></div>
          <h1>${title}</h1>
          <p class="subtitle">Guía de Estudio Oficial y Glosario Técnico de Certificación</p>
        </div>
        <div class="badge">Fase ${phase}</div>
      </div>

      <div class="lessons-container">
        ${lessons.map((l, idx) => `
          <div class="lesson-card">
            <div class="lesson-number">Lección ${idx + 1} de ${lessons.length}</div>
            <h2 class="lesson-title">${l.title}</h2>
            <div class="lesson-summary">${l.content}</div>
            <div class="lesson-details">${l.details}</div>
            ${l.concepts && l.concepts.length > 0 ? `
              <div class="concepts-title">Conceptos Clave y Glosario</div>
              <div class="concepts-grid">
                ${l.concepts.map(c => `
                  <div class="concept-item">
                    <div class="concept-term">${c.term}</div>
                    <div class="concept-def">${c.def}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>

      <div class="footer">
        <p>© 2026 FA Academy. Todos los derechos reservados. Material educativo y de certificación financiera independiente.</p>
      </div>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
