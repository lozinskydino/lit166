import React from 'react'
import Image from 'next/image';
import imagem1 from '@/app/assets/RED4_LP_IM_033.png'

const ContHis = () => {
  return (
    <div className='w-[100%] pl-8 pr-8 lg:pl-10 lg:pr-10 flex flex-col min-h-[50vh] justify-around'>
      <h1 className='adamina text-center text-[26px] text-[#8F573B]'>HUMANISMO EM PORTUGAL</h1>
      
      <Image src={imagem1} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />
      
      <p className='NotoSans-Light text-[#8F573B]'>Em Portugal, o período do Humanismo iniciou-se quando Fernão Lopes foi nomeado guarda-mor da Torre do Tombo por D. Duarte, em 1418, e estendeu-se até 1527, quando Sá de Miranda levou as ideias renascentistas da Itália para Portugal.</p>
      <p className='NotoSans-Light text-[#8F573B]'>Depois de quase um século de estagnação cultural após o Trovadorismo, Portugal viveu um novo florescimento cultural com o Humanismo. A produção literária desse período se destacou sobretudo com as crônicas de Fernão Lopes, a poesia palaciana do Cancioneiro Geral e o teatro de Gil Vicente.</p>
    </div>
  )
}

export default ContHis