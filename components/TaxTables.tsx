import React from 'react';

export const TaxTables: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mt-8 print:break-inside-avoid print:shadow-none print:border-slate-300">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-ijota-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
        Tabelas de Referência (2025)
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* INSS Table */}
        <div>
          <h4 className="font-bold text-ijota-700 mb-3 border-b border-slate-200 pb-2">Tabela INSS (Progressiva)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-3 py-2 rounded-l-lg">Salário de Contribuição</th>
                  <th className="px-3 py-2 rounded-r-lg text-right">Alíquota</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-3 py-2 text-slate-700">Até R$ 1.518,00</td>
                  <td className="px-3 py-2 text-right font-medium text-slate-900">7,5%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-slate-700">De R$ 1.518,01 a R$ 2.793,88</td>
                  <td className="px-3 py-2 text-right font-medium text-slate-900">9%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-slate-700">De R$ 2.793,89 a R$ 4.190,83</td>
                  <td className="px-3 py-2 text-right font-medium text-slate-900">12%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-slate-700">De R$ 4.190,84 a R$ 8.157,41</td>
                  <td className="px-3 py-2 text-right font-medium text-slate-900">14%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">* Teto do INSS: R$ 951,63 (valor máximo descontado).</p>
        </div>

        {/* IRRF Table */}
        <div>
          <h4 className="font-bold text-ijota-700 mb-3 border-b border-slate-200 pb-2">Tabela IRRF</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-3 py-2 rounded-l-lg">Base de Cálculo</th>
                  <th className="px-3 py-2 text-right">Alíquota</th>
                  <th className="px-3 py-2 rounded-r-lg text-right">Dedução</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-3 py-2 text-slate-700">Até R$ 2.259,20</td>
                  <td className="px-3 py-2 text-right font-medium text-slate-900">-</td>
                  <td className="px-3 py-2 text-right text-slate-500">Isento</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-slate-700">De R$ 2.259,21 a R$ 2.826,65</td>
                  <td className="px-3 py-2 text-right font-medium text-slate-900">7,5%</td>
                  <td className="px-3 py-2 text-right text-slate-500">R$ 169,44</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-slate-700">De R$ 2.826,66 a R$ 3.751,05</td>
                  <td className="px-3 py-2 text-right font-medium text-slate-900">15%</td>
                  <td className="px-3 py-2 text-right text-slate-500">R$ 381,44</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-slate-700">De R$ 3.751,06 a R$ 4.664,68</td>
                  <td className="px-3 py-2 text-right font-medium text-slate-900">22,5%</td>
                  <td className="px-3 py-2 text-right text-slate-500">R$ 662,77</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-slate-700">Acima de R$ 4.664,68</td>
                  <td className="px-3 py-2 text-right font-medium text-slate-900">27,5%</td>
                  <td className="px-3 py-2 text-right text-slate-500">R$ 896,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">* Dedução por dependente: R$ 189,59.</p>
        </div>
      </div>
    </div>
  );
};