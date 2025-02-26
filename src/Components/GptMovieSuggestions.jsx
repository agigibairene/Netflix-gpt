import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export default function GptMovieSuggestions() {
    const {  gptMovies } = useSelector(state => ({
        movieNames: state.gpt.movieNames,
        gptMovies: state.gpt.gptMovies
    }));

    if (!gptMovies) return null;

    return (
        <div className="absolute z-50 bg-black bg-opacity-50 h-[300px] top-72 py-8 w-screen overflow-hidden">
            <div className="cursor-pointer md:pb-8 pb-2">
                <h2 className="text-4xl text-white py-4 font-bold">Search Results</h2>
                <div className="flex md:gap-4 gap-2 overflow-x-scroll no-scrollbar h-[220px]">
                    {
                        gptMovies.flatMap(movies => movies.map(movie => {
                            const { poster_path, title } = movie;
                            return (<MovieCard imagePath={poster_path} title={title} key={poster_path} />)
                        }))
                    }
                </div>
            </div>
        </div>
    )
}
