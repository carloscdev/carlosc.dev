import React, { useState } from 'react';
import { BaseModal } from '../../../../components/Client/Base';
import Design from '../../../../assets/services/design.png'
import Code from '../../../../assets/services/code.png'
import Teach from '../../../../assets/services/teach.png'
import Asesor from '../../../../assets/services/asesor.png'
import Tutorial from '../../../../assets/services/tutorial.png'
import { SizeModalEnum } from '../../../../components/Client/Base/BaseModal/base-modal.interface';

interface ServicesInterface {
  icon: string;
  title: string;
  description: string;
}

export function Services(): JSX.Element{

  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState<ServicesInterface>();

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCurrentService = (data: ServicesInterface) => {
    setCurrentService(data);
    handleShowModal();
  };

  const serviceList: ServicesInterface[] = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.'
    },
    {
      icon: Design,
      title: 'Diseño UI',
      description: 'Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones bien pensadas.'
    },
    {
      icon: Teach,
      title: 'Mentorías',
      description: 'Realmente me preocupo por las personas que van comenzando y me encanta ayudar compartiendo conocimientos.'
    },
    {
      icon: Tutorial,
      title: 'Cursos / Tutoriales',
      description: 'Realmente me preocupo por las personas que van comenzando y me encanta ayudar compartiendo conocimientos.'
    },
    {
      icon: Asesor,
      title: 'Asesorías',
      description: 'Realmente me preocupo por las personas que van comenzando y me encanta ayudar compartiendo conocimientos.'
    }
  ]

  return (
    <section className="bg-secondary">
      <div className="py-20 content text-white grid md:grid-cols-[0.4fr,_1fr] gap-10 text-sm">
        <div>
          <h3 className="text-3xl font-semibold mb-5">
            ¿Interesado en trabajar conmigo?
          </h3>
          <p className="opacity-70">
            Mis Principales competencias están relacionadas al desarrollo / diseño web, creación de contenido audiovisual y enseñanza online.
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 items-center gap-5">
          {
            serviceList.map((item, index) => (
              <li key={index} className="flex items-center gap-3 px-5 h-28 rounded-lg bg-white/5 cursor-pointer hover:-translate-y-1 ease-in duration-100" onClick={() => handleCurrentService(item)}>
                <img src={item.icon} alt={item.title} width="50" />
                <h4 className="font-semibold">{ item.title }</h4>
              </li>
            ))
          }
          <li className="flex flex-col items-center justify-center gap-3 px-1 h-full rounded-lg">
            <h4 className="text-center font-semibold">¿Buscas algo más personalizado?</h4>
            <a href="https://api.whatsapp.com/send?phone=51962666663" target="_blank" rel="noopener noreferrer" className="text-primary-light underline">Contactar</a>
          </li>
        </ul>
      </div>
      <BaseModal showModal={showModal} handleShowModal={handleShowModal} size={SizeModalEnum.SMALL} >
          <section>
            <div className="flex items-center gap-5">
              <img src={currentService?.icon} alt={currentService?.title} width="70" />
              <h4 className="font-semibold text-lg">{ currentService?.title }</h4>
            </div>
            <hr />
            <p className="pt-10">
              { currentService?.description }
            </p>
          </section>
      </BaseModal>
    </section>
  )
}
