import {useState} from "react";
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    //hooks
    //get and set username
    const [username, setUsername] = useState(null);
    //get and set password
    const [password, setPassword] = useState(null);

    //when we make a request and if something goes wrong with handle submit function, we want to display an error message
    const [errorMessage, setErrorMessage] = useState("");

    //fires up once the log in button gets click
    const handleSubmit = event => {
        //prevents the page from reloading
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('username 👉️', username);
        console.log('password 👉️', password);
    };

    //let's you navigate to other pages programmatically
    const navigate = useNavigate()

    return (
        <div className="form-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
                {/*fires up when there is an error with the log in process*/}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {/*username input*/}
                <div className="divider">
                    <label className="login-form-label" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="login-form-input"
                        onChange={event => setUsername(event.target.value)}
                        required
                    />
                </div>
                {/*password input*/}
                <div className="divider">
                    <label className="login-form-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        className="login-form-input"
                        onChange={event => setPassword(event.target.value)}
                        required
                    />
                </div>

                {/*buttons and other links*/}
                <div className="login-form-button-wrapper">
                    <button

                        disabled={!username || !password}
                        className="login-form-button"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                    <a className="login-form-links" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <div className="login-form-button-wrapper">
                <button className="login-form-button" onClick={() => navigate("/home")}>Sign up</button>
            </div>
        </div>
    )
}