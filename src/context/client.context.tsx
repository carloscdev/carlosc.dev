import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ClientInterface {
  showModal: boolean;
  handleShowModal: () => void;
}

const Client = createContext({} as ClientInterface);

export const useClientContex = () => useContext(Client);

const ClientProvider = ({children}: {children: ReactNode}): JSX.Element => {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    const body = document.querySelector('body') as HTMLElement;
    body.classList.toggle('overflow-y-hidden');
    setShowModal(!showModal);
  }

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Client.Provider
      value={{
        showModal,
        handleShowModal
      }}
    >
      { children }
    </Client.Provider>
  )
}

export default ClientProvider;