import {useEffect, useState} from "react";

export const useValidationEffect = (password) => {
    //OBJECT THAT HOLDS PASSWORD REQUIREMENTS
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
    //TEST CASES
    //regex that check for uppercase characters
    let upperCase = new RegExp("^(?=.*[A-Z])");
    //regex that check for lowercase characters
    let lowerCase = new RegExp("^(?=.*[a-z])");
    //regex that checks for numeric values
    let numericValues = new RegExp("^(?=.*\\d)");
    //regex that checks string to contain at least one special character
    let hasSpecialCharacters = new RegExp("^(?=.*[-+_!@#$%^&*., ?])");

    //EVERYTIME PASSWORD GETS UPDATED THIS USE EFFECT TRIGGERS
    useEffect(() => {
            //MAKE SURE THAT PASSWORD IS NOT NULL
            if (password !== null) {
                //TERNARY OPERATORS USED FOR BETTER READABILITY

                //validation statements for password requirements
                //1.- check for password's length
                password.length >= 8 ?
                    //keeps the same object properties but creates a new object reference
                    // so that the hook strict equality comparison determines that the state changes,
                    // and immediately triggers a re-render.
                    //applies to all test cases ******
                    setValidation({...validation, isPasswordGreaterThan8: validation.isPasswordGreaterThan8 = true}) :
                    setValidation({...validation, isPasswordGreaterThan8: validation.isPasswordGreaterThan8 = false});

                //2.- check that password has at least one uppercase character
                upperCase.test(password) ?
                    setValidation({...validation, isUpperCase: validation.isUpperCase = true}) :
                    setValidation({...validation, isUpperCase: validation.isUpperCase = false});

                //3.- check that password has at least one lower case characters
                lowerCase.test(password) ?
                    setValidation({...validation, isLowerCase: validation.isLowerCase = true}) :
                    setValidation({...validation, isLowerCase: validation.isLowerCase = false});


                //4.- check that password has at least one numeric values
                numericValues.test(password) ?
                    setValidation({...validation, isNumericValue: validation.isNumericValue = true}) :
                    setValidation({...validation, isNumericValue: validation.isNumericValue = false});

                //check that password has at least one special character
                hasSpecialCharacters.test(password) ?
                    setValidation({...validation, hasSpecialCharacters: validation.hasSpecialCharacters = true}) :
                    setValidation({...validation, hasSpecialCharacters: validation.hasSpecialCharacters = false});

                //final statement that checks if the statements from above are true
                if (password.length >= 8 && upperCase.test(password) &&
                    lowerCase.test(password) &&
                    numericValues.test(password) && hasSpecialCharacters.test(password)) {
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
        //    USE EFFECT TRIGGERS WHEN PASSWORD GETS UPDATED
        }, [password]
    )
    //RETURN FINAL OBJECT
    return validation;
}
