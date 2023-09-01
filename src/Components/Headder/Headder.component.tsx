import { useContext } from "react";
import { ModalContext } from "../../Contexts/Modal.context";
import "./headder.style.css";

export function Headder(){
    const {toggleFlag} = useContext(ModalContext);

    return(
        <div className="wrap-header">
            <div className="wrap-info-headder">
                <p className="user-name">Lord Dain</p>
                <p className="user-phone">(62) 98762-8293</p>
            </div>
            <div className="wrap-btns">
                <button className="headder-btns">Logout</button>
                <button className="headder-btns" onClick={toggleFlag}>Registrar Contato</button>
            </div>
        </div>
    )
};