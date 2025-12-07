import React, { useState } from 'react';
import { formatCurrency, maskCurrency, parseCurrency } from './utils';
import { calculateVacation } from './calculations';
import { VacationResult } from './types';
import { InfoTooltip } from './components/InfoTooltip';
import { TaxTables } from './components/TaxTables';
import { ReformaTrabalhistaInfo } from './components/ReformaTrabalhistaInfo';

const App: React.FC = () => {
  // Form State
  const [grossSalaryStr, setGrossSalaryStr] = useState<string>('');
  const [vacationDays, setVacationDays] = useState<number>(30);
  const [overtimeStr, setOvertimeStr] = useState<string>('R$ 0,00');
  const [dependents, setDependents] = useState<number>(0);
  const [hasAbono, setHasAbono] = useState<boolean>(false);
  const [advance13th, setAdvance13th] = useState<boolean>(false);

  // Result State
  const [result, setResult] = useState<VacationResult | null>(null);

  const handleCurrencyChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setter(maskCurrency(val));
  };

  const handleCalculate = () => {
    const grossSalary = parseCurrency(grossSalaryStr);
    const overtimeValue = parseCurrency(overtimeStr);

    const calcResult = calculateVacation({
      grossSalary,
      vacationDays,
      overtimeValue,
      dependents,
      hasAbono,
      advance13th
    });

    setResult(calcResult);
    // Scroll to result on mobile if needed
    setTimeout(() => {
        const resultElement = document.getElementById('results-section');
        if (resultElement) resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleClear = () => {
    setGrossSalaryStr('');
    setVacationDays(30);
    setOvertimeStr('R$ 0,00');
    setDependents(0);
    setHasAbono(false);
    setAdvance13th(false);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col print:bg-white">
      {/* Header */}
      <header className="bg-ijota-600 shadow-md print:hidden">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-ijota-600 font-bold p-2 rounded-lg text-xl tracking-tighter">
              iJ
            </div>
            <h1 className="text-white text-2xl font-bold tracking-tight">iJota Financeira</h1>
          </div>
          <div className="hidden md:block text-ijota-100 text-sm">
            Especialistas em Cálculos Trabalhistas
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl print:py-0 print:w-full print:max-w-none">
        <div className="space-y-8 print:space-y-4">
          
          {/* Calculator Form */}
          <section className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8 print:hidden">
              <h2 className="text-2xl font-bold text-ijota-700 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Calculadora de Férias
              </h2>

              <div className="space-y-6">
                
                {/* Row 1: Salário Bruto & Dias de Férias */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Salário Bruto R$
                        </label>
                        <input
                            type="text"
                            value={grossSalaryStr}
                            onChange={handleCurrencyChange(setGrossSalaryStr)}
                            placeholder="R$ 0,00"
                            className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-ijota-500 focus:border-ijota-500 transition-all outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Quantidade de Dias de Férias
                        </label>
                        <select 
                            value={vacationDays}
                            onChange={(e) => setVacationDays(Number(e.target.value))}
                            className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-ijota-500 focus:border-ijota-500 outline-none"
                        >
                            {[...Array(30)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Row 2: Horas Extras & Dependentes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                            Horas Extras (se houver) R$
                            <InfoTooltip text="Média de horas extras recebidas no período aquisitivo." />
                        </label>
                        <input
                            type="text"
                            value={overtimeStr}
                            onChange={handleCurrencyChange(setOvertimeStr)}
                            placeholder="R$ 0,00"
                            className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-ijota-500 focus:border-ijota-500 transition-all outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Número de Dependentes
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="20"
                            value={dependents}
                            onChange={(e) => setDependents(Math.max(0, parseInt(e.target.value) || 0))}
                            className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg p-3 focus:ring-2 focus:ring-ijota-500 focus:border-ijota-500 outline-none"
                        />
                    </div>
                </div>

                {/* Row 3: Abono & 13º */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Abono Pecuniário */}
                    <div>
                        <span className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                            Abono Pecuniário
                            <InfoTooltip text='Venda de 1/3 das férias (normalmente 10 dias).' />
                        </span>
                        <div className="w-full bg-white border border-slate-300 rounded-lg p-3 flex items-center space-x-6 h-[50px]">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="abono"
                                    className="w-4 h-4 text-ijota-600 focus:ring-ijota-500 border-slate-300 cursor-pointer"
                                    checked={hasAbono}
                                    onChange={() => setHasAbono(true)}
                                />
                                <span className="ml-2 text-slate-900">Sim</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="abono"
                                    className="w-4 h-4 text-ijota-600 focus:ring-ijota-500 border-slate-300 cursor-pointer"
                                    checked={!hasAbono}
                                    onChange={() => setHasAbono(false)}
                                />
                                <span className="ml-2 text-slate-900">Não</span>
                            </label>
                        </div>
                    </div>

                    {/* Adiantar 13º */}
                    <div>
                        <span className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                            Adiantar 1ª Parcela 13º
                            <InfoTooltip text="Receber 50% do 13º junto com as férias." />
                        </span>
                        <div className="w-full bg-white border border-slate-300 rounded-lg p-3 flex items-center space-x-6 h-[50px]">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="13th"
                                    className="w-4 h-4 text-ijota-600 focus:ring-ijota-500 border-slate-300 cursor-pointer"
                                    checked={advance13th}
                                    onChange={() => setAdvance13th(true)}
                                />
                                <span className="ml-2 text-slate-900">Sim</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="13th"
                                    className="w-4 h-4 text-ijota-600 focus:ring-ijota-500 border-slate-300 cursor-pointer"
                                    checked={!advance13th}
                                    onChange={() => setAdvance13th(false)}
                                />
                                <span className="ml-2 text-slate-900">Não</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 mt-8">
                    <button
                        type="button"
                        onClick={handleCalculate}
                        className="bg-ijota-600 hover:bg-ijota-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors flex-1 md:flex-none cursor-pointer"
                    >
                        Calcular
                    </button>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="bg-white hover:bg-slate-100 text-slate-600 border border-slate-300 font-semibold py-3 px-8 rounded-lg transition-colors flex-1 md:flex-none cursor-pointer"
                    >
                        Limpar
                    </button>
                </div>
              </div>
          </section>

          {/* Results Section */}
          <div id="results-section">
            {result && (
              <>
                {/* Print Only Header */}
                <div className="hidden print:block mb-8 text-center">
                    <div className="flex justify-center mb-2 text-ijota-600">
                         <div className="bg-ijota-600 text-white font-bold p-2 rounded-lg text-xl tracking-tighter">iJ</div>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Demonstrativo de Cálculo de Férias</h1>
                    <p className="text-slate-500 text-sm">Gerado por iJota Financeira em {new Date().toLocaleDateString('pt-BR')}</p>
                </div>

                <div className="bg-ijota-900 text-white rounded-xl shadow-2xl overflow-hidden border border-ijota-800 print:bg-white print:text-slate-900 print:shadow-none print:border-2 print:border-slate-200">
                    <div className="p-6 border-b border-ijota-800 bg-ijota-800/50 print:bg-slate-50 print:border-slate-200 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold text-ijota-100 print:text-slate-600">Resultado da Estimativa</h2>
                            <div className="mt-2">
                                <span className="text-sm text-ijota-300 uppercase tracking-wider font-bold print:text-slate-500">Valor Líquido a Receber</span>
                                <div className="text-4xl font-bold text-white mt-1 print:text-slate-900">
                                    {formatCurrency(result.totalNet)}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold text-ijota-400 uppercase tracking-widest border-b border-ijota-800 pb-2 print:text-slate-500 print:border-slate-200">Proventos (Entradas)</h3>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-ijota-100 print:text-slate-600">Férias ({vacationDays} dias) + 1/3</span>
                                <span className="font-mono font-medium print:text-slate-900">{formatCurrency(result.grossVacation)}</span>
                            </div>
                            {result.abonoAmount > 0 && (
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-ijota-100 print:text-slate-600">Abono Pecuniário (10 dias)</span>
                                    <span className="font-mono font-medium print:text-slate-900">{formatCurrency(result.abonoAmount)}</span>
                                </div>
                            )}
                            {result.abonoOneThird > 0 && (
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-ijota-100 print:text-slate-600">1/3 do Abono</span>
                                    <span className="font-mono font-medium print:text-slate-900">{formatCurrency(result.abonoOneThird)}</span>
                                </div>
                            )}
                            {result.advance13th > 0 && (
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-ijota-100 print:text-slate-600">Adiantamento 13º (50%)</span>
                                    <span className="font-mono font-medium print:text-slate-900">{formatCurrency(result.advance13th)}</span>
                                </div>
                            )}
                            <div className="flex justify-between items-center pt-2 border-t border-ijota-800 text-emerald-400 print:border-slate-200 print:text-emerald-700">
                                <span className="font-bold">Total Bruto</span>
                                <span className="font-mono font-bold">{formatCurrency(result.totalGross)}</span>
                            </div>
                        </div>

                        <div className="space-y-3 mt-6">
                            <h3 className="text-xs font-bold text-rose-400 uppercase tracking-widest border-b border-ijota-800 pb-2 print:text-slate-500 print:border-slate-200">Descontos</h3>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-ijota-100 print:text-slate-600">INSS</span>
                                <span className="font-mono font-medium text-rose-300 print:text-rose-700">- {formatCurrency(result.inss)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-ijota-100 print:text-slate-600">IRRF</span>
                                <span className="font-mono font-medium text-rose-300 print:text-rose-700">- {formatCurrency(result.irrf)}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-ijota-800 text-rose-400 print:border-slate-200 print:text-rose-700">
                                <span className="font-bold">Total Descontos</span>
                                <span className="font-mono font-bold">- {formatCurrency(result.totalDiscounts)}</span>
                            </div>
                        </div>
                    </div>
                </div>
              </>
            )}
          </div>

          {/* Info Section - SEO & Help */}
          <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 print:hidden">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Como funciona a Calculadora</h3>
              
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <div>
                  <h4 className="font-bold text-ijota-700 mb-1">1. Salário Bruto</h4>
                  <p>É o valor mensal recebido pelo trabalhador sem descontos. Serve de base para o cálculo das férias e do adicional de 1/3 constitucional.</p>
                </div>
                <div>
                  <h4 className="font-bold text-ijota-700 mb-1">2. Dias de Férias</h4>
                  <p>O trabalhador tem direito a até 30 dias de férias a cada 12 meses. É possível tirar menos dias, e a calculadora ajusta o valor proporcionalmente.</p>
                </div>
                <div>
                  <h4 className="font-bold text-ijota-700 mb-1">3. Horas Extras</h4>
                  <p>Se o trabalhador recebe horas extras regularmente, deve informar a média. Essas horas entram na base do cálculo para garantir o valor correto nas férias.</p>
                </div>
                <div>
                  <h4 className="font-bold text-ijota-700 mb-1">4. Número de Dependentes</h4>
                  <p>Afeta o cálculo do IRRF, pois cada dependente reduz a base de cálculo. Quanto mais dependentes, menor o desconto do imposto.</p>
                </div>
                <div>
                  <h4 className="font-bold text-ijota-700 mb-1">5. Abono Pecuniário</h4>
                  <p>É a conversão de até 10 dias de férias em dinheiro (“venda de férias”). O valor é somado ao pagamento normal das férias.</p>
                </div>
                <div>
                  <h4 className="font-bold text-ijota-700 mb-1">6. Adiantamento da 1ª Parcela do 13º</h4>
                  <p>O trabalhador pode pedir o adiantamento da primeira parcela do 13º junto com o pagamento das férias. Se selecionado, o valor é somado automaticamente ao cálculo final.</p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
                  <p className="font-semibold text-amber-800">Atenção</p>
                  <p className="text-amber-700">Os valores apresentados são estimativas e podem variar conforme regras internas da empresa. Consulte um contador para cálculos precisos.</p>
                </div>
              </div>
          </section>
          
          {/* New Reform Info Section */}
          <ReformaTrabalhistaInfo />

          {/* Reference Tables */}
          <section className="print:block">
            <TaxTables />
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800 print:hidden">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2025 IJota Financeira. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;