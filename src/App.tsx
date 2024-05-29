import { Title } from '@/components/ui/title';
import me1 from '@/assets/me-1.jpg';

export default function App() {
  return (
    <main className='flex flex-col gap-16 p-8'>
      <section id='home' className='flex flex-col gap-4'>
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
    </main>
  );
}
