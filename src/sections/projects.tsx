import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TGalleryImage, TProject } from '@/types/projects.types';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/const/projects';
import { ProjectGallery } from '@/components/carousel';
import { Title } from '@/components/ui/title';
import { useLang } from '@/hooks/use-lang';

export default function Projects() {
  const [active, setActive] = useState<TProject>(
    PROJECTS.sort((a, b) => b.date.getTime() - a.date.getTime())[0],
  );

  const [height, setHeight] = useState(100);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) setHeight(nav.offsetHeight);
  }, []);

  const { LANG, isEng } = useLang();

  return (
    <section
      id='#projects'
      className='relative flex flex-col items-center gap-8 text-primary md:items-start'
      style={{
        minHeight: `${100 - (100 - height)}vh`,
      }}
    >
      <div className='flex flex-col items-center gap-4 px-8 pt-8 text-center md:items-start md:text-start'>
        <Title>{LANG.PROJECTS.TITLE}</Title>
        <span className='opacity-75'>{LANG.PROJECTS.SUBTITLE}</span>
        <small className='opacity-75'>{LANG.PROJECTS.TOOLTIP}</small>
        <ul className='flex flex-wrap justify-center gap-4'>
          {PROJECTS.sort((a, b) => {
            return b.date.getTime() - a.date.getTime();
          }).map((project) => (
            <li key={project.name + '_key'}>
              <Button
                size='sm'
                variant={active === project ? 'default' : 'outline'}
                onClick={() => setActive(project)}
                className='min-w-32'
              >
                {project.name}
              </Button>
            </li>
          ))}
        </ul>
        <Card>
          <CardHeader className='flex flex-col gap-4'>
            <CardTitle>{active?.name}</CardTitle>
            <CardDescription>
              {!isEng ? active?.description_es : active?.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      {PROJECTS.map((project) => (
        <ProjectGallery
          key={project.name + '_gallery_key'}
          active={active === project}
          gallery={project.gallery as TGalleryImage[]}
        />
      ))}
    </section>
  );
}
