import Image from "next/image";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    text1: string;
    text2: string;
    images: {
      src: string;
      alt: string;
    }[];
  };
}

export default function Modal({ isOpen, onClose, title, content }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0F1B2A] overflow-y-auto">
        <div className="min-h-screen w-full max-w-[393px] mx-auto flex flex-col items-center py-[79px] px-[15px] gap-[30px]">
          {/* Título */}
          <h1 className="text-white font-league-spartan font-black text-[32px] leading-[1.15625] text-center w-[285px] h-[73px] flex items-center justify-center">{title}</h1>

          {/* Primeira imagem */}
          <div className="w-[427px] h-[284px] relative">
            <Image src={content.images[0].src} alt={content.images[0].alt} fill className="object-cover" />
          </div>

          {/* Primeiro texto */}
          <div className="w-[311px] h-[335px] flex items-center">
            <p className="font-lato text-[14px] leading-[1.714] text-white">{content.text1}</p>
          </div>

          {/* Segunda imagem */}
          <div className="w-[459px] h-[298px] relative">
            <Image src={content.images[1].src} alt={content.images[1].alt} fill className="object-cover" />
          </div>

          {/* Segundo texto (se houver) */}
          {content.text2 && (
            <div className="w-[311px] h-[161px] flex items-center">
              <p className="font-lato text-[14px] leading-[1.714] text-white">{content.text2}</p>
            </div>
          )}

          {/* Terceira imagem (com espaçamento ajustado) */}
          <div className={`w-[413px] h-[275px] relative ${content.text2 ? "" : "mt-[30px]"}`}>
            <Image src={content.images[2].src} alt={content.images[2].alt} fill className="object-cover" />
          </div>

          {/* Botão Voltar */}
          <div className="w-[164px] h-[67px] border border-white rounded-[15px] flex items-center justify-center bg-transparent hover:bg-[#F7E149] hover:border-[#F7E149] group transition-all duration-300 cursor-pointer" onClick={onClose}>
            <span className="text-white group-hover:text-[#0F1B2A] font-league-spartan font-extrabold text-2xl">VOLTAR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
