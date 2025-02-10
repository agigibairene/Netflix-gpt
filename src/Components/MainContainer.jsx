import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export default function MainContainer() {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    if (!movies || movies.length === 0) return null;

    const thumbnail = movies[1];
    const { id } = thumbnail;

    return (
        <section className="relative">
            <VideoTitle thumbnail={thumbnail} />
            <VideoBackground movie_id={id} />
        </section>
    );
}
