import React from 'react';
import { ModalInterface } from './base-modal.interface';



export function BaseModal(props: ModalInterface): JSX.Element {
  const { showModal, handleShowModal, children, size } = props;

  return (
    <>
      {
        showModal && (
          <section className="inset-0 bg-black/90 w-screen h-screen fixed z-50 flex items-center justify-center custom-modal bg-blend-darken" onClick={handleShowModal}>
            <main className={`bg-custom-white rounded-lg mx-auto max-w-[90%] max-h-[90vh] p-10 shadow overflow-y-auto ${size}`} onClick={(e) => e.stopPropagation()}>
              { children }
            </main>
          </section>
        )
      }
    </>
  )
}
