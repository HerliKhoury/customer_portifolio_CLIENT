import { useContext } from "react";
import { ModalContext } from "../../Contexts/Modal.context";

export function Headder(){
    const {toggleFlag} = useContext(ModalContext);

    return(
        <>
            <div>
                <p>Lord Dain</p>
                <p>(62) 98762-8293</p>
            </div>
            <div>
                <button>Logout</button>
                <button onClick={toggleFlag}>Register Customer</button>
            </div>
        </>
    )
};