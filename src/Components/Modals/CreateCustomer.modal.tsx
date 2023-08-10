import { useContext } from "react";
import Modal from "react-modal";
import { ModalContext } from "../../Contexts/Modal.context";
import "./ModalStyle.css"
import { CustomerForm } from "../Forms/CustomerForm/CustomerForm.component";

export function CustomerModal(){
    const { modalFlag, toggleFlag } = useContext(ModalContext);

    return(
        <Modal
            isOpen={modalFlag}
            onRequestClose={toggleFlag}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button onClick={toggleFlag}>X</button>
            <CustomerForm/>
            <button onClick={toggleFlag}>Close</button>
        </Modal>
    );
};