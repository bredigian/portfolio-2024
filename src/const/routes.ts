type TRoute = {
  id: string;
  name: string;
  name_eng: string;
};

export const ROUTES: TRoute[] = [
  {
    id: 'home',
    name: 'Inicio',
    name_eng: 'Home',
  },
  {
    id: 'skills',
    name: 'Habilidades',
    name_eng: 'Skills',
  },
  {
    id: 'projects',
    name: 'Proyectos',
    name_eng: 'Projects',
  },
  {
    id: 'me',
    name: 'Yo',
    name_eng: 'Me',
  },
  {
    id: 'options',
    name: 'Opciones',
    name_eng: 'Options',
  },
];
