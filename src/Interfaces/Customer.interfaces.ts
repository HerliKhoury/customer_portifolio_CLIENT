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