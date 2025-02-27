import { useSelector, shallowEqual } from "react-redux";
import MovieList from "./MovieList";

export default function SecondaryContainer(){
    const { movies, popular, topRated, upcoming } = useSelector((state)=>({
        movies: state.movies.nowPlayingMovies,
        popular: state.movies.popularMovies,
        topRated: state.movies.topRatedMovies,
        upcoming: state.movies.upcomingMovies
    }), shallowEqual);

    const movieList = [
        {title: "Now Playing Movies", movie: movies},
        {title: "Popular Movies", movie: popular},
        {title: "Upcoming Movies", movie: upcoming},
        {title: "Top Rated TV Shows", movie: topRated},
    ];
    
    return(
        movies && popular &&( <section className="bg-black">
            <div className="mt-0  lg:-mt-64 z-30 relative">
                {
                    movieList.map(movieItem =>{
                        const { title, movie } = movieItem;
                       return <MovieList title={title} movies={movie} key={title}/>   
                    })
                }
            </div>
        </section>)
    )
}