'use client';
import React, { Suspense } from 'react';
import BotaoVoltar from '../utils/botaoVoltar';
import ContHis from '../components/ContHis';
import Economia from '../components/Economia';
import MudCult from '../components/MudCult';
import Caracteristicas from '../components/Caracteristicas';
import Portugal from '../components/Portugal';
import Fernao from '../components/Fernao';
import Poesia from '../components/Poesia';
import Gil from '../components/Gil';
import { useSearchParams } from 'next/navigation';

const arrayTextos = [
    { id: 1, componente: <ContHis /> },
    { id: 2, componente: <Economia /> },
    { id: 3, componente: <MudCult /> },
    { id: 4, componente: <Caracteristicas /> },
    { id: 5, componente: <Portugal /> },
    { id: 6, componente: <Fernao /> },
    { id: 7, componente: <Poesia /> },
    { id: 8, componente: <Gil /> },
];

const PageTextosContent = () => {
    const searchParams = useSearchParams();
    const idLink: number = Number(searchParams.get('id')) || 0;

    return (
        <div className='pb-28 mt-[2vh] ml-[3svh] mr-[3svh] lg:ml-[15svh] lg:mr-[15svh] pt-8 border-[#8F573B] border-2 rounded-bl-full rounded-br-full min-h-[70vh] lg:min-h-[74vh]'>
            <div>
                {arrayTextos.map((texto, index) => (
                    idLink === index && <div key={texto.id}>{texto.componente}</div>
                ))}
            </div>
        </div>
    );
};

const PageTextos = () => {
    return (
        <main className='pb-8 flex flex-col place-content-center min-h-screen bg-[#EEE5DA] lg:min-h-screen w-[100%] lg:w-[740px]'>

            <Suspense fallback={<div>Carregando...</div>}>
                <PageTextosContent />
            </Suspense>

            <div className='flex justify-center w-full mt-16 lg:mt-34'>
                <div className='cursor-pointer pl-10 pt-2 pb-2 pr-10 rounded-full text-[#EEE5DA] bg-[#8F573B] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
                    <BotaoVoltar href="../pageInfo">VOLTAR</BotaoVoltar>
                </div>
            </div>
        </main>
    );
};

export default PageTextos;
