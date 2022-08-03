import './styling/App.css';
import {Login} from './components/Login';
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login/> }/>
            </Routes>
        </div>

    );
}

export default App;
