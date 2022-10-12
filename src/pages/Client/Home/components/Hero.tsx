import React, { useState } from 'react';
import { BaseModal, CustomButton } from '../../../../components/Client';
import { AiOutlineGithub, AiOutlineCodepen, AiOutlineYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiUdemy } from 'react-icons/si';
import { TagButtonEnum, TypeButtonEnum } from '../../../../components/Client/Base/CustomButton/custom-buttom.interface';
import { IconType } from 'react-icons';
import CvCarlos from '../../../../assets/cv.pdf';

interface SocialListInterface {
  url: string;
  icon: IconType;
}

export function Hero(): JSX.Element {

  const socialList: SocialListInterface[] = [
    {
      url: 'https://www.youtube.com/c/carloscdev/',
      icon: AiOutlineYoutube
    },
    {
      url: 'https://www.udemy.com/user/carlos-cordova-20/',
      icon: SiUdemy
    },
    {
      url: 'https://github.com/carloscdev',
      icon: AiOutlineGithub
    },
    {
      url: 'https://codepen.io/carloscdev',
      icon: AiOutlineCodepen
    },
    {
      url: 'https://www.instagram.com/carlosc.dev/',
      icon: AiOutlineInstagram
    },
    {
      url: 'https://twitter.com/carloscdev',
      icon: AiOutlineTwitter
    }
  ]

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    const body = document.querySelector('body') as HTMLElement;
    body.classList.toggle('overflow-y-hidden');
    setShowModal(!showModal);
  }

  return (
    <section className="md:py-36 py-10 bg-secondary mt-20 min-h-[80vh] flex">
      <div className="text-white content grid md:grid-cols-[1fr,_0.7fr] items-center justify-between gap-5 md:gap-10">
        <div>
          <h1 className="text-3xl md:text-[45px] font-semibold md:leading-[3rem]">
            Carlos Córdova
            <br />
            <span className="text-primary">
            Systems Engineer
            </span>
          </h1>
          <p className="opacity-70 text-xl py-7">
            Front-end Developer con más de 3 años de experiencia,
            apasianado por la tecnología y la enseñanza online.
          </p>
          <div className="flex items-center gap-5">
            <CustomButton value="Sobre Mi" />
            <CustomButton value="Ver Currículum" type={TypeButtonEnum.OUTLINE} tag={TagButtonEnum.BUTTON} action={handleShowModal}  />
          </div>
          <ul className="flex items-center gap-3 text-3xl mt-10">
            {
              socialList.map((item, index) => (
                <li key={index} className="opacity-70 hover:opacity-100">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <item.icon />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
        </div>
      </div>
      <BaseModal showModal={showModal} handleShowModal={handleShowModal}>
        <iframe src={CvCarlos} className="w-full aspect-[9/10] hidden sm:block" />
        <div className="block sm:hidden">
          <p className="mb-5">No se puede visualizar el PDF en este dispositivo</p>
          <CustomButton value="Descargar CV" to={CvCarlos} download={true} />
        </div>
      </BaseModal>
    </section>
  )
}
