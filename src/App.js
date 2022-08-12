import './styling/App.css';
import {Login} from './components/Login';
import {Routes, Route} from "react-router-dom";
import {SignUp} from "./components/SignUp";
import {PrivateRoute} from "./auth/PrivateRoute";
import {UserInformation} from "./components/UserInformation";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PrivateRoute/>}/>
                <Route path="/login" element={<Login/>}/>

                <Route path="/signup" element={<SignUp/>}/>

                <Route path="/myInformation" element={<UserInformation/>}/>

            </Routes>

        </div>

    )
        ;
}

export default App;
