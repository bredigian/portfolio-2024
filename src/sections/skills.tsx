import { useEffect, useState } from 'react';

import { SKILLS } from '@/const/skills';
import { Title } from '@/components/ui/title';
import { useLang } from '@/hooks/use-lang';

export default function Skills() {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  const { LANG } = useLang();

  return (
    <section
      id='#skills'
      className='flex flex-col items-center gap-4 p-8 md:flex-row'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex flex-col items-center gap-4 text-center md:items-start md:text-start'>
        <Title>{LANG.SKILLS.TITLE}</Title>
        <span className='opacity-75 lg:text-lg'>{LANG.SKILLS.SUBTITLE}</span>
      </div>
      <ul className='grid max-w-96 grid-cols-4 gap-4 md:min-w-96'>
        {SKILLS.map((skill) => (
          <li
            key={skill.name + '_key'}
            className='col-span-1 flex h-20 flex-col items-center justify-center gap-2'
          >
            <skill.icon size={50} />
            <small className='overflow-hidden text-ellipsis text-nowrap'>
              {skill.name}
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
