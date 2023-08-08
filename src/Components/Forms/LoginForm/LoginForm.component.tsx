import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../../Schemas/LoginForm.schema";
import { Login } from "../../../Interfaces/Login.interfaces";

export function LoginForm(){

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginSchema)
    });

    function onSubmitFunction(data: Login){
        console.log(data);
    }    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Email" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input placeholder="Password" {...register("password")}/>
            <p>{errors.password?.message}</p>
            <button type="submit">Login</button>
            </form>
        </>
    );
}