import React from 'react';
import { BasePaperInterface } from './base-paper.interface';

export function BasePaper(props: BasePaperInterface): JSX.Element {

  const { background, border, children } = props;

  return (
    <article className={`rounded-lg ${background ? 'bg-white' : 'bg-transparent'} ${border ? 'border' : 'border-none'}`}>
      { children }
    </article>
  )
}

BasePaper.defaultProps = {
  background: true,
  border: true
}