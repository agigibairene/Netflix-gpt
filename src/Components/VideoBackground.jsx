/* eslint-disable react/prop-types */
import { useSelector  } from "react-redux";
import {  addTrailerVideo } from "../store/movieSlice";
import { useFetchData } from "../hooks/useFetchData";
import ReactPlayer from "react-player";

export default function VideoBackground({movie_id}){
    const trailerVideo = useSelector(state => state.movies?.trailerVideo);

    const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos`
    useFetchData(url,addTrailerVideo)
   
    return(
        <div className="w-screen overflow-hidden top-0 left-0 z-0">
        {trailerVideo ? (
             <ReactPlayer 
             url={`https://www.youtube.com/watch?v=${trailerVideo?.key}`} 
             playing 
             muted 
             controls={false} 
             width="100%" 
             height="100%"
             className="w-screen aspect-video"
          />
           
        
        ) : (
            <h1 className="text-white text-center text-2xl">No Video Available</h1>
        )}
    </div>
    )
}