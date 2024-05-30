import { FaFileArrowDown } from 'react-icons/fa6';
import { SOCIAL } from '@/const/social';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className='flex flex-col gap-4 bg-primary p-8'>
      <span className='text-xl font-bold text-primary-foreground'>
        Redes sociales
      </span>
      <ul className='flex flex-col gap-4'>
        {SOCIAL.map((item) => (
          <li key={item.name + '_key'}>
            <a
              href={item.url}
              target='_blank'
              className='flex items-center gap-4 text-primary-foreground opacity-75'
            >
              <item.icon size={24} />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
        <Separator className='opacity-20' />
        <li>
          <a
            href=''
            target='_blank'
            className='flex items-center gap-4 text-primary-foreground opacity-75'
          >
            <FaFileArrowDown size={24} />
            <span>CV</span>
          </a>
        </li>
      </ul>
      <span className='mt-12 font-semibold text-primary-foreground opacity-75'>
        Gianluca Bredice Vivarelli | Portfolio
      </span>
    </footer>
  );
}
