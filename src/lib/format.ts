const datoFormat = new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'long', year: 'numeric' });

/** "1. november 2026" */
export function formatDato(dato: Date): string {
  return datoFormat.format(dato);
}

/** 1 → "01" */
export function toCifre(tal: number): string {
  return String(tal).padStart(2, '0');
}
