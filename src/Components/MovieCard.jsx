/* eslint-disable react/prop-types */

export default function MovieCard({imagePath}){

    const imgUrl = `https://image.tmdb.org/t/p/w500/${imagePath}`
    return(
        <div>
            <img src={imgUrl} alt="" />
        </div>
        
    )
}