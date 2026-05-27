export const config = {
  sheetsApiUrl: (import.meta.env.VITE_SHEETS_API_URL || '').trim(),
  sheetsApiSecret: (import.meta.env.VITE_SHEETS_API_SECRET || 'fa_academy_secret_token_2026').trim(),
  isMockMode: !(import.meta.env.VITE_SHEETS_API_URL && import.meta.env.VITE_SHEETS_API_URL.trim() !== '')
};
