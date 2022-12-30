import React, { useEffect, useState } from 'react';
import { ContactForm, BaseModal, BaseButton, Social } from '../..';
import { useSearchParams } from 'react-router-dom';
import { TagButtonEnum } from '../Base/BaseButton/base-button.interface';
import { SizeModalEnum } from '../Base/BaseModal/base-modal.interface';

export function Footer():JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams()

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
    setSearchParams({ modal: 'contact' });
  }

  useEffect(() => {
    if (searchParams.get('modal') === 'contact') {
      handleShowModal();
    }
  }, [])

  const footerList = [
    {
      title: '¿Necesitas Ayuda?',
      projects: [
        { title: 'Comunidad Discord', url: 'https://discord.gg/rtMf4B7G' },
        { title: 'Canal de Youtube', url: 'https://www.youtube.com/c/carloscdev' },
        { title: 'DM Instagram', url: 'https://instagram.com/carlosc.dev' },
        { title: 'DM Twitter', url: 'https://twitter.com/carloscdev' },
      ]
    },
    {
      title: 'Proyectos Random',
      projects: [
        { title: 'Custom Linktree', url: 'https://github.com/carloscdev/linktree-carloscdev' },
        { title: 'Simpsons API', url: 'https://github.com/carloscdev/nestjs-simpsons-api' },
        { title: 'Agenda Personal', url: 'https://github.com/carloscdev/django-agenda-personal' },
        { title: 'Lista de Tareas', url: 'https://github.com/carloscdev/take-notes-backend-carloscdev' },
      ]
    },
    {
      title: 'Videos Populares',
      projects: [
        { title: 'Zombie con CSS', url: 'https://youtu.be/YoMMqUR6IVk' },
        { title: 'Efectos para botones', url: 'https://youtu.be/55bW27rIPzI' },
        { title: 'Gráficos con Chart JS', url: 'https://youtu.be/eyTKJmN-I2o' },
        { title: 'Extensiones para VSC', url: 'https://youtu.be/N-vS7LnTcYQ' },
      ]
    }
  ]

  return (
    <footer className="bg-secondary bg-custom">
      <section className="border-b-[0.5px] border-gray-700 py-20 text-white">
        <div className="content grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 items-center text-center sm:text-left">
          {
            footerList.map((item, index): JSX.Element => (
              <div className="text-sm" key={index}>
                <h5 className="font-semibold mb-5">
                  { item.title }
                </h5>
                <ul className="opacity-70 grid gap-3">
                  {
                    item.projects.map((item, index): JSX.Element => (
                      <li key={index + 10}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                          { item.title }
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
          <div>
            <h4 className="font-semibold text-center mb-5 text-sm">
              ¿Tienes algún comentario, duda o sugerencia?
            </h4>
            <BaseButton value="Contáctame" tag={TagButtonEnum.BUTTON} action={handleShowModal} />
            <div className="mt-3">
              <Social />
            </div>
          </div>
        </div>
      </section>
      <section className="content text-center opacity-70 py-5 text-xs text-white">
        <p className="font-semibold">Made with React JS, TypeScript & Tailwind CSS</p>
      </section>
      <BaseModal showModal={showModal} handleShowModal={handleShowModal} size={SizeModalEnum.SMALL}>
        <ContactForm />
      </BaseModal>
    </footer>
  )
}
