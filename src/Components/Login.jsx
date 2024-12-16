import { Link } from "react-router-dom";
import Header from "./Header";
import background from "/background-img.jpg";
import Input from "../Utils/Input";

export default function Login(){
    return(
        <div>
            <Header />
            <div className="h-screen bg-cover bg-fixed" style={{ backgroundImage: `url(${background})` }}>
            </div>
            <form className="w-4/12 rounded absolute inset-0 mx-auto my-20 right-0 left-0 bg-black text-white py-8 px-14 max-w-md bg-black/80">
                <h2 className="font-bold text-white text-3xl">Sign In</h2>
                <Input type="text" name="Email" placeholder="Email Address"/>
                <Input type="password" name="Password" placeholder="Password"/>
                <button className="bg-red-800 mt-8 w-full p-4 outline-0 border-none rounded" type="submit">Sign In</button>
                <div className="flex justify-between w-full mb-8 text-gray-300">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Remember me
                    </label>
                    <Link>Need help?</Link>
                </div>

                <div>
                    <p className="mb- text-gray-300">New to Netflix? 
                        <span className="font-bold text-white"><Link>Sign up now.</Link></span>
                    </p>
                    <p className="text-gray-300">
                        This page is produced by Google reCAPTCHA to ensure you&apos;re not a bot. 
                        <span><Link>Learn more</Link></span> 
                    </p>
                </div>
            </form>
        </div>
    )
}