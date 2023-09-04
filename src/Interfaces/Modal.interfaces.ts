import { ReactNode } from "react";

export interface ModalContextType{
    modalFlag: boolean;
    toggleFlag: () => void;
    toggleEditFlag: () => void;
    editModalFlag: boolean;
    toEdit: number;
    setToEdit: React.Dispatch<React.SetStateAction<number>>;
};
  
export interface ModalProviderProps{
    children: ReactNode;
};