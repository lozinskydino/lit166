'use client';
import React, { Suspense } from 'react';
import SubCaract from '../components/SubCaract';
import SubPoesia from '../components/SubPoesia';
import SubGil1 from '../components/SubGil1';
import SubGil2 from '../components/SubGil2';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'

const arrayTextos = [
    { id: 1, componente: <SubCaract /> },
    { id: 2, componente: <SubPoesia /> },
    { id: 3, componente: <SubGil1 /> },
    { id: 4, componente: <SubGil2 /> }
];

const PageSubTextoContent = () => {
    const searchParams = useSearchParams();
    const idLink: number = Number(searchParams.get('id')) || 0;
   
    
    return (
        <div className='ml-[2svh] mr-[2svh] pt-8 min-h-[70vh] lg:min-h-[74vh]'>
            <div>
                {arrayTextos.map((texto, index) => (
                    idLink === index && <div key={texto.id}>{texto.componente}</div>
                ))

                }
            </div>
        </div>
    );
};

const PageSubTexto = () => {
    const router = useRouter();

    return (

        <main className='pb-8 flex flex-col place-content-center min-h-screen bg-[#8F573B] lg:min-h-screen w-[100%] lg:w-[740px]'>

            <Suspense fallback={<div>Carregando...</div>}>
                <PageSubTextoContent />
            </Suspense>

            <div className='flex justify-center w-full mt-16 lg:mt-34'>
                <div className='cursor-pointer pl-10 pt-4 pb-4 pr-10 rounded-full text-[#8F573B] bg-[#EEE5DA] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
                    <button className='NotoSans-Light cursor-pointer' type="button" onClick={() => router.back()}>
                        VOLTAR
                    </button>
                </div>
            </div>
        </main>
    );
};

export default PageSubTexto;
