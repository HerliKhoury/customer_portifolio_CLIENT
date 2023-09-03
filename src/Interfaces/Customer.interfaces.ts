import { ReactNode } from "react";
import { CustomerSchemaRes } from "../Schemas/CustomerForm.schema";
import { InferType } from "yup";

export interface Customer {
    full_name: string,
    email: string,
    phone_number: string
}

export interface TCustomerUpdate {
    full_name?: string,
    email?: string,
    phone_number?: string
}

export interface CustomerProviderProps{
    children: ReactNode;
};

export type TCustormerRes = InferType<typeof CustomerSchemaRes>

export type TCustomerContext = {
    refreshFlag: boolean,
    toggleRefresh: () => void,
    customerView: TCustormerRes[],
    setCustomersView: React.Dispatch<React.SetStateAction<TCustormerRes[]>>
    
}

export type TDefaultProviderProps = {
    children: React.ReactNode;
};

export type TCusotomerCardProps = {
    customerId: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string; 
}