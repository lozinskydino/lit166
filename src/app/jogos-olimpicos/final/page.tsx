"use client";

import BotaoAvancar from "@/app/utils/botaoAvancar";
import BotaoVoltar from "@/app/utils/botaoVoltar";

export default function FinalPage() {
  return (
    <main className="min-h-screen w-full max-w-[393px] flex flex-col items-center relative">
      <div className="w-[347px] h-[377px] border border-white rounded-[15px] relative mt-[55px]">
        <p className="font-lato text-[14px] leading-[1.714] text-white absolute left-[28px] top-[36.89px] w-[291px]">
          Não é incrível como muitos dos assuntos que estudamos estão profundamente relacionados no nosso cotidiano e, às vezes, não percebemos? Sabemos que os esportes nos encantam, os pontos, os gols, as apresentações...
          {"\n\n"}
          Neste infográfico, vimos o quanto um fenômeno físico é crucial para uma variedade de esportes diferentes. Agora é com você! Pense em mais esportes que aplicam uma força por um determinado tempo, causando um impulso e, consequentemente, um movimento.
        </p>
      </div>

      <div className="flex justify-between w-full max-w-[361px] absolute bottom-12">
        <div className="w-[164px] h-[67px] border border-white rounded-[15px] flex items-center justify-center bg-transparent hover:bg-[#F7E149] hover:border-[#F7E149] group transition-all duration-300">
          <BotaoVoltar href="/jogos-olimpicos/timeline">
            <span className="text-white group-hover:text-[#0F1B2A] font-league-spartan font-extrabold text-2xl">VOLTAR</span>
          </BotaoVoltar>
        </div>
        <div className="w-[164px] h-[67px] border border-white rounded-[15px] flex items-center justify-center bg-transparent hover:bg-[#F7E149] hover:border-[#F7E149] group transition-all duration-300">
          <BotaoAvancar href="/">
            <span className="text-white group-hover:text-[#0F1B2A] font-league-spartan font-extrabold text-2xl">INÍCIO</span>
          </BotaoAvancar>
        </div>
      </div>
    </main>
  );
}
