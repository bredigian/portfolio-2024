import { IconType } from 'react-icons';

type TSkillType = 'frontend' | 'backend' | 'database' | 'others';

export type TSkill = {
  name: string;
  icon: IconType;
  type: TSkillType;
};
