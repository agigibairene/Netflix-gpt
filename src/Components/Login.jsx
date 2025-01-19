import { useState } from "react";
import Input from "../Utils/Input";
import { Link } from "react-router";
import checkValidData from "../Utils/Validate.jsx";
import { auth } from "../Utils/firebase.js";

export default function Login(){
    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    function handleUserInput(event){
        const {value, name} = event.target;

        setUserInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    function checkValidations(){
        const {emailRegex, passwordRegex} = checkValidData(userInput.email, userInput.password);
        
        const userErrs = {
            emailError: emailRegex ? "" : "Enter a valid email address",
            passwordErr: passwordRegex ? "" : "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.",
        }

        setErrors(userErrs)

        return Object.values(userErrs).every(error => error === "");

    }

    function handleSubmit(event){
        event.preventDefault();
       const isValid = checkValidations()
    }

    console.log(userInput)


    return(
        <form onSubmit={handleSubmit} className="bg-black bg-opacity-80 shadow-lg text-white w-[26rem] mx-auto px-12 py-4 rounded">
            <h1 className="font-bold text-3xl mb-6 mt-2">Sign In</h1>
            <Input value={userInput.email} placeholder="Email address" name="email" onChange={handleUserInput} type="text"/>
            {errors.emailError && <p className="text-netflix-color">{errors.emailError}</p> }


            <Input value={userInput.password} placeholder="Password" name="password" onChange={handleUserInput} type="password"/>
            {errors.passwordErr && <p className="text-netflix-color">{errors.passwordErr}</p> }


            <button className="w-full bg-netflix-color text-white my-9 px-4 py-3 font-semibold text-lg rounded-sm">Sign In</button>

            <div className="flex mb-3">
                <p>New to Netflix?</p>
                <Link to="/signup" className="ml-2 font-bold">Sign up now</Link>
            </div>
        </form>
    )
}