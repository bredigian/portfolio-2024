import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Label } from '@/components/ui/label';
import { Link } from 'react-scroll';
import { ROUTES } from '@/const/routes';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useLang } from '@/hooks/use-lang';
import { useSearchParams } from 'react-router-dom';
import { useWidth } from '@/hooks/use-width';

export default function Navbar() {
  const [navHeight, setNavHeight] = useState(0);
  const { scrolled, handleScroll } = useWidth();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setNavHeight(nav.offsetHeight);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguage = () => {
    const lang = searchParams.get('lang');

    if (lang) searchParams.delete('lang');
    else searchParams.set('lang', 'en');

    setSearchParams(searchParams);
  };

  const { LANG, isEng } = useLang();

  return (
    <header
      id='navbar'
      className={cn(
        'sticky top-0 z-50 w-full px-4 py-8 duration-200 ease-in-out',
        !scrolled ? 'bg-white' : 'bg-primary-foreground',
      )}
    >
      <nav className='w-full'>
        <ul className='flex items-center justify-center gap-4'>
          {ROUTES.map((route) => (
            <li key={route.id}>
              <Link
                to={`#${route.id}`}
                smooth
                duration={500}
                offset={-navHeight}
                className='cursor-pointer border-b-[1px] border-transparent duration-200 ease-in-out hover:border-b-primary'
              >
                {route.id === 'options' ? (
                  <>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <DotsHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className='mr-4 mt-4 flex w-fit flex-col items-end'>
                        <DropdownMenuLabel>
                          {LANG.NAVBAR.OPTIONS}
                        </DropdownMenuLabel>
                        <DropdownMenuGroup className='flex w-full flex-col items-end gap-2 p-2'>
                          <div className='flex w-full items-center justify-between gap-4'>
                            <Switch
                              id='english-mode'
                              onClick={handleLanguage}
                              defaultChecked={
                                searchParams.get('lang') ? true : false
                              }
                            />
                            <Label htmlFor='english-mode'>
                              {LANG.NAVBAR.ENG_MODE}
                            </Label>
                          </div>
                          <div className='flex w-full items-center justify-between gap-4'>
                            <Switch id='dark-mode' />
                            <Label htmlFor='dark-mode'>
                              {LANG.NAVBAR.DARK_MODE}
                            </Label>
                          </div>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : !isEng ? (
                  route.name
                ) : (
                  route.name_eng
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
