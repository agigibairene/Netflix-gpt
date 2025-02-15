import { useState } from "react";

export default function SearchPage(){
    const [searchText, setSearchText] = useState();
    return(
        <div className="flex items-center gap-4 ">
            <input 
                type="GPT search"
                className="w-[350px] bg-white outline-none border-0 px-6 py-3 rounded-lg"
                placeholder="What do you want to watch ?"
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
            />

            <button className="bg-netflix-color text-white px-4 py-3 font-semibold rounded">Search</button>
        </div>
    )
}