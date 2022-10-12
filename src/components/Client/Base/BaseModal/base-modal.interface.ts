export enum SizeModalEnum {
  SMALL= 'w-[468px]',
  MEDIUM= 'w-[768px]',
  LARGE= 'w-[1080px]'
}

export interface ModalInterface {
  showModal: boolean;
  handleShowModal: () => void;
  children: React.ReactNode;
  size?: SizeModalEnum;
}