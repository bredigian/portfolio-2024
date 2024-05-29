import { TGalleryImage } from '@/types/projects.types';
import useEmblaCarousel from 'embla-carousel-react';

type Props = {
  gallery: TGalleryImage[];
};
export const ProjectGallery = ({ gallery }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className='embla m-auto pb-8'>
      <div className='embla__viewport overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex first:pl-4'>
          {gallery.map((slide) => (
            <div
              className='embla__slide flex-[0_0_70%] pl-4'
              key={slide.url_desktop + slide.url_mobile}
            >
              {/* <img
                className='embla__slide__img hidden w-full rounded-xl object-cover'
                src={slide.url_desktop}
                alt='Your alt text'
              /> */}
              <img
                className='embla__slide__img my-4 w-full rounded-xl border-2 object-cover'
                src={slide.url_mobile}
                alt='Your alt text'
              />
            </div>
          ))}
        </div>
      </div>

      {/*379x788*/}

      {/* <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};
