import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

export function useFetchData(url, reduxAction){
    const dispatch = useDispatch();

    const fetchVideo = async () =>{
        try{
            const response = await fetch( url, API_OPTIONS);
            const data = await response.json();
            const filterData =  data.results.filter(video => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : data.results[0];
            dispatch(reduxAction(trailer));
        }       
        catch(error){
            console.error(error)
        } 
    }
    
    useEffect(()=>{
        fetchVideo();
    }, [url]);

}