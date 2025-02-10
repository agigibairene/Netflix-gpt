import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function SecondaryContainer(){
    const movies = useSelector((state)=>state.movies.nowPlaying)
    // Popular, NowPlaying, Trending, Horror
    console.log(movies);
    return(
        <section>
            <MovieList  title="Trending" movies={movies} />
        </section>
    )
}