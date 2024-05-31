import { TEXT } from '@/const/text';
import { useSearchParams } from 'react-router-dom';

export const useLang = () => {
  const [params] = useSearchParams();

  const LANG = params.get('lang') ? TEXT.ENG : TEXT.ESP;
  const isEng = params.get('lang') ? true : false;

  return { LANG, isEng };
};
