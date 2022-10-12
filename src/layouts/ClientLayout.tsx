import React from 'react';
import { Footer, Navbar } from '../components/Client/Base';
import ClientProvider from '../context/client.context';

interface PropsInterface {
  children: React.ReactElement
}

export function ClientLayout(props: PropsInterface): JSX.Element {
  const { children } = props;

  return (
    <ClientProvider>
      <Navbar />
      <section>
        {children}
      </section>
      <Footer />
    </ClientProvider>
  )
}
