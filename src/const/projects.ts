import { TProject } from '@/types/projects.types';
//Casatomada Images
import ca1 from '@/assets/screenshots/casatomada/ca-1.jpg';
import ca2 from '@/assets/screenshots/casatomada/ca-2.jpg';
import ca3 from '@/assets/screenshots/casatomada/ca-3.jpg';
import ca4 from '@/assets/screenshots/casatomada/ca-4.jpg';
import ca5 from '@/assets/screenshots/casatomada/ca-5.jpg';
import caMobile1 from '@/assets/screenshots/casatomada/mobile/ca-1.jpg';
import caMobile2 from '@/assets/screenshots/casatomada/mobile/ca-2.jpg';
import caMobile3 from '@/assets/screenshots/casatomada/mobile/ca-3.jpg';
import caMobile4 from '@/assets/screenshots/casatomada/mobile/ca-4.jpg';
import caMobile5 from '@/assets/screenshots/casatomada/mobile/ca-5.jpg';
//Iluminarte Images
import il1 from '@/assets/screenshots/iluminarte/il-1.jpg';
import il2 from '@/assets/screenshots/iluminarte/il-2.jpg';
import il3 from '@/assets/screenshots/iluminarte/il-3.jpg';
import il4 from '@/assets/screenshots/iluminarte/il-4.jpg';
import ilMobile1 from '@/assets/screenshots/iluminarte/mobile/il-1.jpg';
import ilMobile2 from '@/assets/screenshots/iluminarte/mobile/il-2.jpg';
import ilMobile3 from '@/assets/screenshots/iluminarte/mobile/il-3.jpg';
import ilMobile4 from '@/assets/screenshots/iluminarte/mobile/il-4.jpg';
//MB Peluqueria Images
import mbpeluqueria1 from '@/assets/screenshots/mbpeluqueria/mb-1.jpg';
import mbpeluqueria2 from '@/assets/screenshots/mbpeluqueria/mb-2.jpg';
import mbpeluqueria3 from '@/assets/screenshots/mbpeluqueria/mb-3.jpg';
import mbpeluqueria4 from '@/assets/screenshots/mbpeluqueria/mb-4.jpg';
import mbpeluqueria5 from '@/assets/screenshots/mbpeluqueria/mb-5.jpg';
import mbpeluqueriaMobile1 from '@/assets/screenshots/mbpeluqueria/mobile/mb-1.jpg';
import mbpeluqueriaMobile2 from '@/assets/screenshots/mbpeluqueria/mobile/mb-2.jpg';
import mbpeluqueriaMobile3 from '@/assets/screenshots/mbpeluqueria/mobile/mb-3.jpg';
import mbpeluqueriaMobile4 from '@/assets/screenshots/mbpeluqueria/mobile/mb-4.jpg';
import mbpeluqueriaMobile5 from '@/assets/screenshots/mbpeluqueria/mobile/mb-5.jpg';
//Megallon Images
import megallon1 from '@/assets/screenshots/megallon/megallon-1.jpg';
import megallon10 from '@/assets/screenshots/megallon/megallon-10.jpg';
import megallon11 from '@/assets/screenshots/megallon/megallon-11.jpg';
import megallon12 from '@/assets/screenshots/megallon/megallon-12.jpg';
import megallon13 from '@/assets/screenshots/megallon/megallon-13.jpg';
import megallon2 from '@/assets/screenshots/megallon/megallon-2.jpg';
import megallon3 from '@/assets/screenshots/megallon/megallon-3.jpg';
import megallon4 from '@/assets/screenshots/megallon/megallon-4.jpg';
import megallon5 from '@/assets/screenshots/megallon/megallon-5.jpg';
import megallon6 from '@/assets/screenshots/megallon/megallon-6.jpg';
import megallon7 from '@/assets/screenshots/megallon/megallon-7.jpg';
import megallon8 from '@/assets/screenshots/megallon/megallon-8.jpg';
import megallon9 from '@/assets/screenshots/megallon/megallon-9.jpg';
import megallonMobile1 from '@/assets/screenshots/megallon/mobile/megallon-1.jpg';
import megallonMobile10 from '@/assets/screenshots/megallon/mobile/megallon-10.jpg';
import megallonMobile11 from '@/assets/screenshots/megallon/mobile/megallon-11.jpg';
import megallonMobile12 from '@/assets/screenshots/megallon/mobile/megallon-12.jpg';
import megallonMobile13 from '@/assets/screenshots/megallon/mobile/megallon-13.jpg';
import megallonMobile2 from '@/assets/screenshots/megallon/mobile/megallon-2.jpg';
import megallonMobile3 from '@/assets/screenshots/megallon/mobile/megallon-3.jpg';
import megallonMobile4 from '@/assets/screenshots/megallon/mobile/megallon-4.jpg';
import megallonMobile5 from '@/assets/screenshots/megallon/mobile/megallon-5.jpg';
import megallonMobile6 from '@/assets/screenshots/megallon/mobile/megallon-6.jpg';
import megallonMobile7 from '@/assets/screenshots/megallon/mobile/megallon-7.jpg';
import megallonMobile8 from '@/assets/screenshots/megallon/mobile/megallon-8.jpg';
import megallonMobile9 from '@/assets/screenshots/megallon/mobile/megallon-9.jpg';
//SG Pharma Images
import sg1 from '@/assets/screenshots/sgpharma/sg-1.jpg';
import sg10 from '@/assets/screenshots/sgpharma/sg-10.jpg';
import sg2 from '@/assets/screenshots/sgpharma/sg-2.jpg';
import sg3 from '@/assets/screenshots/sgpharma/sg-3.jpg';
import sg4 from '@/assets/screenshots/sgpharma/sg-4.jpg';
import sg5 from '@/assets/screenshots/sgpharma/sg-5.jpg';
import sg6 from '@/assets/screenshots/sgpharma/sg-6.jpg';
import sg7 from '@/assets/screenshots/sgpharma/sg-7.jpg';
import sg8 from '@/assets/screenshots/sgpharma/sg-8.jpg';
import sg9 from '@/assets/screenshots/sgpharma/sg-9.jpg';
import sgMobile1 from '@/assets/screenshots/sgpharma/mobile/sg-1.jpg';
import sgMobile10 from '@/assets/screenshots/sgpharma/mobile/sg-10.jpg';
import sgMobile2 from '@/assets/screenshots/sgpharma/mobile/sg-2.jpg';
import sgMobile3 from '@/assets/screenshots/sgpharma/mobile/sg-3.jpg';
import sgMobile4 from '@/assets/screenshots/sgpharma/mobile/sg-4.jpg';
import sgMobile5 from '@/assets/screenshots/sgpharma/mobile/sg-5.jpg';
import sgMobile6 from '@/assets/screenshots/sgpharma/mobile/sg-6.jpg';
import sgMobile7 from '@/assets/screenshots/sgpharma/mobile/sg-7.jpg';
import sgMobile8 from '@/assets/screenshots/sgpharma/mobile/sg-8.jpg';
import sgMobile9 from '@/assets/screenshots/sgpharma/mobile/sg-9.jpg';

