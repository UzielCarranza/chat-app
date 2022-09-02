import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {AiFillCheckCircle} from "react-icons/ai";
import {RiEyeCloseLine, RiEyeLine} from "react-icons/ri";
import {showDataOnPasswordValidation} from "./showDataOnPasswordValidation";
import {useValidationEffect} from "./useValidationEffect";
import {store} from "../../store/store";
import {LoadingComponent} from "../LoadingComponent";

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

    //use a custom hook to received that password validation of password requirements
    const passWordRequirements = useValidationEffect(password);

    //confirmation password
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");


    //show validation messages on UI
    const [showValidation, setShowValidation] = useState(false);

    //Allows the user to cover and uncovered the password
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);


    //fires up once the sing up button gets click
    const handleSubmit = event => {
        //prevents the page from reloading
        event.preventDefault();
        //STARTS REDUX

        //we can call getState() to retrieve the updated value
        console.log(store.getState())
        const createNewUser = () => {
            return {
                type: 'createNewUser',
                username: username,
                email: email,
                password: password
            }
        }

        // The only way to update the state is to call store.dispatch() and pass in an action object
        //The store will run its reducer function and save the new state value inside
        store.dispatch(createNewUser())

        //we can call getState() to retrieve the updated value
        console.log(store.getState())
        //ENDS REDUX

        setIsLoading(true);

        // const response = axios.post(`http://localhost:8080/api/users/create`, newUser)
        //     .then(res => { setErrorMessage("")}).catch(error => setErrorMessage(`There was an error creating your username, please try again later:  ${error.message}`))

    };


//let's you navigate to other pages programmatically
    const navigate = useNavigate()

    return (
        <div className="form-wrapper">

            {isLoading ? <LoadingComponent/> :
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
                            className="login-form-input no-padding"
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
                            className="login-form-input no-padding"
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
                        <div className="show-password">
                            {showPassword ? <RiEyeLine onClick={() => setShowPassword(!showPassword)}/> :
                                <RiEyeCloseLine onClick={() => setShowPassword(!showPassword)}/>}
                        </div>
                    </div>
                    {showDataOnPasswordValidation(showValidation, passWordRequirements)}

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
                        <div className="show-password">
                            {showConfirmPassword ?
                                <RiEyeLine onClick={() => setShowConfirmPassword(!showConfirmPassword)}/> :
                                <RiEyeCloseLine onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>}
                        </div>
                    </div>
                    {password === confirmPasswordValue && password.length >= 8 ?
                        <div className="flex justify-start mt-2"><AiFillCheckCircle style={{color: 'green'}}/><small>Password
                            matches</small></div> :
                        " "}

                    {
                        !username || !email || !password || password !== confirmPasswordValue || passWordRequirements.passwordMeetsAllRequirements !== true ?
                            <div className="w-full flex flex-col">
                                <button
                                    className="not-allowed-message login-form-button background-base disabled-btn"
                                    disabled={true}>
                                    Sign Up
                                </button>
                            </div>
                            :
                            <button
                                className="login-form-button mt-4 background-base cursor-pointer"
                                onClick={handleSubmit}>
                                Sign Up
                            </button>
                    }
                    <button className="login-form-button mt-4 background-base flex flex-row items-center w-full"
                            onClick={() => navigate("/login")}> Already
                        have an
                        account?
                    </button>
                </form>}
        </div>
    )
}