import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CustomerSchemaUpdate } from "../../../Schemas/CustomerForm.schema";
import { TCustomerUpdate } from "../../../Interfaces/Customer.interfaces";
import { useContext } from "react";
import { ModalContext } from "../../../Contexts/Modal.context";
import { toast } from "react-toastify";
import { customerService } from "../../../services/customer.service";
import { CustomerContext } from "../../../Contexts/Customers.context";

export function EditCustomerForm(){
    const { toggleEditFlag, toEdit } = useContext(ModalContext);
    const { toggleRefresh } = useContext(CustomerContext);

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(CustomerSchemaUpdate)
    });

    async function onSubmitFunction(newData: TCustomerUpdate){
        try {
            await customerService.updateCustomer(toEdit, newData);
            toast.success("Contato editado!");
            toggleEditFlag();
            toggleRefresh();
        } catch (error: any) {
            console.log(error);
        } 
    }    

    return (
        <form className="wrap-forms" onSubmit={handleSubmit(onSubmitFunction)}>
            <h2 className="form-title">Edite o contato</h2>
            <input placeholder="Nome" {...register("full_name")}/>
            <p className="error">{errors.full_name?.message}</p>
            <input placeholder="Email" {...register("email")}/>
            <p className="error">{errors.email?.message}</p>
            <input placeholder="Telefone" {...register("phone_number")}/>
            <p className="error">{errors.phone_number?.message}</p>
            <button className="form-btns" type="submit">Editar Contato</button>
            <button className="form-btns" onClick={toggleEditFlag}>Close</button>
        </form>
    );
}