import { useRef } from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";
import { Mistral } from '@mistralai/mistralai';




export default function SearchPage(){
    const searchText = useRef();
    const chosenLang = useSelector(state=>state.config.lang);


    async function handleGpt(){
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

        const client = new Mistral({apiKey: apiKey});
        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const chatResponse = await client.chat.complete({
        model: 'mistral-large-latest',
        messages: [{role: 'user', content: gptQuery}],
        });

        const gptMovies = chatResponse.choices[0]?.message.content.split(",");
        console.log(gptMovies);
    }
    


    return(
        <div className="flex">
            <form onSubmit={(e)=>e.preventDefault()} className="flex items-center gap-4 ">
                <input
                    type="GPT search"
                    className="w-[350px] bg-white outline-none border-0 px-6 py-3 rounded-lg"
                    placeholder={lang[chosenLang]?.placeholder}
                    ref={searchText}
                />
                <button onClick={handleGpt} className="bg-netflix-color text-white px-4 py-3 font-semibold rounded outline-none">{lang[chosenLang]?.search}</button>
            </form>

            <GptMovieSuggestions />
        </div>
    )
}