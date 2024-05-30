import { FaFileArrowDown } from 'react-icons/fa6';
import { SOCIAL } from '@/const/social';
import { Title } from '@/components/ui/title';

export default function Social() {
  return (
    <section className='flex w-full flex-col gap-4 p-8'>
      <Title>Más información</Title>
      <span className='opacity-75'>
        A continuación estarán los links a mis redes sociales y a mi CV.
      </span>
      <ul className='flex items-center gap-4'>
        {SOCIAL.map((item) => (
          <li key={item.name + '_key'}>
            <a href={item.url} target='_blank'>
              <item.icon size={30} />
            </a>
          </li>
        ))}
        <li>
          <a href='' target='_blank'>
            <FaFileArrowDown size={30} />
          </a>
        </li>
      </ul>
    </section>
  );
}
