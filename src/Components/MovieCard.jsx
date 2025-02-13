/* eslint-disable react/prop-types */

export default function MovieCard({imagePath}){

    const imgUrl = `https://image.tmdb.org/t/p/w500/${imagePath}`
    return(
        <div className="w-48 pr-4">
            <img src={imgUrl} alt="" className="rounded-md"/>
        </div>
        
    )
}