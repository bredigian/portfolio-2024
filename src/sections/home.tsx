import { useEffect, useState } from 'react';

import TitleSlider from '@/components/title-slider';
import me1 from '@/assets/me-1.jpg';
import { useLang } from '@/hooks/use-lang';

export default function Home() {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  const { LANG } = useLang();

  return (
    <section
      id='#home'
      className='flex flex-col items-center justify-center gap-4 p-8 text-primary md:flex-row'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex flex-col items-center gap-4 text-center md:items-start md:text-start'>
        <span className='text-2xl opacity-75 lg:text-3xl'>
          {LANG.HOME.TITLE}
        </span>
        <TitleSlider />
        <span className='text-lg opacity-75 lg:text-xl'>
          {LANG.HOME.SUBTITLE[0]}
          <b>{LANG.HOME.SUBTITLE[1]}</b>
          {LANG.HOME.SUBTITLE[2]}
        </span>
        <p className='opacity-75 lg:text-lg'>{LANG.HOME.DESCRIPTION}</p>
      </div>
      <img
        src={me1}
        alt='Gianluca Bredice Vivarelli'
        className='h-72 w-full max-w-96 grow rounded-2xl object-cover md:h-[550px]'
      />
    </section>
  );
}
