import { useEffect, useState } from 'react';

import { SKILLS } from '@/const/skills';
import { Title } from '@/components/ui/title';

export default function Skills() {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  return (
    <section
      id='#skills'
      className='flex flex-col gap-4 p-8'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <Title>Habilidades</Title>
      <span className='opacity-75'>
        Tecnologías en las que me especializo y utilizo día a día para trabajar
      </span>
      <ul className='flex flex-wrap justify-center gap-4'>
        {SKILLS.map((skill) => (
          <li
            key={skill.name + '_key'}
            className='flex h-20 w-20 flex-col items-center justify-center gap-2'
          >
            <skill.icon size={50} />
            <small>{skill.name}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
