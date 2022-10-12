import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineCode, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BasePaper } from '../../../../../../components/Client/Base';


interface ExperienceListInterface {
  title: string;
  company: string;
  country: string;
  list: {
      icon: IconType;
      subtitle: string;
      sublist: string[];
  }[];
}

export function Experience() {

  const [currentExperience, setCurrentExperience] = useState<number>(0);

  const experienceList: ExperienceListInterface[] = [
    {
      title: 'Front-end Developer',
      company: 'Apside',
      country: 'Chile',
      list: [
        {
          icon: AiOutlineInfoCircle,
          subtitle: 'INFORMACIÓN',
          sublist: [
            'Julio 2022 - Actual',
            'Análisis, diseño y desarrollo de aplicaciones web en el lado del cliente.'
          ]
        },
        {
          icon: AiOutlineCode,
          subtitle: 'TECNOLOGÍAS',
          sublist: ['Html / Css / Buefy', 'JavaScript / Vue JS', 'Axios / AWS / Figma']
        }
      ]
    },
    {
      title: 'Front-end Developer',
      company: 'Weeare',
      country: 'Perú',
      list: [
        {
          icon: AiOutlineInfoCircle,
          subtitle: 'Información',
          sublist: [
            'Dic 2020 - Junio 2022',
            'Desarrollé interfaces e implementé lógica en el lado del cliente para los nuevos proyectos',
            'Migré proyectos antiguos utilizando tecnologías modernas',
            'Propuse soluciones para mejorar los flujos de la empresa',
            'Apoyé al equipo de Backend para realizar nuevas APIs'
          ]
        },
        {
          icon: AiOutlineCode,
          subtitle: 'TECNOLOGÍAS',
          sublist: ['Html / Css / Buefy / Tailwind CSS', 'JavaScript / Vue JS / Nuxt JS', 'Python / DJango / Postgresql', 'Postman / Figma']
        }
      ]
    },
    {
      title: 'Front-end Developer',
      company: 'UPC',
      country: 'Perú',
      list: [
        {
          icon: AiOutlineInfoCircle,
          subtitle: 'Información',
          sublist: [
            'Oct 2020 - Dic 2020',
            'Desarrollé interfaces modernas y responsivas',
            'Mjoré y optimicé interfaces de proyectos antiguos',
            'Investigué y propuse tecnologías para nuevos proyectos',
          ]
        },
        {
          icon: AiOutlineCode,
          subtitle: 'TECNOLOGÍAS',
          sublist: ['Html / Css / Scss / Bootstrap', 'JavaScript / Jquery / Gastby JS', 'Wordpress']
        }
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      country: 'Huancayo / Pucallpa / Lima',
      list: [
        {
          icon: AiOutlineInfoCircle,
          subtitle: 'Información',
          sublist: [
            'Abr 2017 - Ago 2020',
            'Desarrollé e implementé aplicaciones web personalizadas',
            'Creé landing pages optimizadas y adaptables',
            'Trabajé directamente con los clientes durante la planificación y desarrollo de los proyectos'
          ]
        },
        {
          icon: AiOutlineCode,
          subtitle: 'TECNOLOGÍAS',
          sublist: ['Html / Css / Scss / Bootstrap', 'JavaScript / Jquery / Axios', 'Vue JS / Nuxt JS / React JS', 'Php / MySql']
        }
      ]
    }
  ]

  return (
    <div>
      <h4 className="mb-3 font-semibold">Experiencia</h4>
      <BasePaper>
        <ul>
          {
            experienceList.map((item, index): JSX.Element => (
              <li key={index}>
                <div
                  className="flex items-center border-b gap-5 p-10 group cursor-pointer justify-between font-semibold"
                  onClick={() => setCurrentExperience(index)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid place-content-center border-2 border-primary rounded-full h-10 w-10 text-primary text-sm">
                      { index + 1 }
                    </div>
                    <h5 className="group-hover:text-primary leading-4 mt-1">
                      { item.title }
                      <br />
                      <span className="text-xs opacity-70 font-light">
                        { item.company } - { item.country }
                      </span>
                    </h5>
                  </div>
                  <MdKeyboardArrowDown className={`text-2xl ease-in duration-100 ${currentExperience === index && 'rotate-180'}`} />
                </div>
                {
                  index === currentExperience &&
                  <div className="p-10 grid gap-5 border-b">
                    {
                      item.list.map((subitem, index): JSX.Element => (
                        <div className="text-sm" key={index + 10}>
                          <h6 className="font-semibold tracking-widest flex items-center gap-1 mb-3">
                            <subitem.icon className="text-lg text-primary" />
                            { subitem.subtitle }
                          </h6>
                          <ul className="text-xs custom-list opacity-70">
                            {
                              subitem.sublist.map((element, index): JSX.Element=> (
                                <li className="mb-3" key={index + 100}>
                                  { element }
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                }
              </li>
            ))
          }
        </ul>
      </BasePaper>
    </div>
  )
}
