/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

export default function MovieList({title, movies}){
    return(
        <section className="px-10 py-4 bg-black">
            <h1 className="text-2xl md:text-4xl text-white py-4 font-bold">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex gap-4">
                    {
                        movies && movies?.map(movie =>
                            <MovieCard imagePath={movie.poster_path} title={movie.title} key={movie.id}/>
                        )
                    }
                </div>
            </div>
        </section>
    )
}