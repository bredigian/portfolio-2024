import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import { Button } from './ui/button';
import { EmblaCarouselType } from 'embla-carousel';
import { TGalleryImage } from '@/types/projects.types';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

type Props = {
  gallery: TGalleryImage[];
  active: boolean;
};

export const ProjectGallery = ({ gallery, active }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      className={cn(
        'embla bottom-0 m-auto pb-8 duration-200 ease-in-out',
        !active
          ? 'invisible -z-50 hidden opacity-0'
          : 'visible z-10 block opacity-100',
      )}
    >
      <div className='embla__viewport overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex'>
          {gallery.map((slide) => (
            <div
              className='embla__slide flex-[0_0_70%] cursor-grab pl-4 active:cursor-grabbing sm:flex-[0_0_100%]'
              key={slide.url_desktop + slide.url_mobile}
            >
              <img
                className='embla__slide__img hidden w-full rounded-xl border-2 object-cover sm:block'
                src={slide.url_desktop}
                alt='Your alt text'
              />
              <img
                className='embla__slide__img my-4 w-full rounded-xl border-2 object-cover sm:hidden'
                src={slide.url_mobile}
                alt='Your alt text'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='embla__controls flex flex-row items-center justify-center gap-2 p-4 md:justify-start'>
        <Button
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          variant='outline'
          size={'icon'}
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          variant='outline'
          size={'icon'}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
