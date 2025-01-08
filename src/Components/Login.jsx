import { Link } from "react-router-dom";
import Header from "./Header";
import background from "/background-img.jpg";
import Input from "../Utils/Input";
import { useState } from "react";
import checkValidData from "../Utils/validate.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase.js";

export default function Login() {
    const [haveAccount, setHaveAccount] = useState(false);
    const [userInput, setUserInput] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState({});

    function handleUserInput(event) {
        const { name, value } = event.target;
        setUserInput(prevData => ({ ...prevData, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
    }

    function validateInputs() {
        const { emailRegex, passwordRegex, fullNameRegex } = checkValidData(userInput.email, userInput.password, userInput.username);
        const newErrors = {
            email: emailRegex ? "" : "Invalid email format.",
            password: passwordRegex ? "" : "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.",
            username: fullNameRegex || haveAccount ? "" : "Full Name is required for Sign Up."
        };
        setErrors(newErrors);
        return Object.values(newErrors).every(error => error === "");
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        if (validateInputs()) {
            try {
                if (haveAccount) {
                    // LOGIN
                    const userCredential = await signInWithEmailAndPassword(auth, userInput.email, userInput.password);
                    console.log("Login successful:", userCredential.user);
                } else {
                    // SIGN UP
                    const userCredential = await createUserWithEmailAndPassword(auth, userInput.email, userInput.password);
                    console.log("Sign Up successful:", userCredential.user);
                    // Clear input fields after successful sign-up
                    setUserInput({ username: "", email: "", password: "" });
                    // Redirect or show success message here
                }
            } catch (error) {
                const errorMessage = error.message;
                setErrors({ general: errorMessage });
            }
        }
    }

    return (
        <div className="relative">
            <Header />
            {/* Background */}
            <div className="h-screen bg-cover bg-fixed" style={{ backgroundImage: `url(${background})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Form */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <form onSubmit={handleSubmit} className="w-11/12 max-w-md rounded-lg bg-black/80 text-white py-8 px-14 shadow-lg flex flex-col">
                    <h2 className="font-bold text-3xl text-center mb-6">{haveAccount ? "Sign In" : "Sign Up"}</h2>

                    {!haveAccount && (
                        <>
                            <Input
                                name="username"
                                placeholder="Full Name"
                                type="text"
                                value={userInput.username}
                                onChange={handleUserInput}
                            />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                        </>
                    )}
                    <Input
                        type="text"
                        name="email"
                        value={userInput.email}
                        onChange={handleUserInput}
                        placeholder="Email Address"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userInput.password}
                        onChange={handleUserInput}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    
                    {/* General error message */}
                    {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

                    <button
                        className="bg-red-800 mt-4 w-full p-3 rounded hover:bg-red-700 transition font-bold"
                        type="submit"
                    >
                        {haveAccount ? "Sign In" : "Sign Up"}
                    </button>

                    <p className="my-4 text-gray-300 text-sm text-center">
                        {haveAccount ? "New to Netflix? " : "Already have an account? "}
                        <span className="font-bold text-white cursor-pointer">
                            <Link onClick={() => { setErrors({}); setHaveAccount(!haveAccount); }}>
                                Sign {haveAccount ? "Up" : "In"} now.
                            </Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}
