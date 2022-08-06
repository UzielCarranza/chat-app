import './styling/App.css';
import {Login} from './components/Login';
import {Routes, Route, Switch} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {SignUp} from "./components/SignUp";
import {PrivateRoute} from "./auth/PrivateRoute";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PrivateRoute/>}/>
                <Route path="/login" element={<Login/>}/>

                <Route path="/signup" element={<SignUp/>}/>

            </Routes>

        </div>

    )
        ;
}

export default App;
