/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import checkValidData from "../Utils/Validate.jsx";
import { auth,db } from "../Utils/firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";


export const LoginContext = createContext({
    currentUser: null,
    handleSubmit: ()=>{},
    handleSignUp: ()=>{},
    errors: {}
});


export default function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
        });

        return () =>{
            subscribe()
        }
    }, [])


    function checkValidations(userInput, userSignedUp){
        if (!userInput || !userInput.email || !userInput.password || (userSignedUp && !userInput.username)) {
            console.error("Invalid userInput:", userInput);
            return false;
        }

        const {emailRegex, passwordRegex, nameRegex} = checkValidData(userInput.email, userInput.password, userInput.username);
           
        const userErrs = {
            nameError: userSignedUp && nameRegex ? "" : "Enter a valid username",
            emailError: emailRegex ? "" : "Enter a valid email address",
            passwordErr: passwordRegex ? "" : "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.",
        }
   
        setErrors(userErrs)
   
        return Object.values(userErrs).every(error => error === "");
   
    }
   

    async function handleSubmit(event, userInput){
        event.preventDefault();
        const isValid = checkValidations(userInput, false);
        try{
            if (isValid){
                await signInWithEmailAndPassword(auth, userInput.email, userInput.password);
                console.log("User logged in successfully")
            }
        }
        catch(e){
            console.log("Firebase Login error", e)
        }
    }

    async function handleSignUp(event, userInput){
        event.preventDefault();
        const isValid = checkValidations(userInput, true);
        try {
            if (isValid) {
                const userCredentials = await createUserWithEmailAndPassword(auth, userInput.email, userInput.password);
                const user = userCredentials.user;
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
        handleSignUp: handleSignUp,
        currentUser: user,
        errors: errors
    }

    return <LoginContext.Provider value={detailsLogin}>
        {children}
    </LoginContext.Provider>
}
