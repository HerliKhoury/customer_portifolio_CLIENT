import { useContext } from "react";
import { Login, LoginRes } from "../Interfaces/Login.interfaces";
import { api } from "./api";
import { UserContext } from "../Contexts/Users.context";
import { AxiosResponse } from "axios";

export class loginService {

    static async login(loginData: Login){
        let response: AxiosResponse<LoginRes, any> = await api.post<LoginRes>("login", loginData);

        return response;
    };
    
};