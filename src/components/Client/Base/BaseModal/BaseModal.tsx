import React, { useEffect } from 'react';
import { ModalInterface, SizeModalEnum } from './base-modal.interface';
import { MdOutlineClose } from 'react-icons/md';
import './BaseModal.css';


export function BaseModal(props: ModalInterface): JSX.Element {
  const { showModal, handleShowModal, children, size } = props;

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    body.classList.toggle('overflow-y-hidden');
  }, [showModal])

  return (
    <>
      {
        showModal && (
          <section className="inset-0 bg-black/90 w-screen h-screen fixed z-50 flex items-center justify-center custom-modal bg-blend-darken" onClick={handleShowModal}>
            <main className={`bg-white rounded-lg mx-auto max-w-[90%] max-h-[90vh] p-10 shadow overflow-y-auto relative ${size}`} onClick={(e) => e.stopPropagation()}>
              <MdOutlineClose className="text-lg absolute top-3 right-3 cursor-pointer" onClick={handleShowModal} />
              { children }
            </main>
          </section>
        )
      }
    </>
  )
}

BaseModal.defaultProps = {
  size: SizeModalEnum.LARGE
}
