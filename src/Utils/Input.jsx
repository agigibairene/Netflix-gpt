/* eslint-disable react/prop-types */
export default function Input({type, placeholder, name, onChange, value}){
    return(
       <>
          <input 
            type={type} 
            placeholder={placeholder} 
            name={name} 
            className="bg-gray-500 outline-0 border-none rounded p-2 w-full my-4" 
            onChange={onChange}
            value={value}
         />

         
       </>
    )
}