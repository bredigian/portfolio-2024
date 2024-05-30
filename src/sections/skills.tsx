import { SKILLS } from '@/const/skills';
import { Title } from '@/components/ui/title';

export default function Skills() {
  return (
    <section className='flex flex-col gap-4 p-8'>
      <Title>Habilidades</Title>
      <span className='opacity-75'>
        Tecnologías en las que me especializo y utilizo día a día para trabajar
      </span>
      <ul className='flex flex-wrap justify-center gap-6'>
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
