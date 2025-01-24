/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import checkValidData from "../Utils/Validate";
import { auth,db } from "../Utils/firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";


export const loginContext = createContext({
    handleSubmit: ()=>{},
    userLoggedIn : false,
    handleSignUp: ()=>{},
    userSignedUp: false,
    errors: {}
});


export default function UserContext({children}){
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userSignedUp, setUserSignedUp] = useState(false);
    const [errors, setErrors] = useState({});


    function checkValidations(userInput){
        if (!userInput || !userInput.email || !userInput.password || !userInput.username) {
            console.error("Invalid userInput:", userInput);
            return false;
        }

        const {emailRegex, passwordRegex, nameRegex} = checkValidData(userInput.email, userInput.password, userInput.username);
           
        const userErrs = {
            nameError: nameRegex ? "" : "Enter a valid username",
            emailError: emailRegex ? "" : "Enter a valid email address",
            passwordErr: passwordRegex ? "" : "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.",
        }
   
        setErrors(userErrs)
   
        return Object.values(userErrs).every(error => error === "");
   
    }
   

    async function handleSubmit(event, userInput){
        event.preventDefault();
        const isValid = checkValidations(userInput);
        try{
            if (isValid){
                await signInWithEmailAndPassword(auth, userInput.email, userInput.password);
                setIsUserLoggedIn(true)
                console.log("User logged in successfully")
            }
        }
        catch(e){
            console.log("Firebase Login error", e)
        }
    }

    async function handleSignUp(event, userInput){
        event.preventDefault();
        const isValid = checkValidations(userInput);
        try {
            if (isValid) {
                const userCredentials = await createUserWithEmailAndPassword(auth, userInput.email, userInput.password);
                const user = userCredentials.user;
                setUserSignedUp(true);
                console.log(user);
                console.log("User successfully created");
                if (user && user.email && userInput.username) {
                    await setDoc(doc(db, "Users", user.uid), {
                        email: user.email,
                        username: userInput.username,
                    });
                    console.log("User data written to Firestore successfully");
                }
            }
        } 
        catch (e) {
            console.error("Error creating user:", e.message);
        }
    }

    const detailsLogin = {
        handleSubmit: handleSubmit,
        userLoggedIn : isUserLoggedIn,
        userSignedUp: userSignedUp,
        handleSignUp: handleSignUp,
        errors: errors
    }

    return <loginContext.Provider value={detailsLogin}>
        {children}
    </loginContext.Provider>
}

