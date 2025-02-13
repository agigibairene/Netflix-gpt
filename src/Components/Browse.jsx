import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../store/movieSlice";

export default function Browse(){
    const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    const popularMovies = "https://api.themoviedb.org/3/movie/popular";
    const topRated = "https://api.themoviedb.org/3/movie/top_rated";
    const upcoming = "https://api.themoviedb.org/3/movie/upcoming";

    useFetchMovies(nowPlayingUrl, addNowPlayingMovies);
    useFetchMovies(popularMovies, addPopularMovies);
    useFetchMovies(topRated, addTopRatedMovies);
    useFetchMovies(upcoming, addUpcomingMovies);

    return(
        <section className="">
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </section>
    )
}