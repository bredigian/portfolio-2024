import ContactForm from '@/components/contact-form';
import { Title } from '@/components/ui/title';
import me2 from '@/assets/me-2.jpg';

export default function Me() {
  return (
    <section id='#me' className='flex flex-col gap-4 p-8'>
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
        básico. Actualmente estoy trabajando como freelancer, pero sigo abierto
        a posibilidades de trabajo estable, en el cual pueda aportar mis
        habilidades al equipo de trabajo y también aprender de ellos.
      </span>
      <ContactForm />
    </section>
  );
}
