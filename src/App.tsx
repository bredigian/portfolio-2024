import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { FaFileArrowDown } from 'react-icons/fa6';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PROJECTS } from '@/const/projects';
import { ProjectGallery } from './components/carousel';
import { ReloadIcon } from '@radix-ui/react-icons';
import { SKILLS } from '@/const/skills';
import { SOCIAL } from './const/social';
import { TForm } from './types/form.types';
import { TProject } from './types/projects.types';
import { Textarea } from '@/components/ui/textarea';
import { Title } from '@/components/ui/title';
import me1 from '@/assets/me-1.jpg';
import me2 from '@/assets/me-2.jpg';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function App() {
  const [active, setActive] = useState<TProject>(PROJECTS[0]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TForm>();

  const onSubmit = async (values: TForm) => {
    try {
      console.log(values);
      toast.success('Email enviado exitosamente.', { position: 'top-center' });
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

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
        <span className='opacity-75'>
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
        {active?.gallery ? (
          <ProjectGallery gallery={active.gallery} />
        ) : (
          <span className='px-8 pb-8'>
            No hay imágenes disponibles para este proyecto.
          </span>
        )}
      </section>
      <section className='flex flex-col gap-4 p-8'>
        <Title>Yo</Title>
        <span className='opacity-75'>Este soy yo.</span>
        <img
          src={me2}
          className='h-72 w-full rounded-2xl object-cover'
          alt='Gianluca Bredice Vivarelli'
        />
        <span className='opacity-75'>
          Una persona organizada y responsable, quien esta constantemente
          aprendiendo, y además pasa gran parte del día escuchando música con
          auriculares. Mi idioma nativo es el Español y mi nivel de Inglés es
          básico. Actualmente estoy trabajando como freelancer, pero sigo
          abierto a posibilidades de trabajo estable, en el cual pueda aportar
          mis habilidades al equipo de trabajo y también aprender de ellos.
        </span>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <Label htmlFor='form'>Contactame</Label>
          <div className='grid grid-cols-6 gap-4'>
            <div className='col-span-3 flex flex-col gap-2'>
              <Input
                id='form'
                {...register('name', {
                  required: {
                    value: true,
                    message: 'El nombre es requerido.',
                  },
                })}
                className='w-full'
                placeholder='Nombre'
              />
              {errors?.name && (
                <small className='text-red-500'>{errors?.name.message}</small>
              )}
            </div>
            <div className='col-span-3 flex flex-col gap-2'>
              <Input
                {...register('email', {
                  required: {
                    value: true,
                    message: 'El email es requerido.',
                  },
                })}
                className='w-full'
                placeholder='Email'
              />
              {errors?.email && (
                <small className='text-red-500'>{errors.email.message}</small>
              )}
            </div>
            <div className='col-span-6 flex flex-col gap-2'>
              <Textarea
                {...register('message', {
                  required: {
                    value: true,
                    message: 'El mensaje es requerido.',
                  },
                  minLength: {
                    value: 25,
                    message: 'El mensaje debe contener al menos 25 caracteres.',
                  },
                })}
                className='w-full'
                placeholder='Mensaje'
              />
              {errors?.message && (
                <small className='text-red-500'>{errors.message.message}</small>
              )}
            </div>
          </div>
          <Button type='submit' disabled={!isValid}>
            {isSubmitting ? (
              <>
                <ReloadIcon className='mr-2 animate-spin' />
                Enviando
              </>
            ) : (
              'Enviar'
            )}
          </Button>
        </form>
      </section>
      <section className='flex flex-col gap-4 p-8'>
        <Title>Más información</Title>
        <span className='opacity-75'>
          A continuación estarán los links a mis redes sociales y a mi CV.
        </span>
        <ul className='flex items-center gap-4'>
          {SOCIAL.map((item) => (
            <li key={item.name + '_key'}>
              <a href={item.url} target='_blank'>
                <item.icon size={30} />
              </a>
            </li>
          ))}
          <li>
            <a href='' target='_blank'>
              <FaFileArrowDown size={30} />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
