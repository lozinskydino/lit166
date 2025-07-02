import React from 'react'
import Image from 'next/image';
import imagem1 from '@/app/assets/RED4_LP_IM_035.jpg'
import imagem2 from '@/app/assets/RED4_LP_IM_036.png'

const Fernao = () => {
  return (
    <div className='w-[100%] pl-8 pr-8 lg:pl-10 lg:pr-10 flex flex-col min-h-[50vh] justify-around'>
      <h1 className='adamina text-center text-[26px] text-[#8F573B]'>FERNÃO LOPES</h1>
      
      <Image src={imagem1} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />
      
      <p className='NotoSans-Light text-[#8F573B]'>Fernão Lopes foi um cronista reconhecido por seu trabalho investigativo e crítico em relação aos fatos históricos. Diferentemente dos cronistas medievais, ele não se limitou a compilar datas e nomes, mas realizou uma análise comparativa de diferentes fontes, consultou documentos, livros e correspondências e buscou informações diretamente nos locais relacionados aos eventos históricos. Seu objetivo era demonstrar que a história não se resumia apenas às ações dos reis e cavaleiros, mas também era influenciada por fatores econômicos e pela participação ativa do povo.</p>
      <p className='NotoSans-Light text-[#8F573B]'>Fernão Lopes tinha uma habilidade literária notável e apresentava um estilo vivo e dinâmico nas crônicas.</p>
   
      <Image src={imagem2} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />
    </div>
  )
}

export default Fernao