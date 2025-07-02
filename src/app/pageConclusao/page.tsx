import React from 'react'

import BotaoAvancar from '../utils/botaoAvancar'
import BotaoVoltar from '../utils/botaoVoltar'


const pageConclusao = () => {
    return (
        <main className='pb-8 flex flex-col h-[102svh] bg-[#EEE5DA] lg:min-h-screen w-[100%] lg:w-[740px]'>
            <div className='mt-[10svh] ml-[3svh] mr-[3svh] lg:ml-[15svh] lg:mr-[15svh] pb-4 flex items-end border-[#8F573B] border-2 rounded-tl-full rounded-tr-full min-h-[65vh] lg:min-h-[74vh] NotoSans-Light text-[#EEE5DA] pl-8 pr-8'>
                <div>
                    <p className='text-[#8F573B]'>O estudo do Humanismo permite compreender nossa própria história e cultura, além de ampliar nosso repertório literário e incentivar o pensamento crítico e reflexivo.</p>
                    <p className='text-[#8F573B]'>A literatura é o recorte das sociedades de determinadas épocas. Assim, as obras humanistas nos ajudam a entender os costumes da sociedade portuguesa e a tecer um retrato de sua época. </p>
                    <p className='text-[#8F573B]'>Além do aspecto satírico, as obras têm um vasto aspecto moralizante.</p>
                </div>
            </div>
            <div className='absolute bottom-[4svh] flex justify-around w-full mt-11 lg:mt-22 text-[#C4E5C9]'>
                <div className='pl-10 pt-2 pb-2 pr-6 rounded-tl-full rounded-bl-full text-[#EEE5DA] bg-[#8F573B] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
                    <BotaoVoltar href="../pageInfo">VOLTAR</BotaoVoltar>
                </div>
                <div className='pl-6 pt-2 pb-2 pr-12 rounded-tr-full rounded-br-full text-[#EEE5DA] bg-[#8F573B] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
                    <BotaoAvancar href="../">INÍCIO</BotaoAvancar>
                </div>
            </div>

        </main>
    )
}

export default pageConclusao