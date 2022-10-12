import React from 'react';
import { About, Comments, Hero, Services, Stats } from "./components";

export function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Comments />
    </>
  )
}
