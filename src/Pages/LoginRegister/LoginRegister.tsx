import { useContext, useState } from "react";
import { LoginForm } from "../../Components/Forms/LoginForm/LoginForm.component";
import { RegisterForm } from "../../Components/Forms/RegisterForm/RegisterForm.component";
import  AgendaImg  from "../../Assets/contact_book.svg"; 
import { ModalContext } from "../../Contexts/Modal.context";

export function LoginRegister(){
    
    const {modalFlag} = useContext(ModalContext);

    return(
        <div className="wrap-page">
            <div className="wrap-info">
                <h1 className="page-title">
                    My Agenda
                </h1>
                <p className="page-sub-title">
                    Crie sua prórpia lista de contatos de maneira fácil e interativa
                </p>
                <img className="my-img" src={AgendaImg} alt="Ilustração Agenda"/>
            </div>

            <div className="wrap-form">
            {modalFlag ? 
            <RegisterForm/>
            : 
            <LoginForm/>
            }
            </div>
        </div>
        
    )
};