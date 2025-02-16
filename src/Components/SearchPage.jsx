import { useState } from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";

export default function SearchPage(){
    const [searchText, setSearchText] = useState();
    const chosenLang = useSelector(state=>state.config.lang)

    return(
        <div className="flex">
            <form onSubmit={(e)=>e.preventDefault()} className="flex items-center gap-4 ">
                <input
                    type="GPT search"
                    className="w-[350px] bg-white outline-none border-0 px-6 py-3 rounded-lg"
                    placeholder={lang[chosenLang]?.placeholder}
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <button className="bg-netflix-color text-white px-4 py-3 font-semibold rounded">{lang[chosenLang]?.search}</button>
            </form>

            <GptMovieSuggestions />
        </div>
    )
}