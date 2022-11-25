import React, { useState, useEffect } from 'react';
import { BaseModal } from '../../../../components/Client/Base';
import Design from '../../../../assets/services/design.png'
import Code from '../../../../assets/services/code.png'
import Teach from '../../../../assets/services/teach.png'
import Asesor from '../../../../assets/services/asesor.png'
import Tutorial from '../../../../assets/services/tutorial.png'
import { SizeModalEnum } from '../../../../components/Client/Base/BaseModal/base-modal.interface';
import { useSearchParams } from 'react-router-dom';

interface ServicesInterface {
  icon: string;
  title: string;
  slug: string;
  description: string;
  list: string[];
}

export function Services(): JSX.Element{

  const [searchParams, setSearchParams] = useSearchParams();

  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState<ServicesInterface>();

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCurrentService = (data: ServicesInterface) => {
    setSearchParams({ modal: data.slug })
    setCurrentService(data);
    handleShowModal();
  };

  const serviceList: ServicesInterface[] = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      slug: 'desarrollo-web',
      description: 'Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador 💻.',
      list: ['Desarrollo Front-end', 'Desarrollo Backend', 'Base de Datos']
    },
    {
      icon: Design,
      title: 'Diseño UI',
      slug: 'diseno-ui',
      description: 'Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones bien pensadas 🎨.',
      list: ['Diseño de Interfaces', 'Paleta de colores']
    },
    {
      icon: Teach,
      title: 'Mentorías',
      slug: 'mentorias',
      description: 'Realmente me preocupo por las personas que van comenzando en el desarrollo front-end y me encanta ayudar compartiendo conocimientos 👨‍🏫.',
      list: ['Reuniones Online', 'Preguntas por Discord']
    },
    {
      icon: Tutorial,
      title: 'Cursos / Tutoriales',
      slug: 'cursos-tutoriales',
      description: 'Puedes encontrar todos mis tutoriales en mi canal de Youtube y mis cursos en la plataforma de Udemy 📚.',
      list: ['Cursos en Udemy', 'Tutoriales en Youtube']
    },
    {
      icon: Asesor,
      title: 'Asesorías',
      slug: 'asesorias',
      description: 'Te ayudo a mejorar tu CV y marca personal para que puedas proyectar una imagen que sobresalga y sea atrayente 🚀.',
      list: ['Tips para CV', 'Mejora tu marca personal']
    }
  ]

  useEffect(() => {
    if (searchParams.get('modal')) {
      const service = serviceList.find((item) => item.slug === searchParams.get('modal')) as ServicesInterface;
      if (service) {
        handleCurrentService(service);
      }
    }
  }, [])

  return (
    <section className="bg-secondary bg-custom shadow">
      <div className="py-20 content text-white grid md:grid-cols-[0.4fr,_1fr] gap-10 text-sm">
        <div>
          <h3 className="text-3xl font-semibold mb-5">
            Freelance
            <br />
            <span className="text-lime-500 animate-pulse">Disponible</span>
          </h3>
          <p className="opacity-70">
            Mis principales competencias profesionales están relacionadas al desarrollo / diseño web, creación de contenido audiovisual y enseñanza online.
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 items-center gap-5">
          {
            serviceList.map((item, index) => (
              <li key={index} className="flex items-center gap-3 px-5 h-24 rounded-lg bg-secondary-light cursor-pointer up-animation" onClick={() => handleCurrentService(item)}>
                <img src={item.icon} alt={item.title} width="45" height="45" />
                <h4 className="font-semibold">{ item.title }</h4>
              </li>
            ))
          }
          <li className="flex flex-col items-center justify-center gap-3 px-1 h-full rounded-lg">
            <h4 className="text-center font-semibold">¿Buscas algo más personalizado?</h4>
            <a href="https://api.whatsapp.com/send?phone=51962666663" target="_blank" rel="noopener noreferrer" className="text-lime-500 underline">Contactar</a>
          </li>
        </ul>
      </div>
      <BaseModal showModal={showModal} handleShowModal={handleShowModal} size={SizeModalEnum.SMALL} >
          <section>
            <div className="flex items-center gap-5">
              <img src={currentService?.icon} alt={currentService?.title} width="70" height="70" />
              <h3 className="font-semibold text-lg">{ currentService?.title }</h3>
            </div>
            <hr />
            <p className="pt-10 mb-5">
              { currentService?.description }
            </p>
            <ul className="text-sm custom-list opacity-70">
              {
                currentService?.list.map((item, index) => (
                  <li className="mb-3" key={index}>
                    { item }
                  </li>
                ))
              }
            </ul>
          </section>
      </BaseModal>
    </section>
  )
}
