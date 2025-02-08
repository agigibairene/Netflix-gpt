import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

export default function Browse(){
    useFetchMovies();

    return(
        <section>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </section>
    )
}