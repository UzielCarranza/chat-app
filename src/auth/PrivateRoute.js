import {useNavigate} from "react-router-dom";
import {Login} from "../components/Login";
import {HomePage} from "../components/HomePage";
import {store} from "../store/store";



export const PrivateRoute = () => {

    const user = store.getState();

    if (user.username === '') return <Login/>


    return <HomePage {...user}/>
}