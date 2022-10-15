import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BaseModal } from '../Base';
import { SizeModalEnum } from '../Base/BaseModal/base-modal.interface';
import { PropsModalProfileInterface } from './modal-profile.interface';
import PhotoProfile from '../../../assets/me.jpg';
import Js from '../../../assets/stack/js.svg';
import Ts from '../../../assets/stack/ts.svg';
import Mongo from '../../../assets/stack/mongo.svg';
import VueJs from '../../../assets/stack/vue.svg';
import ReactJs from '../../../assets/stack/react.svg';
import NodeJs from '../../../assets/stack/node.svg';
import Python from '../../../assets/stack/python.svg';
import { FaFireAlt, FaCheckCircle } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

export function ModalProfile(props: PropsModalProfileInterface): JSX.Element {

  const { showModal, handleShowModal } = props;

  const [firstCharge, setFirstCharge] = useState(true)
  const [_, setSearchParams] = useSearchParams({});

  const stack: string[] = [
    Js, Ts, VueJs, ReactJs, NodeJs, Python, Mongo
  ];

  const itemList = [
    { title: 'Experiencia', data: '+ 3 años', icon: FaFireAlt },
    { title: 'Alumnos', data: '+ 16k', icon: FaCheckCircle },
    { title: 'Freelance', data: 'Disponible', icon: FaCheckCircle },
  ];

  useEffect(() => {
    if (!firstCharge) {
      const body = document.querySelector('body') as HTMLElement;
      if (showModal) {
        body.classList.add('overflow-y-hidden');
      } else {
        body.classList.remove('overflow-y-hidden');
        setSearchParams({});
      }
    } else {
      setFirstCharge(false);
    }
  }, [showModal])


  return (
    <>
      {
        showModal && (
          <section className="custom-modal" onClick={handleShowModal}>
            <main className='custom-modal-container w-[468px]' onClick={(e) => e.stopPropagation()}>
              <MdOutlineClose className="text-lg absolute top-3 right-3 cursor-pointer" onClick={handleShowModal} />
              <div className="relative" id="title">
                <div className="flex items-center gap-5 border-b pb-5">
                  <img src={PhotoProfile} alt="carloscdev" width="70" height="70" className="rounded-full" />
                  <div className="w-full">
                    <h5 className="font-semibold">
                      Carlos Córdova
                    </h5>
                    <p className="text-sm opacity-70">Software Craftsman at Apside</p>
                    <p className="text-xs font-semibold">Perú</p>
                  </div>
                </div>
                <ul className="py-5 border-b flex items-center justify-between">
                  {
                    itemList.map((item, index) => (
                      <li className="text-sm" key={index}>
                        <span>
                          { item.title }
                        </span>
                        <br />
                        <span className="font-semibold flex items-center gap-1">
                          <item.icon className="text-lime-500" />
                          { item.data }
                        </span>
                      </li>
                    ))
                  }
                </ul>
                <ul className="flex items-center pt-5">
                  {
                    stack.map((item, index) => (
                      <li className={`rounded-full grid h-12 w-12 border place-content-center relative bg-white`} style={{left: `calc(-${index}px * 10)`}} key={index + 10}>
                        <img src={item} alt="Logo Stack" width="30" height="30" />
                      </li>
                    ))
                  }
                  <li className="rounded-full grid h-12 w-12 border place-content-center font-semibold text-primary relative bg-white" style={{left: `calc(-${stack.length}px * 10)`}}>
                    +8
                  </li>
                </ul>
              </div>
            </main>
          </section>
        )
      }
    </>
  )
}
