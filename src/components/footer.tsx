import { Button } from './ui/button';
import { FaFileArrowDown } from 'react-icons/fa6';
import { SOCIAL } from '@/const/social';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-4 bg-primary p-8'>
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
      </ul>
      <Button variant='secondary' className='mt-4'>
        <a
          href=''
          target='_blank'
          className='flex items-center gap-4 text-primary'
        >
          <FaFileArrowDown size={24} />
          <span>CV</span>
        </a>
      </Button>
      <span className='mt-4 font-semibold text-primary-foreground opacity-75'>
        Gianluca Bredice Vivarelli | Portfolio
      </span>
    </footer>
  );
}
