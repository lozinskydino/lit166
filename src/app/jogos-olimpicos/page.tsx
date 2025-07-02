import BotaoAvancar from "../utils/botaoAvancar";
import Image from "next/image";
import impulsoLogo from "@/app/assets/impulso-logo.svg";

export default function JogosOlimpicos() {
  return (
    <main className="max-h-[100svh] lg:max-h-[100svh] w-[385px] lg:w-[740px] overflow-hidden bg-[#0F1B2A]">
      <div className="min-h-screen flex flex-col items-center relative">
        {/* Logo Impulso */}
        <div className="w-[280px] h-[334px] mt-auto">
          <Image src={impulsoLogo} alt="Logo Impulso" width={280} height={334} priority />
        </div>

        {/* Botão INICIAR */}
        <div className="cursor-pointer mt-auto mb-12">
          <div className="w-[283px] h-[75px] border border-white rounded-[15px] flex items-center justify-center bg-transparent hover:bg-[#F7E149] hover:border-[#F7E149] group transition-all duration-300">
            <BotaoAvancar href="./jogos-olimpicos/impulso">
              <span className="text-white group-hover:text-[#0F1B2A] font-black text-2xl tracking-wider">INICIAR</span>
            </BotaoAvancar>
          </div>
        </div>
      </div>
    </main>
  );
}
