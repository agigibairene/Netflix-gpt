import userIcon from "/user-icon.jpg";
import { NavLink } from "react-router-dom";
import Netflixlogo from "/netflix-logo.png";
import { LoginContext } from "../Context/UserContextProvider";
import { useContext } from "react";

export default function Header() {

    const { currentUser } = useContext(LoginContext)

    return (
        <header>
            <nav className="flex items-center justify-between px-16">
                <img className="w-52" src={Netflixlogo} alt="" />
                { 
                    currentUser ? <img src={userIcon} className="w-12 h-12 rounded" alt="User Icon"/> :
                    <NavLink to="/">
                        <button className="text-white font-bold rounded px-4 py-2 bg-netflix-color">
                            Sign In
                        </button>
                    </NavLink>
                }
            </nav>
        </header>
    );
}
