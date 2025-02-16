/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import checkValidData from "../Utils/Validate.jsx";
import { auth,db } from "../Utils/firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";



export const LoginContext = createContext({
    currentUser: null,
    handleSubmit: ()=>{},
    handleSignUp: ()=>{},
    clearErrors: ()=>{},
    errors: {},
});


export default function UserContextProvider({children}){
    const [errors, setErrors] = useState({});

    function clearErrors() {
        setErrors({});
    }

    function checkValidations(userInput, userSignedUp) {
        const userErrs = {
            nameError: userSignedUp && !userInput.username ? "Enter a valid username" : "",
            emailError: !userInput.email ? "Enter a valid email address" : "",
            passwordErr: !userInput.password ? "Password is required" : "",
        };
    
        // Log invalid input if any field is missing
        if (!userInput || !userInput.email || !userInput.password || (userSignedUp && !userInput.username)) {
            console.error("Invalid userInput:", userInput);
            setErrors(userErrs);
            return false;
        }
    
        // Validate with regex if fields are present
        const { emailRegex, passwordRegex, nameRegex } = checkValidData(userInput.email, userInput.password, userInput.username);
    
        userErrs.nameError = userSignedUp && !nameRegex ? "Enter a valid username" : "";
        userErrs.emailError = !emailRegex ? "Enter a valid email address" : "";
        userErrs.passwordErr = userSignedUp ? (!passwordRegex ? "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character." : "")
        : (!passwordRegex ? "Wrong password" : ""),
    
        setErrors(userErrs);
    
        // Return true only if there are no errors
        return Object.values(userErrs).every((error) => error === "");
    }
    
   

    async function handleSubmit(event, userInput) {
        event.preventDefault();
        setErrors({});
        const isValid = checkValidations(userInput, false);
    
        if (!isValid) return;
    
        try {
            await signInWithEmailAndPassword(auth, userInput.email, userInput.password);
            console.log("User logged in successfully");
        } catch (e) {
            console.error("Firebase Login error", e.message);
            setErrors(prevErrors =>({
                ...prevErrors,
                firebaseError: e.message
            })); // Capture the error
        }
    }
    
    async function handleSignUp(event, userInput) {
        event.preventDefault();
        setErrors({});
        const isValid = checkValidations(userInput, true);
    
        if (!isValid) return;
    
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, userInput.email, userInput.password);
            const user = userCredentials.user;
            console.log("User successfully created");
    
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    username: userInput.username,
                });
                console.log("User data written to Firestore successfully");
            }
        } catch (e) {
            console.error("Error creating user:", e.message);
            setErrors(prevErrors => ({
                ...prevErrors,
                firebaseError: e.message 
            })); // Capture error message
        }
    }

    

    const detailsLogin = {
        handleSubmit: handleSubmit,
        handleSignUp: handleSignUp,
        errors: errors,
        clearErrors: clearErrors,
    }

    return <LoginContext.Provider value={detailsLogin}>
        {children}
    </LoginContext.Provider>
}
