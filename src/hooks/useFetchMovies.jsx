import { useEffect } from "react";
import { addNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";


export default function useFetchMovies(url, reduxAction){
    const dispatch = useDispatch();


    const fetchMovies = async () =>{
        const response = await fetch(url, API_OPTIONS);
        const data = await response.json();
        dispatch(reduxAction(data.results));
    }

    useEffect(()=>{
        fetchMovies();
    }, []);

}