import { useLang } from '@/hooks/use-lang';

export default function Footer() {
  const { LANG } = useLang();

  return (
    <footer className='flex flex-col items-center bg-primary-foreground p-8 text-primary'>
      <span className='mt-4 text-xs font-semibold opacity-75 md:text-sm'>
        {LANG.FOOTER.TITLE}
      </span>
    </footer>
  );
}
