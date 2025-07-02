import BotaoAvancar from "../../utils/botaoAvancar";
import BotaoVoltar from "../../utils/botaoVoltar";

export default function JogosOlimpicosIntro() {
  return (
    <main className="max-h-[100svh] lg:max-h-[100svh] w-[385px] lg:w-[740px] overflow-hidden bg-[#0F1B2A]">
      <div className="min-h-screen flex flex-col justify-center items-center p-8 relative">
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-[#F7E149] font-black text-4xl mb-4 tracking-wider">JOGOS OLÍMPICOS</h1>
          <h2 className="text-white font-bold text-2xl">Uma Jornada Histórica</h2>
        </div>

        {/* Conteúdo */}
        <div className="text-white text-center max-w-md mb-12 space-y-4">
          <p className="text-lg leading-relaxed">Desde a antiguidade até os tempos modernos, os Jogos Olímpicos representam o maior espetáculo esportivo do mundo.</p>
          <p className="text-lg leading-relaxed">Descubra a história, os valores e o impacto cultural desta celebração única da humanidade.</p>
        </div>

        {/* Botões de navegação */}
        <div className="flex justify-between items-center w-full max-w-md">
          <div className="cursor-pointer pl-4 pt-2 pb-2 pr-8 rounded-tr-full rounded-br-full text-white bg-transparent border border-white hover:bg-white hover:text-[#0F1B2A] transition-all duration-300">
            <BotaoVoltar href="../jogos-olimpicos">VOLTAR</BotaoVoltar>
          </div>

          <div className="cursor-pointer pl-4 pt-2 pb-2 pr-8 rounded-tl-full rounded-bl-full text-[#0F1B2A] bg-[#F7E149] hover:bg-white transition-all duration-300">
            <BotaoAvancar href="./historia">CONTINUAR</BotaoAvancar>
          </div>
        </div>
      </div>
    </main>
  );
}
