import { Button } from './ui/button';
import { FaFileArrowDown } from 'react-icons/fa6';
import { SOCIAL } from '@/const/social';
import { useLang } from '@/hooks/use-lang';

export default function Footer() {
  const { LANG, isEng } = useLang();

  return (
    <footer className='flex flex-col items-center gap-4 bg-primary p-8 text-primary-foreground'>
      <div className='flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-8'>
        <div className='flex flex-col items-center gap-4 md:items-start'>
          <span className='text-xl font-bold'>{LANG.FOOTER.TITLE}</span>
          <ul className='flex flex-col gap-4'>
            {SOCIAL.map((item) => (
              <li key={item.name + '_key'}>
                <a
                  href={item.url}
                  target='_blank'
                  className='flex items-center gap-4 opacity-75'
                >
                  <item.icon size={24} />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Button variant='secondary' className=''>
          <a
            href={
              !isEng
                ? './Gianluca_Bredice_Vivarelli-CV.pdf'
                : './Gianluca_Bredice_Vivarelli-CV_English.pdf'
            }
            target='_blank'
            className='flex items-center gap-4'
          >
            <FaFileArrowDown size={24} />
            <span>CV</span>
          </a>
        </Button>
      </div>
      <span className='mt-4 font-semibold opacity-75'>
        Gianluca Bredice Vivarelli | Portfolio
      </span>
    </footer>
  );
}
