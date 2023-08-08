import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../../Schemas/RegisterForm.schema";
import { Register } from "../../../Interfaces/Register.interfaces";

export function RegisterForm(){

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(RegisterSchema)
    });

    function onSubmitFunction(data: Register){
        console.log(data);
    }    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Nome" {...register("full_name")}/>
            <p>{errors.full_name?.message}</p>
            <input placeholder="Email" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input placeholder="Senha" {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input placeholder="Confirme sua Senha" {...register("rewrittenPassword")}/>
            <p>{errors.rewrittenPassword?.message}</p>
            <input placeholder="Telefone" {...register("phone_number")}/>
            <p>{errors.phone_number?.message}</p>
            <button type="submit">Registrar Contato</button>
            </form>
        </>
    );
}