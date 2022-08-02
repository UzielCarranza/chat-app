import {useState} from "react";

export const Login = () => {
    //hooks
    //get and set username
    const [username, setUsername] = useState(null);
    //get and set password
    const [password, setPassword] = useState(null);

    //fires up once the log in button gets click
    const handleSubmit = event => {
        //prevents the page from reloading
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('username 👉️', username);
        console.log('password 👉️', password);
    };

    const handleSignUp = () => {
        console.log("relocates user to on-boarding sign up page")
    }

    return (
        <div className="form-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
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
                <div className="divider">
                    <button
                        type="submit"
                        id="login-btn"
                    >
                        Sign In
                    </button>
                </div>
                <div className="login-form-button-wrapper">
                    <button
                        className="login-form-button"
                        type="button">
                        Sign In
                    </button>
                    <a className="login-form-links" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <div className="login-form-button-wrapper">
                <button className="login-form-button" onClick={handleSignUp}>Sign up</button>
            </div>
        </div>
    )
}