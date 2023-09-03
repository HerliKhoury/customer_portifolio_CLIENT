import { createContext } from "react";
import { TCustomerContext, TCustormerRes, TDefaultProviderProps } from "../Interfaces/Customer.interfaces";
import { useState } from "react";

export const CustomerContext = createContext({} as TCustomerContext);

export const CustomerProvider = ({children}: TDefaultProviderProps) => { 
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [customerView, setCustomersView] = useState<TCustormerRes[]>([]);

    const toggleRefresh = () => {
        setRefreshFlag(!refreshFlag);
    }

    return(
        <CustomerContext.Provider value = {{
            refreshFlag,
            toggleRefresh,
            customerView,
            setCustomersView
        }}>
            {children}
        </CustomerContext.Provider>
    );
};