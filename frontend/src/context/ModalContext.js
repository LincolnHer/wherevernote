import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalName, setModalName] = useState('create')


  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

    const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }

  return (
  <ModalContext.Provider
    value={{modalIsOpen, setModalIsOpen, setModalIsOpenToTrue, setModalIsOpenToFalse, modalName, setModalName}}>
    {children}
  </ModalContext.Provider>
  )
};
