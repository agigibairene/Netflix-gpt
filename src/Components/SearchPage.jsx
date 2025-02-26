import { useEffect, useRef } from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { Mistral } from '@mistralai/mistralai';
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResults } from "../store/gptSlice";



export default function SearchPage(){
    const searchText = useRef();
    const chosenLang = useSelector(state=>state.config.lang);
    const dispatch = useDispatch();

    const fetchMovies = async (movie) =>{
        try{
            const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
            const response = await fetch(url, API_OPTIONS);
            const data = await response.json();
            return data.results;
        }
        catch (err) {
            console.error(err);
        }

    };

    // useEffect(() => {
    //     fetchMovies();
    // }, []);


    async function handleGpt(){
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

        const client = new Mistral({apiKey: apiKey});
        const aiQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give me at most 5 movies names and at least 3 , comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const chatResponse = await client.chat.complete({
        model: 'mistral-large-latest',
        messages: [{role: 'user', content: aiQuery}],
        });

        const mistralMovies = chatResponse.choices[0]?.message.content.split(",");
        console.log(mistralMovies);

        const moviesArr = mistralMovies.map(movie => fetchMovies(movie));
        const moviesResults = await Promise.all(moviesArr);
        // console.log(moviesResults)
        dispatch(addGptMovieResults({movieNames: mistralMovies, gptMovies: moviesResults}));
    }
    


    return(
        <div className="flex flex-col justify-between gap-28 items-center mt-36 pb-20">
            <form onSubmit={(e)=>e.preventDefault()} className="flex items-center gap-4 top-96">
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