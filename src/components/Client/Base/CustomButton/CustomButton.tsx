import React from 'react';
import './CustomButton.css';
import { Link } from 'react-router-dom';
import { PropsInterface, SizeButtonEnum, TagButtonEnum, TypeButtonEnum } from './custom-buttom.interface';


export function CustomButton(props: PropsInterface): JSX.Element {
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

CustomButton.defaultProps = {
  tag: TagButtonEnum.A,
  size: SizeButtonEnum.LARGE,
  type: TypeButtonEnum.PRIMARY,
  to: '/',
  download: false,
  value: 'Ingresa un texto'
}
