/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/constants";

export default function VideoBackground({movie_id}){
    const [trailerVideo, setTrailerVideo] = useState();
    
    const fetchVideo = async () =>{
        try{
            const response = await fetch( `https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS);
            const data = await response.json();
            const trailer =  data.results.filter(video => video.type === "Trailer");
            // console.log(`Hello video`, trailer);
            if (trailer.length > 0){
                setTrailerVideo(trailer[0]);
            }
        }       
        catch(error){
            console.error(error)
        } 
    }

    console.log(trailerVideo);

    
    useEffect(()=>{
        fetchVideo();
    }, []);
    // console.log(`Hello video here ${video}`);

    return(
        <div className="w-full h-screen bg-black absolute">
        {trailerVideo ? (
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&loop=1&mute=1&playlist=${trailerVideo.key}`}
                title="Movie Background"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        ) : (
            <h1 className="text-white text-center text-2xl">No Video Available</h1>
        )}
    </div>
    )
}