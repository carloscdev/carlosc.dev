import React, { useEffect, useState } from 'react';
import { BaseModal, BaseButton } from '../../../../components/Client';
import { TagButtonEnum, TypeButtonEnum } from '../../../../components/Client/Base/BaseButton/base-button.interface';
import CvCarlos from '../../../../assets/cv.pdf';
import { useSearchParams } from 'react-router-dom';
import { Social } from '../../../../components/Client';



export function Hero(): JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams()

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
    setSearchParams({ modal: 'cv' });
  }

  useEffect(() => {
    if (searchParams.get('modal') === 'cv') {
      handleShowModal()
    }
  }, [])

  const redirectAboutMe = () => {
    const about = document.getElementById('about') as HTMLElement;
    window.scroll({ top: about.getBoundingClientRect().y, left: 0, behavior: "smooth" });
  }

  return (
    <section className="md:py-36 py-10 bg-secondary min-h-[80vh] flex bg-custom">
      <div className="text-white content grid md:grid-cols-[1fr,_0.7fr] items-center gap-5 md:gap-10">
        <div>
          <h1>
            Carlos Córdova
            <br />
            <span className="text-primary">
            Systems Engineer
            </span>
          </h1>
          <p className="opacity-70 text-xl py-10">
            Front-end Developer con más de 3 años de experiencia,
            apasianado por la tecnología y la enseñanza online.
          </p>
          <div className="flex items-center gap-5 mb-10">
            <BaseButton value="Sobre Mi" tag={TagButtonEnum.BUTTON} action={redirectAboutMe} />
            <BaseButton value="Currículum" type={TypeButtonEnum.OUTLINE} tag={TagButtonEnum.BUTTON} action={handleShowModal}  />
          </div>
          <Social />
        </div>
      </div>
      <BaseModal showModal={showModal} handleShowModal={handleShowModal}>
        <iframe src={CvCarlos} className="w-full aspect-[9/10] hidden sm:block" />
        <div className="block sm:hidden">
          <p className="mb-5">No se puede visualizar el PDF en este dispositivo</p>
          <BaseButton value="Descargar CV" to={CvCarlos} download={true} />
        </div>
      </BaseModal>
    </section>
  )
}
