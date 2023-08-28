import { ReactNode } from "react";

export interface Customer {
    full_name: string,
    email: string,
    phone_number: string
}

export interface CustomerProviderProps{
    children: ReactNode;
};