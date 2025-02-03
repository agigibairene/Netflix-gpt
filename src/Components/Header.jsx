import { useState, useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import userIcon from "/user-icon.jpg";
import Netflixlogo from "/netflix-logo.png";
import { LoginContext } from "../Context/UserContextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

export default function Header() {
    const { currentUser } = useContext(LoginContext);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    async function signUserOut(){
        try{
            await signOut(auth);
            setDropdownOpen(false);
            navigate("/");
        }
        catch(error){
            console.error("Error signing out:", error);
        }
    }

    return (
        <header className="p-4 bg-gradient-to-b from-black z-10">
            <nav className="flex items-center justify-between px-16">
                {/* Netflix Logo */}
                <img className="w-52" src={Netflixlogo} alt="Netflix Logo" />

                {/* User Icon with Dropdown */}
                {currentUser ? (
                    <div className="relative">
                        <img
                            src={userIcon}
                            className="w-12 h-12 cursor-pointer"
                            alt="User Icon"
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                        />
                        
                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-gray-800 text-white rounded shadow-lg">
                                <button 
                                    className="block w-full px-4 py-2 text-left hover:bg-red-600"
                                    onClick={signUserOut}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <NavLink to="/">
                        <button className="text-white font-bold rounded px-4 py-2 bg-red-600">
                            Sign In
                        </button>
                    </NavLink>
                )}
            </nav>
        </header>
    );
}
