import { VacationResult, CalculationInput } from './types';

// Updated 2025 INSS Table (Projected/Reference based on 951.63 ceiling)
// Salário Mínimo: 1.518,00
// Teto: 8.157,41
const calculateINSS = (baseSalary: number): number => {
  let inss = 0;
  
  // The calculation is progressive. We sum the tax for each chunk of the salary.
  
  // 1st range: up to 1,518.00 - 7.5%
  const range1 = 1518.00;
  if (baseSalary > 0) {
    const taxable = Math.min(baseSalary, range1);
    inss += taxable * 0.075;
  }

  // 2nd range: 1,518.01 to 2,793.88 - 9%
  const range2 = 2793.88;
  if (baseSalary > range1) {
    const taxable = Math.min(baseSalary, range2) - range1;
    inss += taxable * 0.09;
  }

  // 3rd range: 2,793.89 to 4,190.83 - 12%
  const range3 = 4190.83;
  if (baseSalary > range2) {
    const taxable = Math.min(baseSalary, range3) - range2;
    inss += taxable * 0.12;
  }

  // 4th range: 4,190.84 to 8,157.41 - 14%
  const range4 = 8157.41; // Teto
  if (baseSalary > range3) {
    const taxable = Math.min(baseSalary, range4) - range3;
    inss += taxable * 0.14;
  }
  
  // Ensure we don't exceed the max contribution (check sum of maxes: 113.85 + 114.83 + 167.63 + 555.32 = 951.63)
  // We return the raw value, rounding happens at the end or display
  return inss;
};

const calculateIRRF = (base: number, dependents: number): number => {
  const dependentDeduction = dependents * 189.59;
  const taxableBase = base - dependentDeduction;

  if (taxableBase <= 2259.20) return 0;
  
  let tax = 0;
  if (taxableBase <= 2826.65) {
    tax = (taxableBase * 0.075) - 169.44;
  } else if (taxableBase <= 3751.05) {
    tax = (taxableBase * 0.15) - 381.44;
  } else if (taxableBase <= 4664.68) {
    tax = (taxableBase * 0.225) - 662.77;
  } else {
    tax = (taxableBase * 0.275) - 896.00;
  }
  
  return Math.max(0, tax);
};

export const calculateVacation = (input: CalculationInput): VacationResult => {
  const { grossSalary, vacationDays, overtimeValue, dependents, hasAbono, advance13th } = input;

  // Base Calculation for Vacation (Salary + Overtime avg)
  const calculationBase = grossSalary + overtimeValue;
  
  // Use full precision for calculation steps to match reference site rounding
  const dailyRate = calculationBase / 30;

  // 1. Vacation Pay (Dias de descanso)
  const vacationPay = dailyRate * vacationDays;
  const vacationOneThird = vacationPay / 3;
  const totalVacationGross = vacationPay + vacationOneThird;

  // 2. Abono Pecuniário (Selling 10 days) - Indemnified nature (usually exempt from INSS/IRRF)
  let abonoAmount = 0;
  let abonoOneThird = 0;

  if (hasAbono) {
    // Assuming selling 10 days is standard when "Sim" is checked
    const daysSold = 10;
    abonoAmount = dailyRate * daysSold;
    abonoOneThird = abonoAmount / 3;
  }

  // 3. 13th Salary Advance (50% of GROSS SALARY only, ignoring overtime for this specific advance rule provided in prompt)
  let advance13thValue = 0;
  if (advance13th) {
    advance13thValue = grossSalary * 0.5;
  }

  // 4. Taxes
  // INSS is calculated on the Vacation Gross (Pay + 1/3). 
  // We use the full precision totalVacationGross for the base to ensure we hit the ceiling correctly if close.
  // Note: For display we usually round, but for tax calc we keep precision or round to 2 decimals. 
  // Reference site implies standard logic (Tax on Paid Value), but high precision match suggests calculating on raw then rounding result.
  const inssRaw = calculateINSS(totalVacationGross);
  // Round INSS to 2 decimals for the deduction step, as this is what is deducted from the base for IRRF
  const inss = Math.round(inssRaw * 100) / 100;
  
  // IRRF Base = Vacation Gross (Full Precision) - INSS (Rounded). 
  // Using Full Precision Gross allows the 1/3 fraction to bump the tax bracket calculation slightly if needed.
  const irrfBase = totalVacationGross - inss;
  const irrfRaw = calculateIRRF(irrfBase, dependents);
  const irrf = Math.round(irrfRaw * 100) / 100;

  // Totals
  // Round components for final sum to avoid floating point weirdness in Net
  const grossVacationRounded = Math.round(totalVacationGross * 100) / 100;
  const abonoAmountRounded = Math.round(abonoAmount * 100) / 100;
  const abonoOneThirdRounded = Math.round(abonoOneThird * 100) / 100;
  const advance13thRounded = Math.round(advance13thValue * 100) / 100;

  const totalGross = grossVacationRounded + abonoAmountRounded + abonoOneThirdRounded + advance13thRounded;
  const totalDiscounts = inss + irrf;
  const totalNet = totalGross - totalDiscounts;

  return {
    grossVacation: grossVacationRounded,
    abonoAmount: abonoAmountRounded,
    abonoOneThird: abonoOneThirdRounded,
    advance13th: advance13thRounded,
    inss,
    irrf,
    totalNet,
    totalGross,
    totalDiscounts
  };
};