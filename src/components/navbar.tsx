import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import { ROUTES } from '@/const/routes';
import { cn } from '@/lib/utils';
import { useWidth } from '@/hooks/use-width';

export default function Navbar() {
  const [navHeight, setNavHeight] = useState(0);
  const { scrolled, handleScroll } = useWidth();

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setNavHeight(nav.offsetHeight);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id='navbar'
      className={cn(
        'sticky top-0 z-50 w-full px-4 py-8 duration-200 ease-in-out',
        !scrolled ? 'bg-white' : 'bg-primary-foreground',
      )}
    >
      <nav className='w-full'>
        <ul className='flex justify-center gap-4'>
          {ROUTES.map((route) => (
            <li key={route.id}>
              <Link
                to={`#${route.id}`}
                smooth
                duration={500}
                offset={-navHeight}
                className='cursor-pointer border-b-[1px] border-transparent duration-200 ease-in-out hover:border-b-primary'
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