export const PROJECTS: TProject[] = [
  {
    name: 'MB Peluquería',
    description:
      'Shifts system for a hair salon developed with Next.js, Tailwind, and MongoDB.',
    description_es:
      'Sistema de turnos para un salon de peluqueria desarrollado con Next.js, Tailwind y MongoDB',
    url: 'https://mbpeluqueria.vercel.app',
    date: new Date(2023, 9, 3),
    gallery: [
      {
        url_desktop: mbpeluqueria1,
        url_mobile: mbpeluqueriaMobile1,
      },
      {
        url_desktop: mbpeluqueria2,
        url_mobile: mbpeluqueriaMobile2,
      },
      {
        url_desktop: mbpeluqueria3,
        url_mobile: mbpeluqueriaMobile3,
      },
      {
        url_desktop: mbpeluqueria4,
        url_mobile: mbpeluqueriaMobile4,
      },
      {
        url_desktop: mbpeluqueria5,
        url_mobile: mbpeluqueriaMobile5,
      },
    ],
  },
  {
    name: 'Megallón',
    description:
      'Manager system for food place developed with Next.js, Tailwind, Shadcn/ui, Prisma, and Nest.js.',
    description_es:
      'Sistema de administracion financiera para cocina desarrollado con Next.js, Tailwind, Shadcn/ui, Prisma y Nest.js',
    url: undefined,
    date: new Date(2024, 1, 22),
    gallery: [
      {
        url_desktop: megallon1,
        url_mobile: megallonMobile1,
      },
      {
        url_desktop: megallon2,
        url_mobile: megallonMobile2,
      },
      {
        url_desktop: megallon3,
        url_mobile: megallonMobile3,
      },
      {
        url_desktop: megallon4,
        url_mobile: megallonMobile4,
      },
      {
        url_desktop: megallon5,
        url_mobile: megallonMobile5,
      },
      {
        url_desktop: megallon6,
        url_mobile: megallonMobile6,
      },
      {
        url_desktop: megallon7,
        url_mobile: megallonMobile7,
      },
      {
        url_desktop: megallon8,
        url_mobile: megallonMobile8,
      },
      {
        url_desktop: megallon9,
        url_mobile: megallonMobile9,
      },
      {
        url_desktop: megallon10,
        url_mobile: megallonMobile10,
      },
      {
        url_desktop: megallon11,
        url_mobile: megallonMobile11,
      },
      {
        url_desktop: megallon12,
        url_mobile: megallonMobile12,
      },
      {
        url_desktop: megallon13,
        url_mobile: megallonMobile13,
      },
    ],
  },
  {
    name: 'Casatomada',
    description:
      'Drinks store developed with JavaScript, SASS, Bootstrap, and Firebase',
    description_es:
      'Tienda de bebidas desarrollado con HTML, CSS, JavaScript, SASS, Bootstrap y Firebase',
    url: 'https://casatomada.netlify.app',
    date: new Date(2022, 6, 28),
    gallery: [
      {
        url_desktop: ca1,
        url_mobile: caMobile1,
      },
      {
        url_desktop: ca2,
        url_mobile: caMobile2,
      },
      {
        url_desktop: ca3,
        url_mobile: caMobile3,
      },
      {
        url_desktop: ca4,
        url_mobile: caMobile4,
      },
      {
        url_desktop: ca5,
        url_mobile: caMobile5,
      },
    ],
  },
  {
    name: 'Iluminarte',
    description:
      'Candle website developed with React, Tailwind, NodeJS, and MySQL',
    description_es:
      'Sitio web de velas desarrollado con React, Tailwind, Node.js y MySQL',
    url: 'https://iluminarte.vercel.app',
    date: new Date(2023, 6, 4),
    gallery: [
      {
        url_desktop: il1,
        url_mobile: ilMobile1,
      },
      {
        url_desktop: il2,
        url_mobile: ilMobile2,
      },
      {
        url_desktop: il3,
        url_mobile: ilMobile3,
      },
      {
        url_desktop: il4,
        url_mobile: ilMobile4,
      },
    ],
  },
  {
    name: 'SG Pharma',
    description:
      'Pharmacy company website developed with React, Tailwind, NodeJS, and MySQL',
    description_es:
      'Sitio web de la compañia farmaceutica SG Pharma desarrollado con React, Tailwind, Node.js y MySQL',
    url: 'https://sgmedicinas.com',
    date: new Date(2023, 7, 26),
    gallery: [
      {
        url_desktop: sg1,
        url_mobile: sgMobile1,
      },
      {
        url_desktop: sg2,
        url_mobile: sgMobile2,
      },
      {
        url_desktop: sg3,
        url_mobile: sgMobile3,
      },
      {
        url_desktop: sg4,
        url_mobile: sgMobile4,
      },
      {
        url_desktop: sg5,
        url_mobile: sgMobile5,
      },
      {
        url_desktop: sg6,
        url_mobile: sgMobile6,
      },
      {
        url_desktop: sg7,
        url_mobile: sgMobile7,
      },
      {
        url_desktop: sg8,
        url_mobile: sgMobile8,
      },
      {
        url_desktop: sg9,
        url_mobile: sgMobile9,
      },
      {
        url_desktop: sg10,
        url_mobile: sgMobile10,
      },
    ],
  },
];
