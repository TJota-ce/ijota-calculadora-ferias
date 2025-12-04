export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const parseCurrency = (value: string): number => {
  if (!value) return 0;
  // Remove R$, spaces, dots, and convert comma to dot
  const cleanValue = value.replace(/[^\d,]/g, '').replace(',', '.');
  return parseFloat(cleanValue) || 0;
};

// Simple input mask for currency while typing
export const maskCurrency = (value: string): string => {
  let numeric = value.replace(/\D/g, "");
  if (numeric === "") return "";
  
  const floatValue = parseFloat(numeric) / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(floatValue);
};