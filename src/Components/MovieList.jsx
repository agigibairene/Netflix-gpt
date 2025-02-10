/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

export default function MovieList({title, movies}){
    console.log(title, movies);
    return(
        <section>
            <div>
                <h1>{title}</h1>
                <div>
                    {
                        movies && movies.map(movie =>
                            <MovieCard imagePath={movie.poster_path} key={movie.id}/>
                        )
                    }
                </div>
            </div>
        </section>
    )
}