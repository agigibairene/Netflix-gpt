/* eslint-disable react/prop-types */
import { useSelector  } from "react-redux";
import {  addTrailerVideo } from "../store/movieSlice";
import { useFetchData } from "../hooks/useFetchData";

export default function VideoBackground({movie_id}){
    const trailerVideo = useSelector(state => state.movies?.trailerVideo);

    const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos`
    useFetchData(url,addTrailerVideo)
   
    return(
        <div className="w-full overflow-hidden top-0 left-0 z-0 min-h">
        {trailerVideo ? (
            <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
           
        ></iframe>
        
        ) : (
            <h1 className="text-white text-center text-2xl">No Video Available</h1>
        )}
    </div>
    )
}