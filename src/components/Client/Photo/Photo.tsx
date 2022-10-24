import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PhotoProfile from '../../../assets/me.webp';
import { ModalProfile } from '../..';

export function Photo(): JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams()

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
    setSearchParams({ modal: 'special-card' });
  }

  useEffect(() => {
    if (searchParams.get('modal') === 'special-card') {
      handleShowModal();
    }
  }, [])

  return (
    <>
      <figure className="relative cursor-zoom-in" onClick={handleShowModal}>
        <span className="flex h-3 w-3 absolute bottom-0 right-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
        </span>
        <img src={PhotoProfile} alt="carloscdev" width="70" height="70" className="rounded-full" />
      </figure>
      <ModalProfile showModal={showModal} handleShowModal={handleShowModal} />
    </>
  )
}
