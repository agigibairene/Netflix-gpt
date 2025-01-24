import { useContext, useState } from "react";
import Input from "../Utils/Input";
import { Link } from "react-router";
import { loginContext } from "../Context/UserContext";

export default function SignUp(){
    const [userInput, setUserInput] = useState({
        username: "",
        email: "",
        password: "",
    });

    const {handleSignUp, errors} = useContext(loginContext);

    function handleUserInput(event){
        const {value, name} = event.target;

        setUserInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }
    

    return(
        <form onSubmit={(event)=>handleSignUp(event, userInput)} className="bg-black bg-opacity-80 shadow-lg text-white w-[26rem] mx-auto px-12 py-4 rounded">
            <h1 className="font-bold text-3xl mb-4 mt-2">Sign Up</h1>


            <Input value={userInput.username} placeholder="User Name" name="username" onChange={handleUserInput} type="text"/>
            {errors.nameError && <p className="text-netflix-color">{errors.nameError}</p>}

            <Input value={userInput.email} placeholder="Email Address" name="email" onChange={handleUserInput} type="text"/>
            {errors.emailError && <p className="text-netflix-color">{errors.emailError}</p> }

            <Input value={userInput.password} placeholder="Password" name="password" onChange={handleUserInput} type="password"/>
            {errors.passwordErr && <p className="text-netflix-color">{errors.passwordErr}</p> }

            <button className="w-full bg-netflix-color text-white my-6 px-4 py-3 font-semibold text-lg rounded-sm outline-none">Sign up</button>

            <div className="flex mb-3">
                <p>Already have an account?</p>
                <Link to="/" className="ml-2 font-bold">Sign in</Link>
            </div>
        </form>
    )
}