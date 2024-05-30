import Header from '@/sections/header';
import Projects from './sections/projects';
import Skills from './sections/skills';
import Social from './sections/social';

export default function App() {
  return (
    <main className='flex flex-col gap-16'>
      <Header />
      <Skills />
      <Projects />
      <Social />
    </main>
  );
}
