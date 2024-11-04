import { DateTime } from 'luxon';
import { useLang } from '@/hooks/use-lang';

export default function Footer() {
  const { LANG } = useLang();
  const now = DateTime.now();

  return (
    <footer className='flex items-center justify-center gap-2 bg-primary-foreground p-8 text-primary'>
      <span className='mt-4 text-xs font-semibold opacity-75 md:text-sm'>
        {LANG.FOOTER.TITLE}
      </span>
      <span className='mt-4 border-l-2 border-primary pl-2 text-xs font-semibold opacity-75  md:text-sm'>
        {now.year.toString()}
      </span>
    </footer>
  );
}
