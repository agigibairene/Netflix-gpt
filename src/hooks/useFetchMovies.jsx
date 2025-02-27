import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";


export default function useFetchMovies(url, reduxAction){
    const dispatch = useDispatch();

    const fetchMovies = async () =>{
       try{
            const response = await fetch(url, API_OPTIONS);
            const data = await response.json();
            dispatch(reduxAction(data.results));
        }
        catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchMovies();
    }, []);

}