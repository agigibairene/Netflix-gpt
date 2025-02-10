/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

export default function MovieList({title, movies}){
    return(
        <section>
            <div>
                <h1>{title}</h1>
                <div>
                    <MovieCard />
                </div>
            </div>
        </section>
    )
}