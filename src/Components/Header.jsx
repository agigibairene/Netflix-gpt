import netflixLogo from "/netflix-logo.png";
export default function Header(){
    return(
        <div className="z-10 px-8 py-2 bg-gradient-to-b from-black absolute">
            <img src={netflixLogo} alt="Netflix-logo" className="w-44"/>
        </div>
    )
}