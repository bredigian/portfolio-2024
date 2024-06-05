import { getAge } from '@/lib/utils';

const age = getAge(new Date(2002, 3, 21));

export const TEXT = {
  ENG: {
    NAVBAR: {
      OPTIONS: 'Options',
      ENG_MODE: 'English',
      DARK_MODE: 'Dark mode',
    },
    HOME: {
      TITLE: "Hi! I'm",
      SUBTITLE: [
        'My name is ',
        'Gianluca Bredice Vivarelli',
        `, I'm ${age} and I'm from Argentina`,
      ],
      DESCRIPTION:
        'I currently live in La Plata, in 2020 I started a systems-oriented university career and in March 2022 I began to take different courses and learn by myself different technologies oriented to web development.',
    },
    SKILLS: {
      TITLE: 'Skills',
      SUBTITLE:
        'Technologies in which I specialize and use every day to carry out my projects.',
    },
    PROJECTS: {
      TITLE: 'Experience',
      SUBTITLE:
        'Works and personal projects that I have developed throughout my career that have led me to the current level of experience.',
      TOOLTIP: 'Select one to display more information about it.',
      DEPLOY: 'Deploy',
      NO_DEPLOY: 'Coming soon...',
    },
    ABOUT: {
      TITLE: 'Me',
      SUBTITLE: 'This is me.',
      DESCRIPTION:
        'An organized and responsible person, who is constantly learning, and also spends a large part of the day listening to music with headphones. I speak native Spanish and my level of English is basic. I am currently doing freelance work, but I am still looking to find a stable job, in which I can contribute all my skills to the work team and also learn from it.',
      LABEL: 'Contact me',
      FORM: {
        NAME: 'Name',
        EMAIL: 'Email',
        MESSAGE: 'Message',
        SUBMIT: 'Submit',
        SUBMITTING: 'Submitting',
        ATTRIBUTE_REQUIRED: 'Attribute is required or is not valid.',
      },
      CV_LINK: './Gianluca_Bredice_Vivarelli-CV_English.pdf',
    },
    FOOTER: {
      TITLE: 'Made by Gianluca Bredice Vivarelli 🤙',
    },
  },
  ESP: {
    NAVBAR: {
      OPTIONS: 'Opciones',
      ENG_MODE: 'Inglés',
      DARK_MODE: 'Modo oscuro',
    },
    HOME: {
      TITLE: '¡Hola! Soy',
      SUBTITLE: [
        'Mi nombre es ',
        'Gianluca Bredice Vivarelli',
        `, tengo ${age} años y soy de Argentina`,
      ],
      DESCRIPTION:
        'Actualmente vivo en La Plata, inicié mi carrera orientada a sistemas en 2020 y a principios del 2022 emprendí camino como desarrollador web. Tomando diferentes cursos y estudiando de forma autonoma, fui aprendiendo y especializandome en las diferentes tecnologias que se utilizan hoy en día.',
    },
    SKILLS: {
      TITLE: 'Habilidades',
      SUBTITLE:
        'Tecnologías en las que me especializo y utilizo día a día para llevar a cabo mis proyectos.',
    },
    PROJECTS: {
      TITLE: 'Experiencia',
      SUBTITLE:
        'Trabajos y proyectos personales que he desarrollado a lo largo de mi carrera que me han llevado al nivel actual de experiencia.',
      TOOLTIP: 'Seleccione el que desee para ver información acerca del mismo.',
      DEPLOY: 'Link',
      NO_DEPLOY: 'Proximamente...',
    },
    ABOUT: {
      TITLE: 'Yo',
      SUBTITLE: 'Este soy yo.',
      DESCRIPTION:
        'Una persona organizada y responsable, quien esta constantemente aprendiendo, y además pasa gran parte del día escuchando música con auriculares. Mi idioma nativo es el Español y mi nivel de Inglés es básico. Actualmente estoy trabajando como freelancer, pero sigo buscando un trabajo estable, en el cual pueda aportar mis habilidades al equipo de trabajo y también aprender de ellos.',
      LABEL: 'Contactame',
      FORM: {
        NAME: 'Nombre',
        EMAIL: 'Email',
        MESSAGE: 'Mensaje',
        SUBMIT: 'Enviar',
        SUBMITTING: 'Enviando',
        ATTRIBUTE_REQUIRED: 'El atributo es requerido o no es válido.',
      },
      CV_LINK: './Gianluca_Bredice_Vivarelli-CV.pdf',
    },
    FOOTER: {
      TITLE: 'Hecho por Gianluca Bredice Vivarelli 🤙',
    },
  },
};
