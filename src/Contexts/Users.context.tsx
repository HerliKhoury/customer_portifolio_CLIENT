import { createContext, useState } from "react";
import { CustomerProviderProps } from "../Interfaces/Customer.interfaces";
import { TDefaultProviderProps, /* TUserContext */ } from "../Interfaces/User.interfaces";

export const UserContext = createContext({} /* as TUserContext */);

export const UserProvider = ({children}: TDefaultProviderProps) => {
    /* const [userState, setUserState] = useState({
        name: "",
        phone_number: ""
    }); */

    return(
        <UserContext.Provider value={{/* userState, setUserState */}}>
            {children}
        </UserContext.Provider>
    )
}