export interface VacationResult {
  grossVacation: number; // Férias + 1/3
  abonoAmount: number; // Valor do abono
  abonoOneThird: number; // 1/3 do abono
  advance13th: number; // 1ª parcela 13º
  inss: number;
  irrf: number;
  totalNet: number;
  totalGross: number; // Soma de todos os proventos
  totalDiscounts: number; // Soma de todos os descontos
}

export interface CalculationInput {
  grossSalary: number;
  vacationDays: number;
  overtimeValue: number;
  dependents: number;
  hasAbono: boolean;
  advance13th: boolean;
}