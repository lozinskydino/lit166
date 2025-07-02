import React from 'react'
import { useRouter } from 'next/navigation';


const Poesia = () => {
  const router = useRouter();
  
    const clickLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const idLink = event.currentTarget.getAttribute('id');
      router.push(`/pageSubTexto?id=${idLink}`); // Redireciona com o ID na URL
    }
  return (
    <div className='w-[100%] pl-6 pr-6 lg:pl-10 lg:pr-10 flex flex-col min-h-[80vh] justify-around pb-20'>
      <h1 className='adamina text-center text-[26px] text-[#8F573B] mb-2'>POESIA PALACIANA</h1>
      <p className='NotoSans-Light text-[#8F573B]'>A poesia portuguesa do século XV, compilada no Cancioneiro Geral por Garcia de Resende em 1516, é conhecida como poesia palaciana devido à sua origem na corte. Os poemas, escritos por fidalgos, abordam temas como moda, etiqueta e vida cortesã. Apesar de muitos versos tratarem de assuntos superficiais, há exemplos que combinam temas relevantes com habilidades técnicas notáveis.
      Diferentemente da poesia dos trovadores, a poesia palaciana é aristocrática, refinada e formal. </p>
      <p className='NotoSans-Light text-[#8F573B]'>No aspecto temático, o amor ainda é um tema central, mas recebe uma abordagem mais pessoal e variada, que enriquece psicologicamente a expressão amorosa. A influência de Petrarca promove sofisticação à espiritualidade e ao platonismo amoroso na poesia palaciana. Além disso, altera a representação da mulher, que deixa de ser idealizada e passa a ser valorizada por seus atributos físicos, resultando em uma tonalidade sensual e erótica. Petraca foi o criador do soneto, estrutura poética que prevê dois quartetos e dois tercetos.</p>
      <div className='mt-8 NotoSans-Light pt-4 pb-4 pr-6 pl-6 leading-none text-center text-[18px] rounded-full text-[#EEE5DA] border-[#8F573B] border-2 bg-[#CD845F] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
        <a id='1' onClick={clickLink} href="">EXEMPLO DE POESIA PALACIANA</a>
      </div>
      
    </div >
  )
}

export default Poesia