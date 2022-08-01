import {useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";

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
        <>
            <form onSubmit={handleSubmit}>
                {/*username input*/}
                <div>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={event => setUsername(event.target.value)}
                        required
                    />
                </div>
                {/*password input*/}
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={event => setPassword(event.target.value)}
                        required
                    />
                </div>

                {/*buttons and other links*/}
                <div>
                    <button
                        type="submit"
                        id="login-btn"
                    >
                        Sign In
                    </button>
                    <div className="w-40">
                        <a className="inline-block align-baseline font-bold
                                text-sm text-blue-500 hover:text-blue-800"
                           href="#">
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </form>
            <div>
                <p>--------Or----------</p>
                <button onClick={handleSignUp}>Sign up</button>
            </div>
        </>
    )
}