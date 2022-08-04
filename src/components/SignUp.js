import {useState} from "react";
import {useNavigate} from 'react-router-dom';

export const SignUp = () => {
    //hooks
    //get and set username
    const [username, setUsername] = useState(null);
    //get and set password
    const [password, setPassword] = useState(null);
    //get and set email
    const [email, setEmail] = useState(null);

    //when we make a request and if something goes wrong with handle submit function, we want to display an error message
    const [errorMessage, setErrorMessage] = useState("");


    //confirmation password
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

    //fires up once the log in button gets click
    const handleSubmit = event => {
        //prevents the page from reloading
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('username 👉️', username);
        console.log('password 👉️', password);
        console.log('password 👉️', email);

        setErrorMessage("need to implement sign up functionality");
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
                <div className="divider">
                    <label className="login-form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="username"
                        type="email"
                        name="email"
                        placeholder="email@email.com"
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
                {/*confirm password field*/}
                <label className="login-form-label mt-4">
                    Confirm Password
                </label>
                <input
                    value={confirmPasswordValue}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="login-form-input"
                    onChange={event => setConfirmPasswordValue(event.target.value)}
                    required
                />

                <button
                    disabled={!username || !password || password !== confirmPasswordValue}
                    className="login-form-button mt-4"
                    onClick={handleSubmit}>
                    Sign up
                </button>
                <button className="login-form-button mt-4" onClick={() => navigate("/login")}> Already have an
                    account?
                </button>
            </form>
        </div>
    )
}