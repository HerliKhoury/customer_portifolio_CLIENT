import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CustomerSchema } from "../../../Schemas/CustomerForm.schema";
import { Customer } from "../../../Interfaces/Customer.interfaces";
import { useContext } from "react";
import { ModalContext } from "../../../Contexts/Modal.context";
import { toast } from "react-toastify";
import { customerService } from "../../../services/customer.service";
import { CustomerContext } from "../../../Contexts/Customers.context";

export function CustomerForm(){
    const { toggleFlag } = useContext(ModalContext);
    const { toggleRefresh } = useContext(CustomerContext);

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(CustomerSchema)
    });

    async function onSubmitFunction(customerData: Customer){
        try{
            await customerService.createCustomer(customerData);
            toast.success("Contato criado!");
            toggleFlag();
            toggleRefresh();
        } catch (err: any){
            console.log(err);
        }
    }    

    return (
        
        <form className="wrap-forms" onSubmit={handleSubmit(onSubmitFunction)}>
            <h2 className="form-title">Cadastre novo contato</h2>
            <input placeholder="Nome" {...register("full_name")}/>
            <p className="error">{errors.full_name?.message}</p>
            <input placeholder="Email" {...register("email")}/>
            <p className="error">{errors.email?.message}</p>
            <input placeholder="Telefone" {...register("phone_number")}/>
            <p className="error">{errors.phone_number?.message}</p>
            <button className="form-btns" type="submit">Registrar Contato</button>
            <button className="form-btns" onClick={toggleFlag}>Close</button>
        </form>
    );
}