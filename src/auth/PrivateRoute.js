import {useNavigate} from "react-router-dom";
import {Login} from "../components/Login";
import {HomePage} from "../components/HomePage";


export const PrivateRoute = props => {

    const user = null;

    if (!user) return <Login/>


    return <HomePage {...props}/>
}