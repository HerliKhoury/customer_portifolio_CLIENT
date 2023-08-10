import { useState, createContext} from "react";
import { ModalContextType, ModalProviderProps } from "../Interfaces/Modal.interfaces";


export const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalFlag, setModalFlag] = useState(false);

  function toggleFlag() {
    setModalFlag(!modalFlag);
  }

  return (
    <ModalContext.Provider value={{ modalFlag, toggleFlag }}>
      {children}
    </ModalContext.Provider>
  );
}
