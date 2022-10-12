import { IconType } from 'react-icons';

export enum TypeIconEnum {
  LIGHT='light',
  DARK='dark'
}

export interface PropsInterface {
  icon: IconType;
  type?: TypeIconEnum;
  style?: string;
}