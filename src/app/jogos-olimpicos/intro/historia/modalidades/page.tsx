import BotaoVoltar from "../../../../utils/botaoVoltar";

export default function JogosOlimpicosModalidades() {
  const modalidades = [
    { nome: "ATLETISMO", emoji: "🏃", cor: "bg-red-600" },
    { nome: "NATAÇÃO", emoji: "🏊", cor: "bg-blue-600" },
    { nome: "GINÁSTICA", emoji: "🤸", cor: "bg-purple-600" },
    { nome: "FUTEBOL", emoji: "⚽", cor: "bg-green-600" },
    { nome: "BASQUETE", emoji: "🏀", cor: "bg-orange-600" },
    { nome: "VÔLEI", emoji: "🏐", cor: "bg-yellow-600" },
    { nome: "TÊNIS", emoji: "🎾", cor: "bg-pink-600" },
    { nome: "BOXE", emoji: "🥊", cor: "bg-gray-600" },
    { nome: "JUDÔ", emoji: "🥋", cor: "bg-indigo-600" },
  ];

  return (
    <main className="max-h-[100svh] lg:max-h-[100svh] w-[385px] lg:w-[740px] overflow-hidden bg-[#0F1B2A]">
      <div className="min-h-screen flex flex-col p-6 relative">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-[#F7E149] font-black text-3xl mb-2 tracking-wider">MODALIDADES</h1>
          <p className="text-white text-sm">Esportes Olímpicos</p>
          <div className="w-16 h-1 bg-[#F7E149] mx-auto mt-2"></div>
        </div>

        {/* Grid de Modalidades */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-3 gap-3 mb-6">
            {modalidades.map((modalidade, index) => (
              <div key={index} className={`${modalidade.cor} rounded-lg p-3 text-center hover:scale-105 transition-transform duration-200 cursor-pointer`}>
                <div className="text-2xl mb-1">{modalidade.emoji}</div>
                <div className="text-white text-xs font-bold leading-tight">{modalidade.nome}</div>
              </div>
            ))}
          </div>

          {/* Informações adicionais */}
          <div className="bg-[#1a2332] rounded-lg p-4 border-l-4 border-[#F7E149] mb-6">
            <h3 className="text-[#F7E149] font-bold text-lg mb-2">Sabia que...</h3>
            <div className="text-white text-sm space-y-2">
              <p>• Os Jogos Olímpicos de Verão têm mais de 300 eventos</p>
              <p>• Novos esportes são adicionados a cada edição</p>
              <p>• O atletismo é considerado o "coração" das Olimpíadas</p>
              <p>• Cada modalidade tem suas próprias regras e tradições</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <div className="cursor-pointer pl-6 pt-3 pb-3 pr-6 rounded-full text-white bg-transparent border-2 border-[#F7E149] hover:bg-[#F7E149] hover:text-[#0F1B2A] transition-all duration-300">
            <BotaoVoltar href="../">VOLTAR</BotaoVoltar>
          </div>
        </div>
      </div>
    </main>
  );
}
