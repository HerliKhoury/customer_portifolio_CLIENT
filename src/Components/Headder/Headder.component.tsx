import { useContext } from "react";
import { ModalContext } from "../../Contexts/Modal.context";
import "./headder.style.css";
import { UserContext } from "../../Contexts/Users.context";

export function Headder(){
    const {toggleFlag} = useContext(ModalContext);
    /* const {userState} = useContext(UserContext); */

    return(
        <div className="wrap-header">
            <div className="wrap-info-headder">
                <p className="user-name">{localStorage.getItem("name")}</p>
                <p className="user-phone">{localStorage.getItem("phone")}</p>
            </div>
            <div className="wrap-btns">
                <button className="headder-btns">Logout</button>
                <button className="headder-btns" onClick={toggleFlag}>Registrar Contato</button>
            </div>
        </div>
    )
};