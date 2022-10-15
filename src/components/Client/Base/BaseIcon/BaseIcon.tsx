import React from 'react';
import { PropsIconInterface, TypeIconEnum } from './base-icon.interface';
import './BaseIcon.css';




export function BaseIcon(props: PropsIconInterface): JSX.Element {
  const { icon: Icon = 'p', type = TypeIconEnum.LIGHT, style = '' } = props;
  return (
    <div className={`base-icon ${style} ${type === TypeIconEnum.LIGHT ? 'bg-primary-light ' : 'bg-primary'}`}>
      <Icon />
    </div>
  )
}
