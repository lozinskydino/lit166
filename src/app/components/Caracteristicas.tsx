import React from 'react'
import { useRouter } from 'next/navigation';

const Caracteristicas = () => {
  const router = useRouter();

  const clickLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const idLink = event.currentTarget.getAttribute('id');
    router.push(`/pageSubTexto?id=${idLink}`); // Redireciona com o ID na URL
  }
  return (

    <div className='w-[100%] pl-6 pr-6 lg:pl-10 lg:pr-10 flex flex-col min-h-[80vh] justify-around pb-20'>
      <h1 className='adamina text-center text-[26px] text-[#8F573B] mb-2'>CARACTERÍSTICAS</h1>
      <p className='NotoSans-Light text-[#8F573B]'>O Humanismo apresenta características ligadas ao contexto histórico em que está inserido:</p>
      <ul className='NotoSans-Light text-[#8F573B] list-disc pl-5 text-[1.8vh]'>
        <li>Cientificismo – valorização da ciência por meio de métodos padronizados e informação de qualidade.</li>
        <li>Racionalidade – busca por respostas com base na razão humana</li>
        <li>Antropocentrismo – filosofia em que o homem se torna o centro de sua vida, o que exclui o papel hegemônico do domínio religioso. Além disso, o corpo humano e as emoções tornam-se pauta, uma novidade para a época.</li>
        <li>Renascimento – conhecido como busca pelos ideais clássicos, quando a cultura da Grécia e de Roma é retomada na história.</li>
        <li>Perfeição e beleza – atributos que passam a ser o objetivo de obras de arte, textos, entre outros.</li>
      </ul>
      <div className='mt-8 NotoSans-Light pt-4 pb-4 pr-6 pl-6 leading-none text-center text-[18px] rounded-full text-[#EEE5DA] border-[#8F573B] border-2 bg-[#CD845F] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
        <a id='0' onClick={clickLink} href="">EXEMPLO DE TEXTO HUMANISTA</a>
      </div>
    </div >
  )
}

export default Caracteristicas