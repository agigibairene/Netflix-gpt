import netflixLogo from "/netflix-logo.png";
import userIcon from "/user-icon.jpg";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const navigate = useNavigate();


    function toggleDropdown() {
        setIsDropdownOpen((prev) => !prev);
    }

    function toggleSideMenu() {
        setIsSideMenuOpen((prev) => !prev);
    }

    function handleSignOut(){
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
           navigate("/error");
          });
    }

    return (
        <header className="z-10 w-full flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black absolute">
            <img src={netflixLogo} alt="Netflix-logo" className="w-44" />

            <button onClick={toggleSideMenu} className="lg:hidden text-white">
                <IoMdMenu size={28} />
            </button>

            <div className="relative hidden lg:flex flex-row items-center">
                <img src={userIcon} alt="user icon" className="w-10 h-10" />
                <button onClick={toggleDropdown} className="ml-2">
                    {isDropdownOpen ? (
                        <IoMdArrowDropup size={24} />
                    ) : (
                        <IoMdArrowDropdown size={24} />
                    )}
                </button>

                {isDropdownOpen && (
                    <div className="rounded-md shadow-md top-[50px] right-0 bg-white absolute py-2 px-4 w-40">
                        <button
                            onClick={handleSignOut}
                            className="block w-full text-left text-sm font-medium text-red-600 hover:bg-gray-100 px-2 py-1 rounded-sm"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>

            {isSideMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
                    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-30">
                        <button
                            onClick={toggleSideMenu}
                            className="absolute top-4 right-4 text-black text-xl"
                        >
                            ✕
                        </button>
                        <nav className="mt-16 px-4">
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="/browse"
                                        className="text-black text-lg font-medium hover:text-red-600"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/my-list"
                                        className="text-black text-lg font-medium hover:text-red-600"
                                    >
                                        My List
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/settings"
                                        className="text-black text-lg font-medium hover:text-red-600"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <button
                                        onClick={() => console.log("Sign Out clicked")}
                                        className="text-red-600 text-lg font-medium hover:underline"
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
