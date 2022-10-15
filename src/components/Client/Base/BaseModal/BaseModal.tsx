import React, { useEffect, useState } from 'react';
import { PropsModalInterface, SizeModalEnum } from './base-modal.interface';
import { MdOutlineClose } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

export function BaseModal(props: PropsModalInterface): JSX.Element {
  const { showModal, handleShowModal, children, size } = props;
  const [firstCharge, setFirstCharge] = useState(true)
  const [_, setSearchParams] = useSearchParams({});

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
            <main className={`custom-modal-container ${size}`} onClick={(e) => e.stopPropagation()}>
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
