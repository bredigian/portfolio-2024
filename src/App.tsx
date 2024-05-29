import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/const/projects';
import { ProjectGallery } from './components/carousel';
import { SKILLS } from '@/const/skills';
import { TProject } from './types/projects.types';
import { Title } from '@/components/ui/title';
import me1 from '@/assets/me-1.jpg';
import { useState } from 'react';

export default function App() {
  const [active, setActive] = useState<TProject>(PROJECTS[0]);

  return (
    <main className='flex flex-col gap-16'>
      <section id='home' className='flex flex-col gap-4 p-8'>
        <span className='text-2xl opacity-75'>¡Hola! Soy</span>
        <Title>Frontend Developer</Title>
        <span className='text-lg opacity-75'>
          Mi nombre es <b>Gianluca Bredice Vivarelli</b>, tengo 22 años y soy de
          Argentina.
        </span>
        <p className='opacity-75'>
          Actualmente vivo en La Plata, inicié mi carrera orientada a sistemas
          en 2020 y a principios del 2022 emprendí camino como desarrollador
          web. Tomando diferentes cursos y estudiando de forma autonoma, fui
          aprendiendo y especializandome en las diferentes tecnologias que se
          utilizan hoy en día.
        </p>
        <img
          src={me1}
          alt='Gianluca Bredice Vivarelli'
          className='h-72 w-full rounded-2xl object-cover'
        />
      </section>
      <section className='flex flex-col gap-4 p-8'>
        <Title>Habilidades</Title>
        <span>
          Tecnologías en las que me especializo y utilizo día a día para
          trabajar
        </span>
        <ul className='flex flex-wrap justify-center gap-6'>
          {SKILLS.map((skill) => (
            <li
              key={skill.name + '_key'}
              className='flex h-20 w-20 flex-col items-center justify-center gap-2'
            >
              <skill.icon size={50} />
              <small>{skill.name}</small>
            </li>
          ))}
        </ul>
      </section>
      <section className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4 px-8 pt-8'>
          <Title>Proyectos</Title>
          <span>
            Trabajos y proyectos personales que he desarrollado a lo largo de mi
            carrera que me han llevado al nivel actual de experiencia
          </span>
          <small>
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
        {active?.gallery ? (
          <ProjectGallery gallery={active.gallery} />
        ) : (
          <span className='px-8 pb-8'>
            No hay imágenes disponibles para este proyecto.
          </span>
        )}
      </section>
    </main>
  );
}
