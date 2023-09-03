import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../../Schemas/LoginForm.schema";
import { Login, LoginRes } from "../../../Interfaces/Login.interfaces";
import "../forms.styles.css";
import { useContext } from "react";
import { ModalContext } from "../../../Contexts/Modal.context";
import { loginService } from "../../../services/login.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Contexts/Users.context";

export function LoginForm(){

    const { toggleFlag } = useContext(ModalContext);
    

    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginSchema)
    });

    async function onSubmitFunction(loginData: Login){
        try{
            const response = await loginService.login(loginData);
            toast.success("Usuário logado!");
            localStorage.setItem("Token", response.data.token);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("phone", response.data.phone);
            
            navigate("/dashboard");
        } catch (err: any){
            console.log(err);
        }
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