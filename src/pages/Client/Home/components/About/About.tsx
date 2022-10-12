import React from 'react';
import { Profile, Education, Stack, Experience } from './components';


export function About(): JSX.Element {
  return (
    <section className="py-20" id='about'>
      <div className="content">
        <h2 className="text-center mb-10">
          Sobre Mi
        </h2>
        <main className="grid md:grid-cols-[1fr,_0.7fr] gap-10">
          <div>
            <div className="grid gap-10">
              <Profile />
              <Experience />
            </div>
          </div>
          <div>
            <div className="grid gap-10">
              <Education />
              <Stack />
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}