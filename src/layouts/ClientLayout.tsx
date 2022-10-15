import React from 'react';
import { Footer, Navbar } from '../components/Client';
import ClientProvider from '../context/client.context';

interface PropsClientInterface {
  children: React.ReactElement
}

export function ClientLayout(props: PropsClientInterface): JSX.Element {
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
