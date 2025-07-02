import React from 'react'
import Image from 'next/image';
import imagem1 from '@/app/assets/RED4_LP_IM_039.jpg'
import imagem2 from '@/app/assets/RED4_LP_IM_040.jpg'
import imagem3 from '@/app/assets/RED4_LP_IM_041.jpg'
import imagem4 from '@/app/assets/RED4_LP_IM_042.jpg'

const SubGil1 = () => {
  return (
    <div className='w-[100%] pl-8 pr-8 lg:pl-10 lg:pr-10 flex flex-col min-h-[50vh] justify-around'>
      <h1 className='adamina text-center text-[26px] text-[#EEE5DA] mb-8'>TRILOGIA DAS BARCAS</h1>
      <Image src={imagem1} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />
      <p className='NotoSans-Light text-[#EEE5DA]'>A <em>Trilogia das Barcas</em> é uma das obras mais conhecidas e emblemáticas do dramaturgo português. Composta de três peças, Auto da Barca do Inferno (1517), Auto da Barca do Purgatório (1518) e Auto da Barca da Glória (1519), essa trilogia é considerada uma alegoria sobre a vida após a morte e a representação simbólica do destino das almas.</p>
      <p className='NotoSans-Light text-[#EEE5DA]'>Leia, a seguir, alguns trechos dessas obras.</p>

      <Image src={imagem2} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />

      <p className='NotoSans-Light text-[#EEE5DA]'>No trecho do surgimento do personagem sapateiro, há uma crítica à hipocrisia e às posturas éticas, já que, para o personagem, ir às missas e se confessar valia mais do que ter honestidade e piedade em vida. </p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>“<strong className='NotoSans-BoldItalic'>Sapateiro:</strong> quanta missa que eu ouvi! </em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em><strong className='NotoSans-BoldItalic'>Diabo:</strong> ouvir missa e roubar, é o caminho pra aqui! “</em></p>

      <Image src={imagem3} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />

      <p className='NotoSans-Light text-[#EEE5DA]'>Já na passagem do Frade, que chega acompanhado de sua companheira Florência, há a crença de que somente usar título e rezar com afinco garantiria a paz eterna, negligenciando os preceitos de sua religião. Esse exemplo evidencia que Gil Vicente acreditava em uma ética vinculada ao cristianismo, não a preceitos pessoais. </p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>“<strong className='NotoSans-BoldItalic'>Frade:</strong> para onde levais gente? </em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em><strong className='NotoSans-BoldItalic'>Diabo:</strong> para aquele fogo ardente, que não temeste, vivendo. </em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em><strong className='NotoSans-BoldItalic'>Frade:</strong> juro a Deus que não te entendo. E meu hábito não vale?”</em></p>

      <Image src={imagem4} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />

      <p className='NotoSans-Light text-[#EEE5DA]'>Já os Quatro cavaleiros embarcaram para o céu, pois morreram em uma guerra santa, já que esse conflito era contra os muçulmanos.</p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>“<strong className='NotoSans-BoldItalic'>Quatro cavaleiros: </strong></em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>Á barca, á barca, senhores!</em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>Oh que maré tão de prata!</em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>Hum ventosinho que mata,</em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>E valentes remadores.</em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>Vos me veniredes á la mano,</em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>Á la mano me veniredes;</em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>Y vos veredes</em></p>
      <p className='poesia NotoSans-Light text-[#EEE5DA]'><em>Peixes nas redes.”</em></p>
    </div>

  )
}

export default SubGil1