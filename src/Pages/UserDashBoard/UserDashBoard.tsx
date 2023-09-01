import { Headder } from "../../Components/Headder/Headder.component";
import { CustomerModal } from "../../Components/Modals/CreateCustomer.modal";

export function UserDashBoard(){

    return(
        <div className="wrap-dashboard">
            <CustomerModal/>
            <div className="container">
                <Headder/>
                <p>Página do usuário</p>
            </div>
        </div>
    )
};