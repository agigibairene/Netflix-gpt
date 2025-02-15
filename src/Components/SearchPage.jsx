import { useState } from "react";

export default function SearchBar(){
    const [searchText, setSearchText] = useState();
    return(
        <div className="flex  items-center">
            <input 
                type="GPT search"
                className="flex-grow bg-white outline-none border-0 px-4 py-2 rounded-lg"
                placeholder="What do you want too watch ?"
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
            />

            <button className="bg-netflix-color text-white px-3 py-2 rounded">Search</button>
        </div>
    )
}