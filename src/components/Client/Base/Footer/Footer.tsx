import React from 'react';

export function Footer():JSX.Element {

  const footerList = [
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
      title: '¿Necesitas Ayuda?',
      projects: [
        { title: 'Discord', url: 'https://discord.gg/z9XxP4n9' },
        { title: 'Youtube', url: 'https://www.youtube.com/c/carloscdev' },
        { title: 'Instagram', url: 'https://instagram.com/carloscdev' },
        { title: 'Twitter', url: 'https://twitter.com/carloscdev' },
      ]
    }
  ]

  return (
    <footer className="bg-secondary border-t-[0.5px] border-gray-70">
      <section className="border-b-[0.5px] border-gray-700 py-20 text-custom-white">
        <div className="content grid sm:grid-cols-2 md:grid-cols-4 gap-5">
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
        </div>
      </section>
    </footer>
  )
}
