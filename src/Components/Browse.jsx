import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../store/movieSlice";
import { useSelector } from "react-redux";
import SearchPage from "./SearchPage";

export default function Browse() {
    const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

    const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const popularMovies = "https://api.themoviedb.org/3/movie/popular";
    const topRated = "https://api.themoviedb.org/3/movie/top_rated";
    const upcoming = "https://api.themoviedb.org/3/movie/upcoming";

    useFetchMovies(nowPlayingUrl, addNowPlayingMovies);
    useFetchMovies(popularMovies, addPopularMovies);
    useFetchMovies(topRated, addTopRatedMovies);
    useFetchMovies(upcoming, addUpcomingMovies);

    return (
        <section
            className={`${
                showGptSearch ? "bg-bgImage min-h-screen bg-cover bg-center relative" : "bg-bg-Hcolor"
            }`}
        >
            {showGptSearch && <div className="absolute inset-0 bg-black bg-opacity-50"></div>}
            {/* Sticky Header */}
            <Header />

            <main className={`${showGptSearch ? "relative flex min-h-screen justify-center" : ""}`}>
                {showGptSearch ? (
                    <SearchPage />
                ) : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )}
            </main>
        </section>
    );
}
