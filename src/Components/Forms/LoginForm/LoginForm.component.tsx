import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../../Schemas/LoginForm.schema";
import { Login } from "../../../Interfaces/Login.interfaces";
import "../forms.styles.css";
import { useContext } from "react";
import { ModalContext } from "../../../Contexts/Modal.context";

export function LoginForm(){

    const { toggleFlag } = useContext(ModalContext);

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginSchema)
    });

    function onSubmitFunction(data: Login){
        console.log(data);
    }    

    return (

        <form className="contain-form" onSubmit={handleSubmit(onSubmitFunction)}>
            <h2 className="form-title">Realize o Login</h2>
            <input placeholder="Email" {...register("email")}/>
            <p className="error">{errors.email?.message}</p>
            <input placeholder="Password" {...register("password")}/>
            <p className="error">{errors.password?.message}</p>
            <button type="submit" className="form-btns">Login</button>
            <p className="form-title">Ou</p>
            <button className="form-btns" onClick={() => {toggleFlag()}}>Registre se</button> 
        </form>

    );
}