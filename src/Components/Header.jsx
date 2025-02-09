import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userIcon from "/user-icon.jpg";
import Netflixlogo from "/netflix-logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../store/userSlice";

export default function Header() {
    const [user, setUser] = useState(null)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (currentUser)=>{
            if (currentUser){
                setUser(currentUser);
                const  {uid, email, displayName} = currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}))
                navigate("/browse")

            }
            else{
                dispatch(removeUser())
                navigate("/")
            }
        });


        return ()=> subscribe();
    }, []);

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
        <header className="bg-gradient-to-b from-black z-10">
            <nav className="flex items-center justify-between px-16">
                {/* Netflix Logo */}
                <img className="w-52" src={Netflixlogo} alt="Netflix Logo" />

                {/* User Icon with Dropdown */}
                {user ? (
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
                                <p>{}</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <NavLink to="/">
                        <button className="text-white font-bold rounded px-4 py-2 bg-red-600">
                            Sign Up
                        </button>
                    </NavLink>
                )}
            </nav>
        </header>
    );
}
