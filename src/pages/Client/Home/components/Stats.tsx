import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineCode, AiOutlineFundProjectionScreen, AiOutlineYoutube } from 'react-icons/ai';
import { BaseIcon } from '../../../../components';
import { TypeIconEnum } from '../../../../components/Client/Base/BaseIcon/base-icon.interface';

interface StatListInterface {
  icon: IconType;
  stat: string;
  description: string;
}

export function Stats() {

  const statList: StatListInterface[] = [
    {
      icon: AiOutlineCode,
      stat: '+ 3 Años',
      description: `De experiencia en el desarrollo web, siempre estoy en constante aprendizaje.`
    },
    {
      icon: AiOutlineCode,
      stat: '+ 100K',
      description: `Líneas de Código, a lo largo de estos años de experiencia he trabajado en diversos proyectos.`
    },
    {
      icon: AiOutlineFundProjectionScreen,
      stat: '+ 16K',
      description: `Estudiantes inscritos en Udemy, plataforma en la cual comparto cursos gratuitos.`
    },
    {
      icon: AiOutlineYoutube,
      stat: '+ 630',
      description: `Suscriptores en mi canal de youtube, donde subo tutoriales para desarrolladores front-end.`
    }
  ]

  return (
    <section className="bg-primary text-white py-20 bg-custom">
      <div className="content">
        <ul className="grid md:grid-cols-4 gap-10">
          {
            statList.map((item, index) => (
              <li key={index}>
                <div className="flex items-center gap-1 mb-5">
                  <BaseIcon icon={item.icon} type={TypeIconEnum.LIGHT} />
                  <h3 className="text-xl font-semibold">{item.stat}</h3>
                </div>
                <p className="font-light text-sm">
                  {item.description}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
