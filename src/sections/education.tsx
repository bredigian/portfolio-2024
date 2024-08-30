import { useEffect, useState } from 'react';

import { Title } from '@/components/ui/title';
import { EDUCATION } from '@/const/education';
import { DateTime } from 'luxon';
import { useLang } from '@/hooks/use-lang';

export default function Education() {
  const [height, setHeight] = useState(100);
  const { LANG, isEng } = useLang();

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  return (
    <section
      id='#education'
      className='flex flex-col items-center gap-4 p-8 text-primary md:w-full md:items-start'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex flex-col items-center gap-4 text-center md:items-start md:text-start'>
        <Title>{LANG.EDUCATION.TITLE}</Title>
        <span className='opacity-75 lg:text-lg'>{LANG.EDUCATION.SUBTITLE}</span>
      </div>
      <ul className='flex flex-col gap-4 border-l-2 border-primary/25'>
        {EDUCATION.sort(
          (a, b) => (b.endDate?.getTime() as number) - a.endDate?.getTime(),
        ).map((item) => {
          const startDate = DateTime.fromJSDate(item?.startDate);
          const endDate = DateTime.fromJSDate(item?.endDate);

          return (
            <li className='flex w-full gap-4'>
              <span className='mt-1 size-2 -translate-x-[5px] rounded-full bg-primary'></span>
              <div className='flex flex-col items-start gap-1'>
                <span className='text-start'>
                  {!isEng ? item.title : item.engTitle}
                </span>
                <small>{!isEng ? item.placeName : item.engPlaceName}</small>
                {!item.placeName.includes('UNLP') ? (
                  <small>
                    {startDate.monthShort?.concat(
                      ' ',
                      startDate.year.toString(),
                    )}{' '}
                    - {endDate.monthShort?.concat(' ', endDate.year.toString())}
                  </small>
                ) : (
                  <small>
                    {startDate.monthShort?.concat(
                      ' ',
                      startDate.year.toString(),
                    )}{' '}
                    - Act
                  </small>
                )}
                {item.certification && (
                  <a
                    href={item.certification}
                    target='_blank'
                    className='text-xs underline'
                  >
                    {!isEng ? 'Certificación' : 'Certification'}
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
