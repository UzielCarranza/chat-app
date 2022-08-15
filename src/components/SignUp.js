import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {AiFillCheckCircle} from "react-icons/ai";
import {MdDoNotTouch} from "react-icons/md";

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

    //validation password
    const [isPasswordGreaterThan8, setIsPasswordGreaterThan8] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isLowerCase, setIsLowerCase] = useState(false);


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

    //validation
    useEffect(() => {
            //regex that check for uppercase characters
            let upperCase = new RegExp("^(?=.*[A-Z])");
            //regex that check for lowercase characters
            let lowerCase = new RegExp("^(?=.*[a-z])");
            if (password !== null) {
                //check for password's length
                if (password.length >= 8) {
                    setIsPasswordGreaterThan8(true)
                } else {
                    setIsPasswordGreaterThan8(false)
                }
                //check for uppercase characters
                if (upperCase.test(password)) {
                    setIsUpperCase(true);
                } else {
                    setIsUpperCase(false);
                }
                //check for lower case characters
                if (lowerCase.test(password)) {
                    setIsLowerCase(true);
                } else {
                    setIsLowerCase(false);
                }
            }
        }, [password]
    )

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
                        id="email"
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
                        autoComplete="true"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    {isPasswordGreaterThan8 ?
                        <div className="flex justify-start"><AiFillCheckCircle style={{color: 'green'}}/><small>password
                            must be 8 characters or more</small></div> :
                        <div className="flex justify-start"><MdDoNotTouch style={{color: 'red'}}/><small>password must
                            be 8
                            characters or more</small></div>}
                    {isUpperCase ?
                        <div className="flex justify-start mt-2"><AiFillCheckCircle style={{color: 'green'}}/><small>Must
                            contain an upper case letter</small></div> :
                        <div className="flex justify-start mt-2"><MdDoNotTouch style={{color: 'red'}}/><small>Must contain
                            an upper case letter</small></div>}
                    {isLowerCase ?
                        <div className="flex justify-start mt-2"><AiFillCheckCircle style={{color: 'green'}}/><small>Must
                            contain a lower case letter</small></div> :
                        <div className="flex justify-start mt-2"><MdDoNotTouch style={{color: 'red'}}/><small>Must contain
                            a lower case letter</small></div>}
                </div>
                {/*confirm password field*/}
                <label className="login-form-label mt-4">
                    Confirm Password
                </label>
                <input
                    value={confirmPasswordValue}
                    type="password"
                    name="passwordConfirmation"
                    placeholder="passwordConfirmation"
                    className="login-form-input"
                    onChange={event => setConfirmPasswordValue(event.target.value)}
                    autoComplete="on"
                    required
                />
                {password === confirmPasswordValue && password.length >= 8 ?
                    <div className="flex justify-start mt-2"><AiFillCheckCircle style={{color: 'green'}}/><small>Password matches</small></div> :
                    " "}

                <button
                    disabled={!username || !password || password !== confirmPasswordValue}
                    className="login-form-button mt-4 background-base"
                    onClick={handleSubmit}>
                    Sign up
                </button>
                <button className="login-form-button mt-4 background-base" onClick={() => navigate("/login")}> Already
                    have an
                    account?
                </button>
            </form>
        </div>
    )
}