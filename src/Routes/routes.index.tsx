import { Route, Routes } from "react-router-dom";
import { LoginRegister } from "../Pages/LoginRegister/LoginRegister";
import { UserDashBoard } from "../Pages/UserDashBoard/UserDashBoard";

export function MyRoutes(){
    return(
        <Routes>
            <Route path="/" element={<LoginRegister/>}/>
            <Route path="/userDashBoard" element={<UserDashBoard/>}/>
        </Routes>
    )
}