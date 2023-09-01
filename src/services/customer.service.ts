import { Customer } from "../Interfaces/Customer.interfaces";
import { api } from "./api";

export class customerService {

    static async createCustomer(customerData: Customer){
        let token = localStorage.getItem('Token');

        await api.post(
            "customer",
            customerData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    }

    /* static async catchCustomers(customerData: Customer){

    }

    static async updateCustomer(customerData: Customer){
        let token = localStorage.getItem('Token');
    }

    static async deleteCustomer(customerData: Customer){
        let token = localStorage.getItem('Token');
    } */
};