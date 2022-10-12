export enum SizeModalEnum {
  SMALL= 'w-[468px]',
  MEDIUM= 'w-[468px]',
  LARGE= 'w-[468px]'
}

export interface ModalInterface {
  showModal: boolean;
  handleShowModal: () => void;
  children: React.ReactNode;
  size?: SizeModalEnum;
}