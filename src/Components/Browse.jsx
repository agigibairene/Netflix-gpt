import { useEffect, useState } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../Utils/constants";

export default function Browse(){
    const [movies, setMovies] = useState();

    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    const fetchMovies = async () =>{
        const response = await fetch(url, API_OPTIONS);
        const data = await response.json();
        setMovies(data.results)
    }

    useEffect(()=>{
        fetchMovies();
    }, []);

    console.log(movies);

    return(
        <section>
            <Header />
        </section>
    )
}