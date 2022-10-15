export enum TagButtonEnum {
  A='a',
  LINK='link',
  BUTTON='button'
}

export enum TypeButtonEnum {
  PRIMARY='primary',
  OUTLINE='outline',
  NONE='none'
}

export enum SizeButtonEnum {
  LARGE='large',
  MEDIUM='medium',
  SMALL='small'
}

export interface PropsButtonInterface {
  tag?: TagButtonEnum;
  type?: TypeButtonEnum;
  size?: SizeButtonEnum;
  to?: string;
  download?: boolean;
  value: string;
  action?: () => void;
}