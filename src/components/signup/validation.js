import {AiFillCheckCircle} from "react-icons/ai";
import {MdDoNotTouch} from "react-icons/md";

export const dataValidation = (showValidation, isPasswordGreaterThan8, isUpperCase, isLowerCase, isNumericValue, hasSpecialCharacters) => {
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