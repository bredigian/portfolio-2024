import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TGalleryImage, TProject } from '@/types/projects.types';

import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/const/projects';
import { ProjectGallery } from '@/components/carousel';
import { Title } from '@/components/ui/title';
import { useState } from 'react';

export default function Projects() {
  const [active, setActive] = useState<TProject>(PROJECTS[0]);

  return (
    <section id='#projects' className='relative flex flex-col gap-8'>
      <div className='flex flex-col gap-4 px-8 pt-8'>
        <Title>Proyectos</Title>
        <span className='opacity-75'>
          Trabajos y proyectos personales que he desarrollado a lo largo de mi
          carrera que me han llevado al nivel actual de experiencia
        </span>
        <small className='opacity-75'>
          Seleccione el que desee para ver información acerca del mismo
        </small>
        <ul className='flex flex-wrap justify-start gap-4'>
          {PROJECTS.sort((a, b) => {
            return b.date.getTime() - a.date.getTime();
          }).map((project) => (
            <li key={project.name + '_key'}>
              <Button
                size='sm'
                variant={active === project ? 'default' : 'outline'}
                onClick={() => setActive(project)}
              >
                {project.name}
              </Button>
            </li>
          ))}
        </ul>
        <Card>
          <CardHeader className='flex flex-col gap-4'>
            <CardTitle>{active?.name}</CardTitle>
            <CardDescription>{active?.description_es}</CardDescription>
          </CardHeader>
        </Card>
      </div>
      {PROJECTS.map((project) => (
        <ProjectGallery
          active={active === project}
          gallery={project.gallery as TGalleryImage[]}
        />
      ))}
    </section>
  );
}
