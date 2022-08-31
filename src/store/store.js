import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({ reducer: userReducer })

//A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
function userReducer(state = { username : "", email : "", password : "" }, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'createNewUser') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            username: action.username,
            email: action.email,
            password: action.password,
        }
    }
    // otherwise return the existing state unchanged
    return state
}