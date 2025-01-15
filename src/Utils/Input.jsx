/* eslint-disable react/prop-types */
export default function Input({type, value, onChange, placeholder, name}){
   return(
       <input 
           className="w-full my-3 px-4 py-3 bg-slate-600 outline-none border-0 rounded-sm"
           placeholder={placeholder} 
           type={type} 
           value={value} 
           onChange={onChange}
           name={name}   
       />
   )
}