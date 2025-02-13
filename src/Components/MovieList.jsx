/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

export default function MovieList({title, movies}){

    return(
        <section className="p-6 ">
            <h1 className="text-3xl py-6">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex ">
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