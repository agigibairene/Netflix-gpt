/* eslint-disable react/prop-types */
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";


const btnClasses = "flex items-center px-3 py-1 md:px-6 md:py-2 mt-2 mr-3 md:mt-5 lg:mt-0 font-bold text-lg rounded-md";

export default function VideoTitle({thumbnail}){
    const {original_title, overview} = thumbnail;

    return(
        <div className="flex flex-col items-center md:items-start -top-6 md:top-0 px-14 pt-52 bg-gradient-to-r w-full aspect-video h-screen from-black absolute text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">{original_title}</h1>
            <p className="w-1/2 py-6 text-lg hidden lg:inline-block">{overview}</p>
            <div className="flex items-center">
                <button className={`${btnClasses} bg-white text-black hover:bg-opacity-90`}>
                    <CiPlay1 size={30} color="black" className="mr-1"/> 
                    Play
                </button>
                <button className={`${btnClasses} bg-gray-400 text-black `}>
                    <IoIosInformationCircleOutline size={30} className="mr-1"/> 
                    More Info
                </button>
            </div>
        </div>
    )
}