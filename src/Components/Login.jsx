import { useContext, useState } from "react";
import Input from "../Utils/Input";
import { Link } from "react-router";
import { LoginContext } from "../Context/UserContextProvider";

export default function Login(){
    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
    });

    const {handleSubmit, errors} = useContext(LoginContext)


    function handleUserInput(event){
        const {value, name} = event.target;

        setUserInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }


    return(
        <form onSubmit={(e)=>handleSubmit(e, userInput)} className="bg-black bg-opacity-80 shadow-lg text-white w-[26rem] mx-auto px-12 py-4 rounded">
            <h1 className="font-bold text-3xl mb-6 mt-2">Sign In</h1>
            <Input value={userInput.email} placeholder="Email address" name="email" onChange={handleUserInput} type="text"/>
            {errors.emailError && <p className="text-netflix-color">{errors.emailError}</p> }


            <Input value={userInput.password} placeholder="Password" name="password" onChange={handleUserInput} type="password"/>
            {errors.passwordErr && <p className="text-netflix-color">{errors.passwordErr}</p> }


            <button className="w-full bg-netflix-color text-white my-9 px-4 py-3 font-semibold text-lg rounded-sm outline-none">Sign In</button>

            <div className="flex mb-3">
                <p>New to Netflix?</p>
                <Link to="/signup" className="ml-2 font-bold">Sign up now</Link>
            </div>
        </form>
    )
}