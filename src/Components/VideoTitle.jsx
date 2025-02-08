/* eslint-disable react/prop-types */
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";


const btnClasses = "flex items-center px-6 py-2 mr-3 font-bold bg-opacity-50 text-lg rounded-md";

export default function VideoTitle({thumbnail}){
    const {original_title, overview} = thumbnail;

    return(
        <div className="relative">
            <h1 className="text-6xl font-bold">{original_title}</h1>
            <p className="w-1/2 py-6 text-lg">{overview}</p>
            <div className="flex items-center">
                <button className={`${btnClasses} bg-black text-white`}> <CiPlay1 size={30} className="mr-1"/> Play</button>
                <button className={`${btnClasses} bg-grey[400] text-black`}><IoIosInformationCircleOutline size={30} className="mr-1"/> More Info</button>
            </div>
        </div>
    )
}