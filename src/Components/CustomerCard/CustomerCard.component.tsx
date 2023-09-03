import { TCusotomerCardProps } from "../../Interfaces/Customer.interfaces";
import "./customerCard.style.css";

export const CustomerCard: React.FC<TCusotomerCardProps> = (props) => {

    return(
        <div className="card">
            <h2 className="card-title">{props.customerName}</h2>
            <p className="card-infos">{props.customerEmail}</p>
            <p className="card-infos">{props.customerPhone}</p>
            <div className="wrap-btns-card">
                <button className="card-btns">Editar</button>
                <button className="card-btns">Excluir</button>
            </div>
        </div>
    )
};