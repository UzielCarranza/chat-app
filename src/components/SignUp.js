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
    const [isNumericValue, setIsnumericValue] = useState(false);
    const [hasSpecialCharacters, setHasSpecialCharacters] = useState(false);

    //show validation messages on UI
    const [showValidation, setShowValidation] = useState(false);


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
            //regex that checks for numeric values
            let numericValues = new RegExp("^(?=.*\\d)");
            //regex that checks string to contain at least one special character
            let hasSpecialCharacters = new RegExp("^(?=.*[-+_!@#$%^&*., ?])");
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
                if (numericValues.test(password)) {
                    setIsnumericValue(true);
                } else {
                    setIsnumericValue(false);
                }
                if (hasSpecialCharacters.test(password)) {
                    setHasSpecialCharacters(true);
                } else {

                    setHasSpecialCharacters(false);
                }
            }
        }, [password]
    )

    const dataValidation = () => {
        return showValidation &&
            <div id="data-validation" className="flex flex-col">
                {isPasswordGreaterThan8 ?
                    <div className="flex justify-start"><AiFillCheckCircle style={{color: 'green'}}/><small>password
                        must be 8 characters or more</small></div> :
                    <div className="flex justify-start"><MdDoNotTouch style={{color: 'red'}}/><small>password
                        must
                        be 8
                        characters or more</small></div>}
                {isUpperCase ?
                    <div className="flex justify-start mt-2"><AiFillCheckCircle
                        style={{color: 'green'}}/><small>Must
                        contain an upper case letter</small></div> :
                    <div className="flex justify-start mt-2"><MdDoNotTouch style={{color: 'red'}}/><small>Must
                        contain
                        an upper case letter</small></div>}
                {isLowerCase ?
                    <div className="flex justify-start mt-2"><AiFillCheckCircle
                        style={{color: 'green'}}/><small>Must
                        contain a lower case letter</small></div> :
                    <div className="flex justify-start mt-2"><MdDoNotTouch style={{color: 'red'}}/><small>Must
                        contain
                        a lower case letter</small></div>}
                {isNumericValue ?
                    <div className="flex justify-start mt-2"><AiFillCheckCircle
                        style={{color: 'green'}}/><small>Must
                        contain a numeric value</small></div> :
                    <div className="flex justify-start mt-2"><MdDoNotTouch style={{color: 'red'}}/><small>
                        Must
                        contain a numeric value</small></div>}
                {hasSpecialCharacters ?
                    <div className="flex justify-start mt-2"><AiFillCheckCircle
                        style={{color: 'green'}}/><small>Must
                        contain at least one special character</small></div> :
                    <div className="flex justify-start mt-2"><MdDoNotTouch style={{color: 'red'}}/><small>
                        Must
                        contain at least one special character</small></div>}
            </div>

    }

//let's you navigate to other pages programmatically
    const navigate = useNavigate()

    return (
        <div className="form-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Create your account </h3>
                {/*fires up when there is an error with the log in process*/}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {/*username input*/}
                <div className="divider">
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
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email address"
                        className="login-form-input"
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                </div>
                {/*password input*/}
                <div className="divider">
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        className="login-form-input"
                        onChange={event => setPassword(event.target.value)}
                        onClick={() => setShowValidation(true)}
                        autoComplete="true"
                        required
                    />
                </div>
                {dataValidation()}

                {/*confirm password field*/}
                <div className="divider">
                    <input
                        type="password"
                        name="passwordConfirmation"
                        placeholder="confirm password"
                        className="login-form-input"
                        onChange={event => setConfirmPasswordValue(event.target.value)}
                        autoComplete="on"
                        required
                    />
                </div>
                {password === confirmPasswordValue && password.length >= 8 ?
                    <div className="flex justify-start mt-2"><AiFillCheckCircle style={{color: 'green'}}/><small>Password
                        matches</small></div> :
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