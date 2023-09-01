import { useContext } from "react";
import { Login, LoginRes } from "../Interfaces/Login.interfaces";
import { api } from "./api";
import { UserContext } from "../Contexts/Users.context";

export class loginService {

    static async login(loginData: Login){
        const {setUserState} = useContext(UserContext);

        let response: LoginRes = await api.post("login", loginData);

        localStorage.setItem("Token", response.token);
        setUserState({name: response.name, phone: response.phone});
    };
    
};