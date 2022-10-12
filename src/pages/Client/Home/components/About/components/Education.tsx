import React from 'react'
import { BasePaper } from '../../../../../../components/Client/Base';

interface EducationListInterface {
  country: string;
  status: string;
  title: string;
  university: string;
}

export function Education(): JSX.Element {

  const educationList: EducationListInterface[] = [
    {
      country: 'España',
      status: 'Cursando',
      title: 'Maestría en Desarrollo de Aplicaciones y Servicios Web',
      university: 'Universidad Internacional de Valencia'
    },
    {
      country: 'Perú',
      status: 'Egresado',
      title: 'Ingeniería de Sistemas e Informática',
      university: 'Universidad Continental'
    },
    {
      country: 'México - Pasantía',
      status: 'Culminado',
      title: 'Ingeniería en Tecnologías de la Información',
      university: 'Universidad Tecnológica de Huejotzingo'
    }
  ]

  return (
    <div>
      <h4 className="mb-3 font-semibold">Educación</h4>
      <BasePaper>
        <section className="p-10">
          <ul>
            {
              educationList.map((item, index): JSX.Element=> (
                <li key={index} className="border-b last:border-none py-3 first:pt-0 last:pb-0 grid gap-1">
                  <span className="opacity-70 text-xs">
                    {item.country} - {item.status}
                  </span>
                  <strong className="text-sm">{item.title}</strong>
                  <span className="text-xs opacity-70">{item.university}</span>
                </li>
              ))
            }
          </ul>
        </section>
      </BasePaper>
    </div>
  )
}
