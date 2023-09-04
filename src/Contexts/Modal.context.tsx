import { useState, createContext} from "react";
import { ModalContextType, ModalProviderProps } from "../Interfaces/Modal.interfaces";


export const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalFlag, setModalFlag] = useState(false);
  const [editModalFlag, setEditModalFlag] = useState(false);
  const [toEdit, setToEdit] = useState(0);

  function toggleFlag() {
    setModalFlag(!modalFlag);
  }

  function toggleEditFlag() {
    setEditModalFlag(!editModalFlag);
  }

  return (
    <ModalContext.Provider value={{ 
      modalFlag, 
      toggleFlag, 
      toggleEditFlag, 
      editModalFlag,
      toEdit,
      setToEdit }}>
      {children}
    </ModalContext.Provider>
  );
}
