import { useSelector } from "react-redux"

export default function GptMovieSuggestions(){
    const {movieNames, gptMovies}= useSelector(state=>({
        movieNames: state.gpt.movieNames,
        gptMovies: state.gpt.gptMovies
    }));

    

    return(
        <div>
            
        </div>
    )
}