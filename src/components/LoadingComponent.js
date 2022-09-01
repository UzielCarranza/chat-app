import ReactLoading from "react-loading";

import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function LoadingImage() {
    //Return the loading animation
    return (
        <>
            <ReactLoading
                type="spinningBubbles"
                color="#fff"
                height={200}
                width={150}
            />
        </>
    )

}

export const LoadingComponent = () => {
    //hook that keeps track of the state of the loading statement
    const [isLoading, setIsLoading] = useState(true);

//let's you navigate to other pages programmatically
    const navigate = useNavigate()


    useEffect(() => {

        // Wait for 3 seconds
        setTimeout(() => {
            setIsLoading(false);
            //go to the homescreen
            navigate("/")
        }, 8000);
    }, []);


    //return the Loading animation component on is loading statement to true
    return isLoading && <LoadingImage/>
}