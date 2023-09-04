import { useContext, useEffect } from "react";
import { Headder } from "../../Components/Headder/Headder.component";
import { CustomerModal } from "../../Components/Modals/CreateCustomer.modal";
import { toast } from "react-toastify";
import { customerService } from "../../services/customer.service";
import { CustomerContext } from "../../Contexts/Customers.context";
import { NoCustomer } from "../../Components/NoCustomer/NoCustomer.component";
import { CustomerCard } from "../../Components/CustomerCard/CustomerCard.component";
import { EditCustomerModal } from "../../Components/Modals/EditCustomer.modal";

export function UserDashBoard(){

    const {refreshFlag, setCustomersView, customerView} = useContext(CustomerContext);


    useEffect(() => {
        async function loadCustomers(){
            try{
                let customersArr = await customerService.catchUserCustomers();
                if(!!customersArr) setCustomersView(customersArr.data);
            }catch(err: any){
                toast.error("Erro ao acessar base de dados!")
            }
        };

        loadCustomers();
    }, [refreshFlag]);

    return(
        <div className="wrap-dashboard">
            <CustomerModal/>
            <EditCustomerModal/>
            <div className="container">
                <Headder/>
                {
                    customerView.length > 0 ? 
                    <div className="wrap-cards">
                        {customerView.map((customer) => (
                            <CustomerCard
                            key={customer.id}
                            customerId={customer.id}
                            customerName={customer.full_name}
                            customerEmail={customer.email}
                            customerPhone={customer.phone_number}
                            />
                        ))}           
                    </div> 
                    : <NoCustomer/>
                }
            </div>
        </div>
    )
};