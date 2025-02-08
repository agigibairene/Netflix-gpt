import { useEffect } from "react";
import { addNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";


export default function useFetchMovies(){
    const dispatch = useDispatch();


    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

    const fetchMovies = async () =>{
        const response = await fetch(url, API_OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(()=>{
        fetchMovies();
    }, []);

}