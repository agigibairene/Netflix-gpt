import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function SecondaryContainer(){
    const movies = useSelector((state)=>state.movies)
    // Popular, NowPlaying, Trending, Horror
    
    return(
        movies.nowPlayingMovies &&( <section className="bg-black">
            <div className="-mt-64 z-30 relative">
                <MovieList  title="Trending Movies" movies={movies.nowPlayingMovies} />
                <MovieList  title="Now Playing Movies" movies={movies.nowPlayingMovies} />
                <MovieList  title="Popular Movies" movies={movies.nowPlayingMovies} />
                <MovieList  title="Upcoming Movies" movies={movies.nowPlayingMovies} />
                <MovieList  title="Top Rated TV Shows" movies={movies.nowPlayingMovies} />
            </div>
        </section>)
    )
}