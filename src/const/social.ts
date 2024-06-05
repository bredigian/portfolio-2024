import {
  FaFileArrowDown,
  FaGithub,
  FaInstagram,
  FaTelegram,
} from 'react-icons/fa6';

import { BsLinkedin } from 'react-icons/bs';
import { TSocial } from '@/types/social.types';

export const SOCIAL: TSocial[] = [
  {
    name: 'Telegram',
    icon: FaTelegram,
    url: 'tg://resolve?domain=bredigian',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/gianlucabredice',
  },
  {
    name: 'LinkedIn',
    icon: BsLinkedin,
    url: 'https://www.linkedin.com/in/gianluca-bredice-vivarelli/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/bredigian',
  },
  {
    name: 'Resume',
    name_es: 'CV',
    icon: FaFileArrowDown,
    url: './Gianluca_Bredice_Vivarelli-CV_English.pdf',
    url_es: './Gianluca_Bredice_Vivarelli-CV.pdf',
  },
];
