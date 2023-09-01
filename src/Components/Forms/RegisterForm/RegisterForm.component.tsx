import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../../Schemas/RegisterForm.schema";
import { Register } from "../../../Interfaces/Register.interfaces";
import { useContext } from "react";
import { ModalContext } from "../../../Contexts/Modal.context";

export function RegisterForm(){

    const { toggleFlag } = useContext(ModalContext);

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(RegisterSchema)
    });

    function onSubmitFunction(data: Register){
        console.log(data);
    }    

    return (
        
        <form className="contain-form" onSubmit={handleSubmit(onSubmitFunction)}>
            <h2 className="form-title">Cadastre se</h2>
            <input placeholder="Nome" {...register("full_name")}/>
            <p className="error">{errors.full_name?.message}</p>
            <input placeholder="Email" {...register("email")}/>
            <p className="error">{errors.email?.message}</p>
            <input placeholder="Senha" {...register("password")}/>
            <p className="error">{errors.password?.message}</p>
            <input placeholder="Confirme sua Senha" {...register("rewrittenPassword")}/>
            <p className="error">{errors.rewrittenPassword?.message}</p>
            <input placeholder="Telefone" {...register("phone_number")}/>
            <p className="error">{errors.phone_number?.message}</p>
            <button className="form-btns" type="submit">Registrar Contato</button>
            <p className="form-title">Ou</p>
            <button className="form-btns" onClick={() => {toggleFlag()}}>Login</button> 
        </form>
        
    );
}