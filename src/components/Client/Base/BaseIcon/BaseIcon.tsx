import React from 'react';
import { PropsInterface, TypeIconEnum } from './base-icon.interface';
import './BaseIcon.css';




export function BaseIcon(props: PropsInterface): JSX.Element {
  const { icon: Icon = 'p', type = TypeIconEnum.LIGHT, style = '' } = props;
  return (
    <div className={`base-icon ${style} ${type === TypeIconEnum.LIGHT ? 'bg-primary-light ' : 'bg-primary'}`}>
      <Icon />
    </div>
  )
}
