import { useSelector, shallowEqual } from "react-redux";
import MovieList from "./MovieList";

export default function SecondaryContainer(){
    const { movies, popular, topRated, upcoming } = useSelector((state)=>({
        movies: state.movies.nowPlayingMovies,
        popular: state.movies.popularMovies,
        topRated: state.movies.topRatedMovies,
        upcoming: state.movies.upcomingMovies
    }), shallowEqual);

    console.log("TRENDING",movies);
    console.log("POPULAR",popular);
    // Popular, NowPlaying, Trending, Horror
    
    return(
        movies && popular &&( <section className="bg-black">
            <div className="-mt-64 z-30 relative">
                {/* <MovieList  title="Trending Movies" movies={movies.nowPlayingMovies} /> */}
                <MovieList  title="Now Playing Movies" movies={movies} />
                <MovieList  title="Popular Movies" movies={popular} />
                <MovieList  title="Upcoming Movies" movies={upcoming} />
                <MovieList  title="Top Rated TV Shows" movies={topRated} />
            </div>
        </section>)
    )
}