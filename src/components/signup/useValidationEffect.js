import {useEffect, useState} from "react";

export const useValidationEffect = (password) => {
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
                if (upperCase.test(password)) {
                    setValidation({...validation, isUpperCase: validation.isUpperCase = true})
                } else {

                    setValidation({...validation, isUpperCase: validation.isUpperCase = false})
                }
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
                if (password.length >= 8 && upperCase.test(password) && lowerCase.test(password) && numericValues.test(password) && hasSpecialCharacters.test(password)) {
                    setValidation({
                        ...validation,
                        passwordMeetsAllRequirements: validation.passwordMeetsAllRequirements = true
                    })

                } else {
                    setValidation({
                        ...validation,
                        passwordMeetsAllRequirements: validation.passwordMeetsAllRequirements = false
                    })
                }
            }
        }, [password]
    )
    return validation;
}
