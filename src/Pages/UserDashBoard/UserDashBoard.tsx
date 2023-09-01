import { Headder } from "../../Components/Headder/Headder.component";
import { CustomerModal } from "../../Components/Modals/CreateCustomer.modal";

export function UserDashBoard(){

    return(
        <>
            <CustomerModal/>
            <Headder/>
            <p>Página do usuário</p>
        </>
    )
};