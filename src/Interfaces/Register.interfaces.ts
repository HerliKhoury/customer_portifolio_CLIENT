import { Omit } from "utility-types";

export interface Register {
    full_name: string,
    email: string,
    password: string,
    rewrittenPassword: string,
    phone_number: string
};

export type ReqRegisterData = Omit<Register, "password" | "rewrittenPassword">;