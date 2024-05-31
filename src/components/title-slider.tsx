import Autoplay from 'embla-carousel-autoplay';
import { TITLES } from '@/const/titles';
import { Title } from '@/components/ui/title';
import useEmblaCarousel from 'embla-carousel-react';

export default function TitleSlider() {
  const [emblaRef] = useEmblaCarousel(
    { axis: 'y', align: 'start', loop: false },
    [Autoplay({ loop: false })],
  );

  return (
    <div className='embla'>
      <div className='embla__viewport overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex h-28 cursor-grab flex-col active:cursor-grabbing sm:h-20 md:h-28 lg:h-20'>
          {TITLES.map((title) => (
            <div
              key={title + '_key'}
              className='embla__slide min-h-0 shrink-0 grow basis-full pt-4'
            >
              <Title className='w-min select-none sm:w-fit md:w-min lg:w-fit'>
                {title}
              </Title>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
