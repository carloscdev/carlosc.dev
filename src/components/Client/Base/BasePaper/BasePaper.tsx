import React from 'react';
import { PropsPaperInterface } from './base-paper.interface';

export function BasePaper(props: PropsPaperInterface): JSX.Element {

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