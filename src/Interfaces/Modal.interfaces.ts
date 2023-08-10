import { ReactNode } from "react";

export interface ModalContextType{
    modalFlag: boolean;
    toggleFlag: () => void;
};
  
export interface ModalProviderProps{
    children: ReactNode;
};