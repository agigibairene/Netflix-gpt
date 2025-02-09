import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export default function MainContainer(){
    const movies = useSelector(state => state.movies?.nowPlayingMovies);
    if (!movies) return;

    const thumbnail = movies[0];
    const {id} = thumbnail

    return(
        <section className="">
            <VideoTitle thumbnail={thumbnail}/>
            <VideoBackground movie_id={id}/>
        </section>
    )
}