import Netflixlogo from "/netflix-logo.png";
import { Link } from "react-router";

export default function Header(){
    return (
        <header>
            <nav className="flex items-center justify-between px-16">
                <img className="w-52" src={Netflixlogo} alt="" />
                <Link to="/">
                    <button className="text-white font-bold rounded px-4 py-2 bg-netflix-color">Sign In</button>
                </Link>
            </nav>
        </header>
    )
}