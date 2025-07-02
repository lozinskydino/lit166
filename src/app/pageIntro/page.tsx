import React from 'react'
import BotaoAvancar from '../utils/botaoAvancar'
import BotaoVoltar from '../utils/botaoVoltar'


const pageIntro = () => {
    return (
        <main className='relative min-h-screen lg:min-h-screen w-[385px] lg:w-[740px] md:min-h-screen overflow-hidden'>
            <div className='mt-[11svh] ml-[3svh] mr-[3svh] lg:ml-[15svh] lg:mr-[15svh] pt-8 border-[#EEE5DA] border-2 rounded-bl-full rounded-br-full min-h-[70vh] lg:min-h-[74vh] NotoSans-Light text-[#EEE5DA] pl-8 pr-8'>

                <div>
                    <p className='mb-4'>Durante o Renascimento, o Humanismo português teve papel significativo no desenvolvimento da literatura, como na renovação da linguagem, na valorização da cultura clássica e na expansão dos temas literários. </p>
                    <p className='mb-4'>Assim, o estudo do Humanismo é de grande importância e deixou um legado duradouro nos textos de língua portuguesa e na forma como a literatura é hoje realizada e apreciada. </p>
                    <p className='mb-4'>Que tal fazermos um passeio ao passado para entendermos a literatura hoje? </p>
                </div>
            </div>
            <div className='absolute bottom-[4svh] flex justify-around w-full mt-11 lg:mt-22 text-[#C4E5C9]'>
                <div className='pl-8 pt-2 pb-2 pr-4 rounded-tl-full rounded-bl-full text-[#8F573B] bg-[#EEE5DA] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
                    <BotaoVoltar href="../">VOLTAR</BotaoVoltar>
                </div>
                <div className='pl-4 pt-2 pb-2 pr-8 rounded-tr-full rounded-br-full text-[#8F573B] bg-[#EEE5DA] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
                    <BotaoAvancar href="./pageInfo">AVANÇAR</BotaoAvancar>
                </div>
            </div>

        </main>
    )
}

export default pageIntro