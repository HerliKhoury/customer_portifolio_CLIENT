import { useContext } from "react";
import Modal from "react-modal";
import { ModalContext } from "../../Contexts/Modal.context";
import "./ModalStyle.css"
import { EditCustomerForm } from "../Forms/EditForm/EditCustomerForm.component";


export function EditCustomerModal(){
    const { editModalFlag,  toggleEditFlag} = useContext(ModalContext);

    return(
        <Modal
            isOpen={editModalFlag}
            onRequestClose={toggleEditFlag}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button  className="close-btn" onClick={toggleEditFlag}>X</button>
            <EditCustomerForm/>
        </Modal>
    );
};