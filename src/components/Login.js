import {useState} from "react";
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    //hooks
    //get and set username
    const [email, setEmail] = useState(null);
    //get and set password
    const [password, setPassword] = useState(null);

    //when we make a request and if something goes wrong with handle submit function, we want to display an error message
    const [errorMessage, setErrorMessage] = useState("");

    //fires up once the log in button gets click
    const handleSubmit = event => {
        //prevents the page from reloading
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('username 👉️', email);
        console.log('password 👉️', password);

        setErrorMessage("need to implement login functionality");
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
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Username"
                        className="login-form-input"
                        onChange={event => setEmail(event.target.value)}
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

                        disabled={!email || !password}
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
                <button className="login-form-button" onClick={() => navigate("/signup")}>Sign up</button>
            </div>
        </div>
    )
}