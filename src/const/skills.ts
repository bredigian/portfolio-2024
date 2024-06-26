import {
  FaAws,
  FaDigitalOcean,
  FaGithub,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa6';
import {
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRedux,
  SiShadcnui,
  SiSpringboot,
  SiTailwindcss,
} from 'react-icons/si';

import { BsGit } from 'react-icons/bs';
import { TSkill } from '@/types/skills.types';
import { TbBrandNextjs } from 'react-icons/tb';

export const SKILLS: TSkill[] = [
  {
    name: 'React',
    icon: FaReact,
    type: 'frontend',
  },
  {
    name: 'Next.js',
    icon: TbBrandNextjs,
    type: 'frontend',
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    type: 'frontend',
  },
  {
    name: 'shadcn/ui',
    icon: SiShadcnui,
    type: 'frontend',
  },
  {
    name: 'Redux',
    icon: SiRedux,
    type: 'frontend',
  },
  {
    name: 'Node',
    icon: FaNodeJs,
    type: 'backend',
  },
  {
    name: 'Nest.js',
    icon: SiNestjs,
    type: 'backend',
  },
  {
    name: 'Spring Boot',
    icon: SiSpringboot,
    type: 'backend',
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    type: 'database',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    type: 'database',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    type: 'database',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    type: 'database',
  },
  {
    name: 'Postman',
    icon: SiPostman,
    type: 'backend',
  },
  {
    name: 'AWS',
    icon: FaAws,
    type: 'others',
  },
  {
    name: 'Azure',
    icon: SiMicrosoftazure,
    type: 'others',
  },
  {
    name: 'DigitalOcean',
    icon: FaDigitalOcean,
    type: 'others',
  },
  {
    name: 'NGINX',
    icon: SiNginx,
    type: 'others',
  },
  {
    name: 'Git',
    icon: BsGit,
    type: 'others',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    type: 'others',
  },
];
