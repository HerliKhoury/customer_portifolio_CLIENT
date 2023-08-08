import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CustomerSchema } from "../../../Schemas/CustomerForm.schema";
import { Customer } from "../../../Interfaces/Customer.interfaces";

export function CustomerForm(){

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(CustomerSchema)
    });

    function onSubmitFunction(data: Customer){
        console.log(data);
    }    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Nome" {...register("full_name")}/>
            <p>{errors.full_name?.message}</p>
            <input placeholder="Email" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input placeholder="Telefone" {...register("phone_number")}/>
            <p>{errors.phone_number?.message}</p>
            <button type="submit">Registrar Contato</button>
            </form>
        </>
    );
}