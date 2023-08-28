import { createContext, useState } from "react";
import { CustomerProviderProps } from "../Interfaces/Customer.interfaces";
import { Register, ReqRegisterData } from "../Interfaces/Register.interfaces";

export const UserContext = createContext({});

function UserProvider({children}: CustomerProviderProps){
    const [userState, setUserState] = useState({});

    /* async function registerUser(data: Register){
        const reqRegisterData: ReqRegisterData = {
            full_name: ,
            email:,
            phone_number:
        }
    } */

    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}