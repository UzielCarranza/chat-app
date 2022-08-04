import './styling/App.css';
import {Login} from './components/Login';
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {SignUp} from "./components/SignUp";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login/> }/>

                <Route path="/home" element={<HomePage/> }/>
                <Route path="/signup" element={<SignUp/> }/>
            </Routes>
        </div>

    );
}

export default App;
