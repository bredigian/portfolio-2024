import Header from '@/sections/header';
import Me from '@/sections/me';
import Projects from '@/sections/projects';
import Skills from '@/sections/skills';
import Social from '@/sections/social';

export default function App() {
  return (
    <main className='mx-auto flex w-full max-w-screen-lg flex-col items-center gap-16'>
      <Header />
      <Skills />
      <Projects />
      <Me />
      <Social />
    </main>
  );
}
