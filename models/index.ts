/** @format */

import { LucideIcon } from 'lucide-react';

export type User = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  position: string;
  infos: string[];
};

export type SkillGroup = {
  name: string;
  child: string[];
  icon: {
    iconType: LucideIcon;
    className: string;
  };
  markerClassName?: string;
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
};

export enum CVType {
  FULLSTACK = 'fullstack',
  FRONTEND = 'frontend',
}

export type CVData = {
  [string: string]: {
    user: User;
    skillGroups: SkillGroup[];
    experiences: Experience[];
  };
};
