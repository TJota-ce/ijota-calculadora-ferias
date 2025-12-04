import React from 'react';

export const ReformaTrabalhistaInfo: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mt-8 print:hidden">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-ijota-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
        Férias após a reforma trabalhista, como fica?
      </h3>

      <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
        
        {/* Intro */}
        <p className="font-medium text-slate-900">
          Veja o que mudou após a Reforma Trabalhista em relação às férias.
        </p>

        {/* Parceladas */}
        <div>
          <h4 className="font-bold text-ijota-700 text-base mb-2">Férias parceladas ou férias fracionadas</h4>
          <p className="mb-3">
            O trabalhador poderá usufruir de suas férias em até três vezes ao ano:
          </p>
          <blockquote className="bg-slate-50 border-l-4 border-ijota-400 p-4 italic text-slate-600 mb-3">
            "Havendo concordância do funcionário (empregado) / empresa (empregador), as férias poderão ser usufruídas em até três períodos, sendo que um deles não poderá ser inferior a quatorze dias corridos e os demais não poderão ser inferiores a cinco dias corridos, cada um."
            <span className="block text-xs text-slate-400 font-normal mt-1">(Artigo 134 - § 1o, Redação dada pela Lei nº 13.467 - Fonte: Planalto.gov)</span>
          </blockquote>
          <p className="mb-2">
            Dividir o período de férias em três vezes ao ano é apenas uma alternativa e acordado entre funcionário/empresa mas o funcionário poderá usufruir de 30 dias de férias normalmente caso queira.
          </p>
          <p>
            Com a flexibilização e em comum acordo funcionário/empresa é possível o trabalhador se planejar para uma viagem com os filhos nas férias escolares de poucos dias e depois pegar mais dois períodos de férias.
          </p>
        </div>

        {/* Meio Período */}
        <div>
          <h4 className="font-bold text-ijota-700 text-base mb-2">Férias trabalhadores meio período após a reforma trabalhista</h4>
          <p className="mb-3">
            Os trabalhadores de meio período agora podem tirar 30 dias de férias, com a lei antiga tinham um período de férias menor que o trabalhador de período integral. (Artigo 58-A, § 7º da CLT)
          </p>
          <blockquote className="bg-slate-50 border-l-4 border-ijota-400 p-4 italic text-slate-600 mb-3">
            <p className="mb-2"><strong>Artigo 58-A</strong> - Considera-se trabalho em regime de tempo parcial aquele cuja duração não exceda a trinta horas semanais, sem a possibilidade de horas suplementares semanais, ou, ainda, aquele cuja duração não exceda a vinte e seis horas semanais, com a possibilidade de acréscimo de até seis horas suplementares semanais.</p>
            <p><strong>§ 7o</strong> As férias do regime de tempo parcial são regidas pelo disposto no artigo 130 desta Consolidação.(NR)</p>
            <span className="block text-xs text-slate-400 font-normal mt-1">- Fonte: Planalto.gov</span>
          </blockquote>
          
          <div className="bg-white border border-slate-200 rounded-lg p-4 mt-3">
            <h5 className="font-semibold text-slate-800 mb-2">Artigo 130 – Proporção de Férias por Faltas</h5>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li><strong>30 dias:</strong> até 5 faltas.</li>
              <li><strong>24 dias:</strong> de 6 a 14 faltas.</li>
              <li><strong>18 dias:</strong> de 15 a 23 faltas.</li>
              <li><strong>12 dias:</strong> de 24 a 32 faltas.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">
              § 1º – É vedado descontar, do período de férias, as faltas do empregado ao serviço.<br/>
              § 2º – O período das férias será computado, para todos os efeitos, como tempo de serviço.
            </p>
          </div>
        </div>

        {/* Contrato < 12 meses */}
        <div>
          <h4 className="font-bold text-ijota-700 text-base mb-2">Férias com contrato de trabalho a menos de 12 meses</h4>
          <p>
            Quem tem contrato de trabalho a menos de 12 meses, pode tirar férias também, nesse caso, o período será proporcional ao tempo de trabalho (Artigo 140 da CLT).
          </p>
        </div>

        {/* Abono Pecuniário */}
        <div>
          <h4 className="font-bold text-ijota-700 text-base mb-2">Férias - Abono Pecuniário</h4>
          <p className="mb-2">
            O Abono pecuniário é a conversão em dinheiro de 1/3 (um terço) dos dias de férias a que o empregado tem direito, conhecido também como vender férias. É uma opção ao empregado, independente da concordância do empregador, desde que requerido no prazo estabelecido na legislação trabalhista.
          </p>
          <p className="mb-3 font-semibold text-slate-800">
            Exemplo: Se o empregado tem direito a 30 dias de férias, poderá converter 10 dias em dinheiro e gozar 20 dias de férias.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-50 p-4 rounded-lg">
                <h5 className="font-bold text-slate-700 mb-1">Prazo de Requerimento</h5>
                <p>O empregado deve requerer ao empregador até 15 dias antes do término do período aquisitivo. Após esse prazo, o empregador não é obrigado a aceitar.</p>
             </div>
             <div className="bg-slate-50 p-4 rounded-lg">
                <h5 className="font-bold text-slate-700 mb-1">Pagamento</h5>
                <p>O abono pecuniário deverá ser pago juntamente com a remuneração das férias, até 2 dias antes do início do respectivo período das férias.</p>
             </div>
          </div>
          
          <div className="mt-3">
            <h5 className="font-bold text-slate-700 text-sm">Férias Coletivas</h5>
            <p className="text-slate-600">
              No caso de férias coletivas, a conversão em abono deverá ser objeto de acordo coletivo entre empregador e sindicato, não importando a vontade individual do empregado.
            </p>
          </div>
        </div>

        {/* Adiantamento 13 */}
        <div>
          <h4 className="font-bold text-ijota-700 text-base mb-2">Adiantamento da 1ª parcela do 13º Salário por ocasião das férias</h4>
          <blockquote className="bg-slate-50 border-l-4 border-ijota-400 p-4 italic text-slate-600 mb-3">
             "§ 2º - O adiantamento será pago ao ensejo das férias do empregado, sempre que este o requerer no mês de janeiro do correspondente ano."
             <span className="block text-xs text-slate-400 font-normal mt-1">(LEI 4.749 § 2º - Fonte: Planalto.gov)</span>
          </blockquote>
          <p className="bg-amber-50 p-3 rounded text-amber-800 text-xs border border-amber-200">
            <strong>Encargos sociais:</strong> Sobre o valor do abono pecuniário de férias não há incidência de contribuição previdenciária e FGTS. Todavia, o abono deverá ser adicionado à remuneração das férias para o cálculo IRRF.
          </p>
        </div>

        {/* Férias em Dobro */}
        <div>
           <h4 className="font-bold text-ijota-700 text-base mb-2">Férias em dobro</h4>
           <p className="mb-2">
             A empresa que não conceder férias ao funcionário ou que fizer fora do período aquisitivo é obrigada a pagar o valor das férias em dobro (Artigos 134 e 137 da CLT).
           </p>
           <ul className="list-disc list-inside text-slate-600 mb-2">
             <li><strong>Art. 134:</strong> As férias serão concedidas nos 12 meses subsequentes à data em que o empregado tiver adquirido o direito.</li>
             <li><strong>Art. 137:</strong> Sempre que as férias forem concedidas após o prazo, o empregador pagará em dobro a respectiva remuneração.</li>
           </ul>
        </div>

        {/* História */}
        <div className="border-t border-slate-100 pt-4">
           <h4 className="font-bold text-slate-600 text-sm mb-2 uppercase tracking-wide">Sobre a criação do direito de férias</h4>
           <p className="text-slate-500 text-xs">
             A CLT (Consolidação das Leis do Trabalho) foi criada através do Decreto-Lei nº 5.452 e sancionada pelo presidente Getúlio Vargas durante o período do Estado Novo. Nela foi estabelecida a Carteira de Trabalho, o salário mínimo, jornada diária máxima de 8 horas, direito a férias remuneradas anuais, descanso semanal, entre outros direitos fundamentais.
           </p>
        </div>

      </div>
    </section>
  );
};