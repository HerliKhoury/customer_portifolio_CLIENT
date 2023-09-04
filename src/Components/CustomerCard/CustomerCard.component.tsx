import { toast } from "react-toastify";
import { TCusotomerCardProps } from "../../Interfaces/Customer.interfaces";
import { customerService } from "../../services/customer.service";
import "./customerCard.style.css";
import { useContext } from "react";
import { CustomerContext } from "../../Contexts/Customers.context";
import { ModalContext } from "../../Contexts/Modal.context";

export const CustomerCard: React.FC<TCusotomerCardProps> = (props) => {
    const { toggleRefresh } = useContext(CustomerContext); 
    const { toggleEditFlag, setToEdit } = useContext(ModalContext);

    async function handleDelete(){
        try {
            await customerService.deleteCustomer(props.customerId);
            toast.success("Usuário deletado!");
            toggleRefresh();
        } catch (error: any) {
            toast.error("Operação não realizada!");
        }
    }

    function handleEdit(){
        setToEdit(props.customerId);
        toggleEditFlag();
    }

    return(
        <div className="card">
            <h2 className="card-title">{props.customerName}</h2>
            <p className="card-infos">{props.customerEmail}</p>
            <p className="card-infos">{props.customerPhone}</p>
            <div className="wrap-btns-card">
                <button onClick={handleEdit} className="card-btns">Editar</button>
                <button onClick={handleDelete} className="card-btns">Excluir</button>
            </div>
        </div>
    )
};