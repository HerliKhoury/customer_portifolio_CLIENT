import noCustomers from "../../Assets/no_customers.svg";

export const NoCustomer = () => {
    return(
        <div className="no-property-div">
            <img className="no-property-img" src={noCustomers} alt="Ilu no customer"/>
            <h1 className="no-property-info">Você não possui imóveis cadastrados</h1>
        </div>
    );
};