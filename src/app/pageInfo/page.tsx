'use client'
import React from 'react'
import Image from 'next/image';
import Info1 from '@/app/assets/icon1.svg'
import Info2 from '@/app/assets/icon2.svg'
import Info3 from '@/app/assets/icon3.svg'
import Info4 from '@/app/assets/icon4.svg'
import Info5 from '@/app/assets/icon5.svg'
import Info6 from '@/app/assets/icon6.svg'
import Info7 from '@/app/assets/icon7.svg'
import Info8 from '@/app/assets/icon8.svg'
import Tracado from '@/app/assets/tracado.svg'
import Fundo from '../assets/fundoInfo.svg'
import BotaoAvancar from '../utils/botaoAvancar'
import BotaoVoltar from '../utils/botaoVoltar'
import { useRouter } from 'next/navigation';


const PageInfo = () => {
    const router = useRouter();

    const clickLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const idLink = event.currentTarget.getAttribute('id');
        router.push(`/pageTextos?id=${idLink}`); // Redireciona com o ID na URL
    }
    return (
        <div className="w-screen h-[100svh] overflow-x-auto ">
            <main className="relative w-[1240px] lg:w-[1600px] h-full pt-2">
                {/* Fundo */}
                <div
                    className="absolute lg:left-12 top-0 h-full w-full -z-10"
                    style={{
                        backgroundImage: `url(${Fundo.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'left center',
                    }}
                />

                <div
                    className="absolute top-0 left-[19svh] lg:left-[23svh] h-full w-[140svh] -z-10"
                    style={{
                        backgroundImage: `url(${Tracado.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'left center',
                    }}
                />

                {/* Conteúdo do infográfico */}
                <div className='w-[100%] h-[100%]'>

                    <a href="" id="0" onClick={clickLink} className='absolute left-[22svh] top-[18svh] lg:top-[22svh] z-10'>
                        <Image className='playAnima' src={Info1} alt='' width={100} height={100} />
                    </a>

                    <a href="" id="1" onClick={clickLink} className='absolute left-[23svh] lg:left-[32svh] bottom-[15svh] z-10 ml-24'>
                        <Image className='playAnima w-[100%]' src={Info2} alt='' width={100} height={100} />
                    </a>

                    <a href="" id="2" onClick={clickLink} className='absolute left-[55svh] lg:left-[59svh] top-[17svh] z-10 lg:mr-[24%]'>
                        <Image className='playAnima w-[11svh]' src={Info3} alt='' width={100} height={100} />
                    </a>

                    <a href="" id="3" onClick={clickLink} className='absolute left-[68svh] lg:left-[75svh] top-[14svh] z-10 ml-24'>
                        <Image className='playAnima w-[10svh]' src={Info4} alt='' width={80} height={80} />
                    </a>

                    <a href="" id="4" onClick={clickLink} className='absolute left-[65svh] lg:left-[73svh] top-[64svh] z-10 ml-24'>
                        <Image className='playAnima w-[18svh]' src={Info5} alt='' width={160} height={160} />
                    </a>

                    <a href="" id="5" onClick={clickLink} className='absolute left-[101svh] lg:left-[109svh] top-[19svh] z-10 ml-24'>
                        <Image className='playAnima w-[12svh]' src={Info6} alt='' width={100} height={100} />
                    </a>

                    <a href="" id="6" onClick={clickLink} className='absolute left-[115.5svh] lg:left-[123svh] top-[65svh] z-10 ml-24'>
                        <Image className='playAnima w-[15svh]' src={Info7} alt='' width={130} height={130} />
                    </a>

                    <a href="" id="7" onClick={clickLink} className='absolute left-[135svh] lg:left-[142svh] top-[40svh] z-10 ml-24'>
                        <Image className='playAnima w-[20svh]' src={Info8} alt='' width={150} height={150} />
                    </a>
                </div>

                {/* Botões de navegação */}
                <div className='absolute lg:left-[5svh] bottom-[14svh] w-[1600px] flex justify-around w-full text-[#C4E5C9] gap-[100svh]'>
                    <div className='pl-9 pt-2 pb-2 pr-4 rounded-tl-full rounded-bl-full text-[#8F573B] bg-[#EEE5DA] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
                        <BotaoVoltar href="../pageIntro">VOLTAR</BotaoVoltar>
                    </div>
                    <div className='pl-4 pt-2 pb-2 pr-8 rounded-tr-full rounded-br-full text-[#8F573B] bg-[#EEE5DA] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
                        <BotaoAvancar href="./pageConclusao">AVANÇAR</BotaoAvancar>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PageInfo