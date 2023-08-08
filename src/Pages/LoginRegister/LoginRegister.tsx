import { useState } from "react";
import { LoginForm } from "../../Components/Forms/LoginForm/LoginForm.component";
import { RegisterForm } from "../../Components/Forms/RegisterForm/RegisterForm.component";

export function LoginRegister(){
    const [flagState, setFlagState] = useState(false);


    return(
        <>
        {flagState ? 
        <>
        <RegisterForm/>
        <button onClick={() => {setFlagState(!flagState)}}>Login</button> 
        </>
        : 
        <> 
        <LoginForm/>
        <p>Ou</p>
        <button onClick={() => {setFlagState(!flagState)}}>Registre se</button> 
        </>}
        </>
    )
};