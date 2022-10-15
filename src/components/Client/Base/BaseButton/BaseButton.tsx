import React from 'react';
import './BaseButton.css';
import { Link } from 'react-router-dom';
import { PropsButtonInterface, SizeButtonEnum, TagButtonEnum, TypeButtonEnum } from './base-button.interface';


export function BaseButton(props: PropsButtonInterface): JSX.Element {
  const {
    tag,
    type,
    size,
    to,
    download,
    value,
    action
  } = props;

  const customClass = `custom-button ${type} ${size}`

  const component = {
    [TagButtonEnum.A]: <a href={to} target="_blank" rel="noreferrer noopener" className={customClass} download={download}>{value}</a>,
    [TagButtonEnum.BUTTON]: <button className={customClass} onClick={action}>{value}</button>,
    [TagButtonEnum.LINK]: <Link to={to!} className={customClass}>{value}</Link>
  }
  return component[tag!]
}

BaseButton.defaultProps = {
  tag: TagButtonEnum.A,
  size: SizeButtonEnum.LARGE,
  type: TypeButtonEnum.PRIMARY,
  to: '/',
  download: false,
  value: 'Ingresa un texto'
}
