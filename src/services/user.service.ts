import { TUserReq } from "../Interfaces/User.interfaces";
import { api } from "./api";

export class userService{

    static async createUser(userData: TUserReq){

        let token = localStorage.getItem('Token');

        let response = await api.post(
            "user",
            userData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        
        return response;
    };
}