import React from 'react';
import { About, Hero, Services, Stats } from "./components";

export function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
    </>
  )
}
