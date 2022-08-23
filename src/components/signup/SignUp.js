import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {AiFillCheckCircle} from "react-icons/ai";
import axios from 'axios';
import {RiEyeCloseLine, RiEyeLine} from "react-icons/ri";
import {dataValidation} from "./validation";

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

    let validate = useValidationEffect(password);

    //confirmation password
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");


    //show validation messages on UI
    const [showValidation, setShowValidation] = useState(false);

    //Allows the user to cover and uncovered the password
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    //fires up once the sing up button gets click
    const handleSubmit = event => {
        //prevents the page from reloading
        event.preventDefault();

        const newUser = {
            "id": 0,
            "username": username,
            "email": email,
            "password": password,
            "createdAt": "2022-08-16T21:10:16.433Z",
            "role": "USER"
        }

    };


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
                <div className="divider flex flex-row items-center w-full">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="login-form-input"
                        onChange={event => setPassword(event.target.value)}
                        onClick={() => setShowValidation(true)}
                        autoComplete="true"
                        required
                    />
                    <div className="ml-4">
                        {showPassword ? <RiEyeLine onClick={() => setShowPassword(!showPassword)}/> :
                            <RiEyeCloseLine onClick={() => setShowPassword(!showPassword)}/>}
                    </div>
                </div>
                {dataValidation(showValidation, validate.isPasswordGreaterThan8, validate.isUpperCase, validate.isLowerCase, validate.isNumericValue, validate.hasSpecialCharacters)}

                {/*confirm password field*/}
                <div className="divider flex flex-row items-center w-full">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="passwordConfirmation"
                        placeholder="confirm password"
                        className="login-form-input"
                        onChange={event => setConfirmPasswordValue(event.target.value)}
                        autoComplete="on"
                        required
                    />
                    <div className="ml-4">
                        {showConfirmPassword ?
                            <RiEyeLine onClick={() => setShowConfirmPassword(!showConfirmPassword)}/> :
                            <RiEyeCloseLine onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>}
                    </div>
                </div>
                {password === confirmPasswordValue && password.length >= 8 ?
                    <div className="flex justify-start mt-2"><AiFillCheckCircle style={{color: 'green'}}/><small>Password
                        matches</small></div> :
                    " "}

                <button
                    disabled={!username || !password || password !== confirmPasswordValue || useValidationEffect.passwordMeetsAllRequirements !== true}
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


const useValidationEffect = (password) => {
    const [validation, setValidation] = useState({
        validation: [
            {isPasswordGreaterThan8: false},
            {isUpperCase: false},
            {isLowerCase: false},
            {isNumericValue: false},
            {hasSpecialCharacters: false},
            {passwordMeetsAllRequirements: false}
        ]
    })
    //regex that check for uppercase characters
    let upperCase = new RegExp("^(?=.*[A-Z])");
    //regex that check for lowercase characters
    let lowerCase = new RegExp("^(?=.*[a-z])");
    //regex that checks for numeric values
    let numericValues = new RegExp("^(?=.*\\d)");
    //regex that checks string to contain at least one special character
    let hasSpecialCharacters = new RegExp("^(?=.*[-+_!@#$%^&*., ?])");
    //validation
    useEffect(() => {
            if (password !== null) {
                //validation statements for password
                //check for password's length
                // password.length >= 8 ? validation.IsPasswordGreaterThan8 = true : validation.IsPasswordGreaterThan8 = false

                if (password.length >= 8) {
                    setValidation({...validation, isPasswordGreaterThan8: validation.isPasswordGreaterThan8 = true})
                } else {

                    setValidation({...validation, isPasswordGreaterThan8: validation.isPasswordGreaterThan8 = false})
                }
                // //check for uppercase characters
                // upperCase.test(password) ? validation.isUpperCase = true : validation.isUpperCase = false

                //check for lower case characters
                if (lowerCase.test(password)) {
                    setValidation({...validation, isLowerCase: validation.isLowerCase = true})
                } else {

                    setValidation({...validation, isLowerCase: validation.isLowerCase = false})
                }

                //check for numeric values
                if (numericValues.test(password)) {
                    setValidation({...validation, isNumericValue: validation.isNumericValue = true})
                } else {

                    setValidation({...validation, isNumericValue: validation.isNumericValue = false})
                }

                // //check for at least one special character
                if (hasSpecialCharacters.test(password)) {
                    setValidation({...validation, hasSpecialCharacters: validation.hasSpecialCharacters = true})
                } else {

                    setValidation({...validation, hasSpecialCharacters: validation.hasSpecialCharacters = false})
                }
                // //final statement that checks if the statements from above are true to set a final variable to true
                // if (password.length >= 8 && upperCase.test(password) && lowerCase.test(password) && numericValues.test(password) && hasSpecialCharacters.test(password)) {
                //     validation.passwordMeetsAllRequirements = true;
                // } else {
                //     validation.passwordMeetsAllRequirements = false;
                // }
            }
        }, [password]
    )
    return validation;
}