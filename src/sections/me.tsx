import { useEffect, useState } from 'react';

import ContactForm from '@/components/contact-form';
import { Title } from '@/components/ui/title';
import me2 from '@/assets/me-2.jpg';

export default function Me() {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  return (
    <section
      id='#me'
      className='flex flex-col items-center gap-4 p-8 md:flex-row'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex grow flex-col items-center gap-4 text-center md:items-start md:text-start'>
        <Title>Yo</Title>
        <span className='opacity-75 lg:text-lg'>Este soy yo.</span>
        <img
          src={me2}
          className='max-w-64 rounded-2xl object-cover md:max-w-72'
          alt='Gianluca Bredice Vivarelli'
        />
      </div>
      <div className='flex w-full flex-col items-center gap-4 md:h-[480px] md:items-end md:justify-between'>
        <span className='w-full text-center opacity-75 md:text-end lg:text-lg'>
          Una persona organizada y responsable, quien esta constantemente
          aprendiendo, y además pasa gran parte del día escuchando música con
          auriculares. Mi idioma nativo es el Español y mi nivel de Inglés es
          básico. Actualmente estoy trabajando como freelancer, pero sigo
          abierto a posibilidades de trabajo estable, en el cual pueda aportar
          mis habilidades al equipo de trabajo y también aprender de ellos.
        </span>
        <ContactForm />
      </div>
    </section>
  );
}
