import React from 'react'
import Image from 'next/image';
import imagem1 from '@/app/assets/RED4_LP_IM_043.webp'
import imagem2 from '@/app/assets/RED4_LP_IM_044.jpg'
import imagem3 from '@/app/assets/RED4_LP_IM_046.jpg'


const SubGil2 = () => {
  return (
    <div className='w-[100%] pl-8 pr-8 lg:pl-10 lg:pr-10 flex flex-col min-h-[50vh] justify-around'>
      <h1 className='adamina text-center text-[26px] text-[#EEE5DA] mb-8'>A FARSA DE INÊS PEREIRA</h1>
      <Image src={imagem1} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />
      <p className='NotoSans-Light text-[#EEE5DA]'>Gil Vicente introduz o tema do comportamento amoral da sociedade da época criando uma história de Inês, uma pobre mulher que almeja uma vida melhor e entende que a única maneira de alcançar seu sonho é por meio de um casamento. Ela recusa a primeira oferta, vinda de um burguês, pois ele não se enquadrava em seus sonhos, mas aceita a proposta seguinte, vinda de um escudeiro. Este tira toda a liberdade de Inês, trancando-a em casa e proibindo-a de sair para qualquer lugar. Ela acaba viúva e retoma contato com o primeiro pretendente, com quem acaba se casando. Esse, diferentemente do primeiro marido, é totalmente submisso a ela, o que faz com que seja manipulado totalmente até ser convencido a levá-la para encontrar seu amante. Deste momento da peça surgiu um ditado bastante conhecido: “Mais vale asno que me leve que cavalo que me derrube”.</p>
      <Image src={imagem2} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />

      <Image src={imagem3} className='w-[100%] mb-8 mt-8' alt='' width={100} height={100} />

    </div>

  )
}

export default SubGil2