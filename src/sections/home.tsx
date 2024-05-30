import { useEffect, useState } from 'react';

import { Title } from '@/components/ui/title';
import me1 from '@/assets/me-1.jpg';

export default function Home() {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  return (
    <section
      id='#home'
      className='flex flex-col gap-4 p-8'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <span className='text-2xl opacity-75'>¡Hola! Soy</span>
      <Title>Frontend Developer</Title>
      <span className='text-lg opacity-75'>
        Mi nombre es <b>Gianluca Bredice Vivarelli</b>, tengo 22 años y soy de
        Argentina.
      </span>
      <p className='opacity-75'>
        Actualmente vivo en La Plata, inicié mi carrera orientada a sistemas en
        2020 y a principios del 2022 emprendí camino como desarrollador web.
        Tomando diferentes cursos y estudiando de forma autonoma, fui
        aprendiendo y especializandome en las diferentes tecnologias que se
        utilizan hoy en día.
      </p>
      <img
        src={me1}
        alt='Gianluca Bredice Vivarelli'
        className='h-72 w-full grow rounded-2xl object-cover'
      />
    </section>
  );
}
