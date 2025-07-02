import BotaoAvancar from "../../../utils/botaoAvancar";
import BotaoVoltar from "../../../utils/botaoVoltar";

export default function JogosOlimpicosHistoria() {
  return (
    <main className="max-h-[100svh] lg:max-h-[100svh] w-[385px] lg:w-[740px] overflow-hidden bg-[#0F1B2A]">
      <div className="min-h-screen flex flex-col justify-center p-6 relative">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-[#F7E149] font-black text-3xl mb-2 tracking-wider">HISTÓRIA OLÍMPICA</h1>
          <div className="w-16 h-1 bg-[#F7E149] mx-auto"></div>
        </div>

        {/* Timeline Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-white">
          {/* Grécia Antiga */}
          <div className="bg-[#1a2332] rounded-lg p-4 border-l-4 border-[#F7E149]">
            <h3 className="text-[#F7E149] font-bold text-lg mb-2">776 a.C. - Grécia Antiga</h3>
            <p className="text-sm leading-relaxed">Os primeiros Jogos Olímpicos foram realizados em Olímpia, na Grécia, em honra ao deus Zeus. Duraram quase 12 séculos.</p>
          </div>

          {/* Era Moderna */}
          <div className="bg-[#1a2332] rounded-lg p-4 border-l-4 border-[#F7E149]">
            <h3 className="text-[#F7E149] font-bold text-lg mb-2">1896 - Era Moderna</h3>
            <p className="text-sm leading-relaxed">Pierre de Coubertin reviveu os Jogos Olímpicos. As primeiras Olimpíadas modernas foram realizadas em Atenas.</p>
          </div>

          {/* Valores Olímpicos */}
          <div className="bg-[#1a2332] rounded-lg p-4 border-l-4 border-[#F7E149]">
            <h3 className="text-[#F7E149] font-bold text-lg mb-2">Valores Olímpicos</h3>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <div className="text-[#F7E149] font-bold">EXCELÊNCIA</div>
              </div>
              <div className="text-center">
                <div className="text-[#F7E149] font-bold">AMIZADE</div>
              </div>
              <div className="text-center">
                <div className="text-[#F7E149] font-bold">RESPEITO</div>
              </div>
            </div>
          </div>

          {/* Símbolo */}
          <div className="bg-[#1a2332] rounded-lg p-4 border-l-4 border-[#F7E149]">
            <h3 className="text-[#F7E149] font-bold text-lg mb-2">Os Cinco Anéis</h3>
            <p className="text-sm leading-relaxed">Representam a união dos cinco continentes e o encontro de atletas do mundo inteiro nos Jogos Olímpicos.</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <div className="cursor-pointer pl-4 pt-2 pb-2 pr-8 rounded-tr-full rounded-br-full text-white bg-transparent border border-white hover:bg-white hover:text-[#0F1B2A] transition-all duration-300">
            <BotaoVoltar href="../">VOLTAR</BotaoVoltar>
          </div>

          <div className="cursor-pointer pl-4 pt-2 pb-2 pr-8 rounded-tl-full rounded-bl-full text-[#0F1B2A] bg-[#F7E149] hover:bg-white transition-all duration-300">
            <BotaoAvancar href="./modalidades">MODALIDADES</BotaoAvancar>
          </div>
        </div>
      </div>
    </main>
  );
}
