import React from 'react'
import { useRouter } from 'next/navigation';

const Gil = () => {
  const router = useRouter();
  
    const clickLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const idLink = event.currentTarget.getAttribute('id');
      router.push(`/pageSubTexto?id=${idLink}`); // Redireciona com o ID na URL
    }
  return (
    <div className='w-[100%] pl-6 pr-6 lg:pl-10 lg:pr-10 flex flex-col min-h-[80vh] justify-around pb-20'>
      <h1 className='adamina text-center text-[26px] text-[#8F573B] mb-2'>GIL VICENTE</h1>
      <p className='NotoSans-Light text-[#8F573B]'>Gil Vicente, considerado o criador do teatro português, é reconhecido como o maior dramaturgo de Portugal, equiparando-se à importância de Shakespeare para o teatro inglês.</p>
      <p className='NotoSans-Light text-[#8F573B]'>No teatro de Gil Vicente, encontramos uma representação tanto da vida palaciana quanto da vida popular, abrangendo diversos tipos humanos da sociedade portuguesa da época, desde reis e fidalgos até camponeses e aldeões. Seu teatro não se concentra nos conflitos psicológicos dos personagens, mas sim na crítica social.</p>
      <div className='mt-8 NotoSans-Light pt-4 pb-4 pr-6 pl-6 leading-none text-center text-[18px] rounded-full text-[#EEE5DA] border-[#8F573B] border-2 bg-[#CD845F] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
        <a id='2' onClick={clickLink}  href="">TRILOGIA DAS BARCAS</a>
      </div>
      <div className='mt-4 NotoSans-Light pt-4 pb-4 pr-6 pl-6 leading-none text-center text-[18px] rounded-full text-[#EEE5DA] border-[#8F573B] border-2 bg-[#CD845F] hover:text-[#EEE5DA] hover:bg-[#8F573B] hover:border-2 hover:border-[#EEE5DA]'>
        <a id='3' onClick={clickLink} href="">A FARSA DE INÊS PEREIRA</a>
      </div>
    </div >
  )
}

export default Gil