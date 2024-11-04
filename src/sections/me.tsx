import { useEffect, useState } from 'react';

import ContactForm from '@/components/contact-form';
import me2 from '@/assets/me-2.jpg';
import { useLang } from '@/hooks/use-lang';

export default function Me() {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  const { LANG } = useLang();

  return (
    <section
      id='#me'
      className='flex flex-col items-center gap-4 p-8 text-primary md:flex-row'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <img
        src={me2}
        className='max-w-72 rounded-2xl object-cover md:max-w-72 md:-translate-y-10'
        alt='Gianluca Bredice Vivarelli'
      />
      <div className='flex w-full flex-col items-center gap-4 md:h-[480px] md:items-end'>
        <span className='w-full text-center opacity-75 md:text-end lg:text-lg'>
          {LANG.ABOUT.DESCRIPTION}
        </span>
        <ContactForm />
      </div>
    </section>
  );
}
