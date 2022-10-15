import { IconType } from 'react-icons';

export enum TypeIconEnum {
  LIGHT='light',
  DARK='dark'
}

export interface PropsIconInterface {
  icon: IconType;
  type?: TypeIconEnum;
  style?: string;
}