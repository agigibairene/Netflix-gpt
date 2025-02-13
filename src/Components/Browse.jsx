import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { addNowPlayingMovies, addPopularMovies } from "../store/movieSlice";

export default function Browse(){
    const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    const popularMovies = "https://api.themoviedb.org/3/movie/popular";

    useFetchMovies(nowPlayingUrl, addNowPlayingMovies);
    useFetchMovies(popularMovies, addPopularMovies);

    return(
        <section className="">
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </section>
    )
}