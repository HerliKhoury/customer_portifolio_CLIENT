import { Customer, TCustomerUpdate, TCustormerRes } from "../Interfaces/Customer.interfaces";
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

    static async catchCustomers(userId: number){
        let token = localStorage.getItem('Token');
        const response: TCustormerRes[]= await api.get(`user/${userId}/customers`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response;
    }

    static async updateCustomer(customerId: number, customerData: TCustomerUpdate){
        let token = localStorage.getItem('Token');

        await api.patch(
            `customer/${customerId}`,
            customerData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    }

     
    static async deleteCustomer(customerId: number){
        let token = localStorage.getItem('Token');

        await api.delete(
            `property/${customerId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    } 
};