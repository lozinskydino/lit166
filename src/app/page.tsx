import BotaoAvancar from "./utils/botaoAvancar";
import Image from "next/image";
import imagemAbertura from "@/app/assets/abertura.svg";

export default function Home() {
  return (
    <main className="max-h-[100svh] lg:max-h-[100svh] w-[385px] lg:w-[740px] overflow-hidden">
      <div className="min-h-screen flex justify-center pr-4 pl-4">
        <div className="w-[10%] flex flex-col justify-center items-center self-center">
          {"HUMANISMO".split("").map((char, i) => (
            <span key={i} className="adamina title-heavy leading-none text-[9.1vh] text-center">
              {char}
            </span>
          ))}
        </div>

        <div className="w-[65%] lg:w-[35%]">
          <Image className="w-[30%] z-0 place-self-end" src={imagemAbertura} alt="" width={600} height={400} />
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="absolute bottom-4 lg:bottom-12 right-12 lg:right-36 flex flex-col gap-3">
        {/* Botão Literatura */}
        <div className="cursor-pointer pl-4 pt-2 pb-2 pr-8 rounded-tr-full rounded-br-full text-[#8F573B] bg-[#EEE5DA] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]">
          <BotaoAvancar href="./pageIntro">LITERATURA</BotaoAvancar>
        </div>

        {/* Botão Jogos Olímpicos */}
        <div className="cursor-pointer pl-4 pt-2 pb-2 pr-8 rounded-tr-full rounded-br-full text-[#EEE5DA] bg-[#0F1B2A] hover:text-[#0F1B2A] hover:bg-[#F7E149] hover:border-2 hover:border-[#0F1B2A]">
          <BotaoAvancar href="./jogos-olimpicos">OLIMPÍADAS</BotaoAvancar>
        </div>
      </div>
    </main>
  );
}
