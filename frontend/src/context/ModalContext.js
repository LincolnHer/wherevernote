import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false)
  const [modalIsOpen3, setModalIsOpen3] = useState(false)
  const [modalName, setModalName] = useState('create')


  const setModal1IsOpenToTrue =()=>{
      setModalIsOpen1(true)
  }

    const setModal1IsOpenToFalse =()=>{
      setModalIsOpen1(false)
  }

  const setModal2IsOpenToTrue =()=>{
    setModalIsOpen2(true)
}

  const setModal2IsOpenToFalse =()=>{
    setModalIsOpen2(false)
}

  const setModal3IsOpenToTrue =()=>{
    setModalIsOpen3(true)
}

  const setModal3IsOpenToFalse =()=>{
    setModalIsOpen3(false)
}



  return (
  <ModalContext.Provider
    value={{
      modalIsOpen1, setModalIsOpen1,
      modalIsOpen2, setModalIsOpen2,
      modalIsOpen3, setModalIsOpen3,
      setModal1IsOpenToTrue, setModal1IsOpenToFalse,
      setModal2IsOpenToTrue, setModal2IsOpenToFalse,
      setModal3IsOpenToTrue, setModal3IsOpenToFalse,
      modalName, setModalName,
      }}>
    {children}
  </ModalContext.Provider>
  )
};
