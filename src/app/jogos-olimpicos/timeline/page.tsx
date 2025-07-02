"use client";

import BotaoAvancar from "@/app/utils/botaoAvancar";
import BotaoVoltar from "@/app/utils/botaoVoltar";
import Modal from "@/app/components/Modal";
import { useState } from "react";

interface TimelineItemProps {
  year: string;
  location: string;
  align?: "left" | "right";
  isFirst?: boolean;
}

export default function TimelinePage() {
  const [isBasketballModalOpen, setIsBasketballModalOpen] = useState(false);
  const [isVolleyballModalOpen, setIsVolleyballModalOpen] = useState(false);

  const basketballModalContent = {
    title: "IMPULSO NO BASQUETE",
    text1: "O impulso é um recurso fundamental para uma boa performance em quadra, já que o objetivo é acertar a bola em um aro que está a mais de 3 metros de altura. O impulso consiste na força aplicada pelo corpo do atleta no intervalo de tempo em que os pés dele ficam em contato com o solo. O jogo consiste em quatro tempos de 10 minutos cada, com 5 jogadores em cada time. Além disso, pela dinâmica do esporte, um jogo pode ter resultado alternado nos segundos finais, o que o torna mais emocionante. Nos Jogos Olímpicos, o basquete iniciou em 1936, em Berlim.",
    text2: "O treino de impulso dos jogadores é um dos mais importantes, praticando saltos, velocidade e força para que o impulso seja cada vez maior. Afinal, quanto maior a força, maior o impulso. Com isso, os atletas conseguem saltar a uma altura maior que 1 m.",
    images: [
      {
        src: "/basket-stadium.png",
        alt: "Estádio de basquete",
      },
      {
        src: "/basket-player-1.png",
        alt: "Jogador de basquete realizando um arremesso",
      },
      {
        src: "/basket-player-2.png",
        alt: "Jogadores de basquete treinando",
      },
    ],
  };

  const volleyballModalContent = {
    title: "IMPULSO NO VÔLEI",
    text1:
      "O vôlei, praticado em uma quadra em que os adversários não têm contato físico, é formado por 2 times com 6 integrantes em cada. Disputado em, no mínimo, 3 sets de 25 pontos, o vôlei já estava presente nas Olimpíadas desde 1964, em Tóquio. O esporte encanta com saques a velocidades de até 130 km/h e ataques na rede com saltos incríveis de, em média, 44 cm de altura! Além do impulso que o atleta dá na bola, aplicando uma força em um pequeno intervalo de tempo, até o momento em que ela perde o contato com as mãos, razão pela velocidade que a bola adquire em seguida, os atletas se impulsionam no chão para que, com uma maior altura, tenham o melhor tempo de bola e de ataque que os adversários.",
    text2: "",
    images: [
      {
        src: "/volei-1.png",
        alt: "Quadra de vôlei",
      },
      {
        src: "/volei-2.png",
        alt: "Jogador de vôlei realizando um saque",
      },
      {
        src: "/volei-3.png",
        alt: "Jogadores de vôlei em ação",
      },
    ],
  };

  return (
    <main className="min-h-screen w-full max-w-[393px] flex flex-col items-center py-[30px] px-4">
      {/* Título */}
      <div className="w-[259px] h-[124px] bg-[#F7E149] rounded-[18px] relative mb-[97px]">
        <h1 className="text-[#0F1B2A] font-league-spartan font-extrabold text-[36px] leading-[0.97] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px]">
          JOGOS
          <br />
          OLÍMPICOS
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative w-[351px] h-[1351px] mb-[100px]">
        {/* Linha pontilhada vertical */}
        <div className="absolute left-1/2 top-[62px] h-[1226px] w-[10px] border-l-[10px] border-dashed border-white transform -translate-x-1/2" style={{ borderLeftWidth: "10px", borderStyle: "dashed", borderSpacing: "17px" }}></div>

        {/* Círculos e textos */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {/* 1936 BERLIM */}
          <div className="relative">
            <div className="absolute right-[145px] top-[25px] text-white font-league-spartan text-right pt-5">
              <div className="text-[32px] font-extrabold leading-[30px]">1936</div>
              <div className="text-[24px] font-normal leading-[30px]">BERLIM</div>
            </div>
            <div className="w-[125px] h-[125px] bg-[#F7E149] rounded-full border-2 border-white animate-pulse-border-1 cursor-pointer" onClick={() => setIsBasketballModalOpen(true)} />
          </div>

          {/* 1964 TÓQUIO */}
          <div className="relative mt-[117px]">
            <div className="absolute left-[145px] top-[25px] text-white font-league-spartan text-left pt-5">
              <div className="text-[32px] font-extrabold leading-[30px]">1964</div>
              <div className="text-[24px] font-normal leading-[30px]">TÓQUIO</div>
            </div>
            <div className="w-[125px] h-[125px] bg-[#F7E149] rounded-full border-2 border-white animate-pulse-border-2 cursor-pointer" onClick={() => setIsVolleyballModalOpen(true)} />
          </div>

          {/* 1976 MONTREAL */}
          <div className="relative mt-[117px]">
            <div className="absolute right-[145px] top-[25px] text-white font-league-spartan text-right pt-5">
              <div className="text-[32px] font-extrabold leading-[30px]">1976</div>
              <div className="text-[24px] font-normal leading-[30px]">MONTREAL</div>
            </div>
            <div className="w-[125px] h-[125px] bg-[#F7E149] rounded-full border-2 border-white animate-pulse-border-3" />
          </div>

          {/* 1990 PARIS */}
          <div className="relative mt-[117px]">
            <div className="absolute left-[145px] top-[25px] text-white font-league-spartan text-left pt-5">
              <div className="text-[32px] font-extrabold leading-[30px]">1990</div>
              <div className="text-[24px] font-normal leading-[30px]">PARIS</div>
            </div>
            <div className="w-[125px] h-[125px] bg-[#F7E149] rounded-full border-2 border-white animate-pulse-border-4" />
          </div>

          {/* 1996 ATLANTA */}
          <div className="relative mt-[117px]">
            <div className="absolute right-[145px] top-[25px] text-white font-league-spartan text-right pt-5">
              <div className="text-[32px] font-extrabold leading-[30px]">1996</div>
              <div className="text-[24px] font-normal leading-[30px]">ATLANTA</div>
            </div>
            <div className="w-[125px] h-[125px] bg-[#F7E149] rounded-full border-2 border-white animate-pulse-border-5" />
          </div>

          {/* 2024 PARIS */}
          <div className="relative mt-[117px]">
            <div className="absolute left-[145px] top-[25px] text-white font-league-spartan text-left pt-5">
              <div className="text-[32px] font-extrabold leading-[30px]">2024</div>
              <div className="text-[24px] font-normal leading-[30px]">PARIS</div>
            </div>
            <div className="w-[125px] h-[125px] bg-[#F7E149] rounded-full border-2 border-white animate-pulse-border-6" />
          </div>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="flex justify-between w-full max-w-[361px] mb-12">
        <div className="w-[164px] h-[67px] border border-white rounded-[15px] flex items-center justify-center bg-transparent hover:bg-[#F7E149] hover:border-[#F7E149] group transition-all duration-300">
          <BotaoVoltar href="/jogos-olimpicos/impulso">
            <span className="text-white group-hover:text-[#0F1B2A] font-league-spartan font-extrabold text-2xl">VOLTAR</span>
          </BotaoVoltar>
        </div>
        <div className="w-[164px] h-[67px] border border-white rounded-[15px] flex items-center justify-center bg-transparent hover:bg-[#F7E149] hover:border-[#F7E149] group transition-all duration-300">
          <BotaoAvancar href="/jogos-olimpicos/final">
            <span className="text-white group-hover:text-[#0F1B2A] font-league-spartan font-extrabold text-2xl">AVANÇAR</span>
          </BotaoAvancar>
        </div>
      </div>

      {/* Modais */}
      <Modal isOpen={isBasketballModalOpen} onClose={() => setIsBasketballModalOpen(false)} title={basketballModalContent.title} content={basketballModalContent} />
      <Modal isOpen={isVolleyballModalOpen} onClose={() => setIsVolleyballModalOpen(false)} title={volleyballModalContent.title} content={volleyballModalContent} />
    </main>
  );
}
