import BotaoAvancar from "@/app/utils/botaoAvancar";
import BotaoVoltar from "@/app/utils/botaoVoltar";

export default function ImpulsoPage() {
  return (
    <main className="min-h-screen w-full max-w-[393px] flex flex-col items-center">
      <div className="bg-transparent border border-white rounded-[15px] w-full max-w-[347px] mt-[55px]">
        <p className="text-white font-lato text-sm leading-[1.71] p-[10px] max-w-[291px] mx-auto">
          Impulso é uma palavra que estamos acostumados. Quando fazemos algo sem pensar, dizemos que agimos por impulso. Na Física, o impulso é a ação realizada por uma força em um intervalo de tempo e, geralmente, esse intervalo de tempo é muito curto! Bem, podemos analisar as grandezas e dizer que, quanto maior o tempo, maior o impulso, assim quanto maior a força. Neste infográfico vamos ver tipos de impulso que são realizados muito rapidamente, mas que são fundamentais para esse contexto: o esporte. No esporte, muitas modalidades têm como principal ação a aplicação de uma força para gerar
          impulso, e é isso que vamos analisar. Para contextualizar, vamos olhar esses esportes no contexto dos Jogos Olímpicos, no ano de estreia nos jogos mais esperados do mundo todo!
        </p>
      </div>

      <div className="flex justify-between w-full max-w-[361px] mt-auto mb-12">
        <div className="w-[164px] h-[67px] border border-white rounded-[15px] flex items-center justify-center bg-transparent hover:bg-[#F7E149] hover:border-[#F7E149] group transition-all duration-300">
          <BotaoVoltar href="../jogos-olimpicos">
            <span className="text-white group-hover:text-[#0F1B2A] font-league-spartan font-extrabold text-2xl">VOLTAR</span>
          </BotaoVoltar>
        </div>
        <div className="w-[164px] h-[67px] border border-white rounded-[15px] flex items-center justify-center bg-transparent hover:bg-[#F7E149] hover:border-[#F7E149] group transition-all duration-300">
          <BotaoAvancar href="./timeline">
            <span className="text-white group-hover:text-[#0F1B2A] font-league-spartan font-extrabold text-2xl">AVANÇAR</span>
          </BotaoAvancar>
        </div>
      </div>
    </main>
  );
}
