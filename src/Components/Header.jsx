import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import Netflixlogo from "/netflix-logo.png";
import userIcon from "/user-icon.jpg";

export default function Header() {
    const [user, setUser] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const { uid, email, displayName } = currentUser;
                dispatch(addUser({ uid, email, displayName }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [dispatch, navigate]);

    async function signUserOut() {
        try {
            await signOut(auth);
            setDropdownOpen(false);
            navigate("/");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }

    return (
        <header className="bg-gradient-to-b from-black fixed w-full z-20">
            <nav className="flex items-center justify-between px-10 py-4">
                {/* Netflix Logo */}
                <img className="w-36" src={Netflixlogo} alt="Netflix Logo" />

                {/* User Profile Section */}
                {user ? (
                    <div className="relative">
                        <img
                            src={userIcon}
                            className="w-10 h-10 cursor-pointer"
                            alt="User Avatar"
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                        />
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-gray-900 text-white rounded-lg shadow-lg">
                                <button 
                                    className="block w-full px-4 py-2 hover:bg-red-600 text-left"
                                    onClick={signUserOut}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <NavLink to="/">
                        <button className="text-white font-semibold px-5 py-2 bg-red-600 rounded-md hover:bg-red-700">
                            Sign Up
                        </button>
                    </NavLink>
                )}
            </nav>
        </header>
    );
}
