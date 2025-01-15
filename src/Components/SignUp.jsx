import { useState } from "react";
import Input from "../utils/Input";
import { Link } from "react-router";
import checkValidData from "../utils/validate";
export default function Login(){
    const [userInput, setUserInput] = useState({
        username: "",
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
        const {emailRegex, passwordRegex, nameRegex} = checkValidData(userInput.email, userInput.password, userInput.username);
        
        const userErrs = {
            nameError: nameRegex ? "" : "Enter a valid username",
            emailError: emailRegex ? "" : "Enter a valid email address",
            passwordErr: passwordRegex ? "" : "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.",
        }

        setErrors(userErrs)

        return Object.values(userErrs).every(error => error === "");

    }

    function handleSubmit(event){
        event.preventDefault();
        checkValidations();
    }

    return(
        <form onSubmit={handleSubmit} className="bg-black bg-opacity-80 shadow-lg text-white w-[26rem] mx-auto px-12 py-4 rounded">
            <h1 className="font-bold text-3xl mb-4 mt-2">Sign Up</h1>


            <Input value={userInput.username} placeholder="User Name" name="username" onChange={handleUserInput} type="text"/>
            {errors.nameError && <p className="text-netflix-color">{errors.nameError}</p>}

            <Input value={userInput.email} placeholder="Email Address" name="email" onChange={handleUserInput} type="text"/>
            {errors.emailError && <p className="text-netflix-color">{errors.emailError}</p> }

            <Input value={userInput.password} placeholder="Password" name="password" onChange={handleUserInput} type="password"/>
            {errors.passwordErr && <p className="text-netflix-color">{errors.passwordErr}</p> }

            <button className="w-full bg-netflix-color text-white my-6 px-4 py-3 font-semibold text-lg rounded-sm">Sign up</button>

            <div className="flex mb-3">
                <p>Already have an account?</p>
                <Link to="/" className="ml-2 font-bold">Sign in</Link>
            </div>
        </form>
    )
}