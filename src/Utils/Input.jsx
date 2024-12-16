/* eslint-disable react/prop-types */
export default function Input({type, placeholder, name}){
    return(
        <input 
            type={type} 
            placeholder={placeholder} 
            className="bg-gray-500 outline-0 border-none rounded p-2 w-full my-4" 
        />
    )
}