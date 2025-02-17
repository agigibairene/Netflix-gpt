import { useEffect, useState } from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";
import OpenAI from "openai";


const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  
  async function main(userQueryTxt) {
    try{
        const chatCompletion = await client.chat.completions.create({
            messages: [{ role: "user", content: userQueryTxt }],
            model: "gpt-3.5-turbo",
        });
        console.log(chatCompletion.choices);
    }
    catch(e){
        console.log(e);
    }
  }

export default function SearchPage(){
    const [searchText, setSearchText] = useState("");
    const chosenLang = useSelector(state=>state.config.lang);
    const [debouncedSearchText, setDebouncedSearchText] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedSearchText(searchText), 500);
        return () => clearTimeout(timeout);
      }, [searchText]
    );

     
   function handleGptSearch(){
        const gptQuery =`Act as a Movie Recommendation system and suggest some movies for the query
        ${debouncedSearchText}. Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;
        if (debouncedSearchText.trim()){
            main(gptQuery);
        }
    }


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
                <button onClick={handleGptSearch} className="bg-netflix-color text-white px-4 py-3 font-semibold rounded outline-none">{lang[chosenLang]?.search}</button>
            </form>

            <GptMovieSuggestions />
        </div>
    )
}