import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function SecondaryContainer(){
    const movies = useSelector((state)=>state.movies)
    // Popular, NowPlaying, Trending, Horror
    
    return(
        <section>
            <MovieList  title="Trending" movies={movies.nowPlayingMovies} />
        </section>
    )
}