/* eslint-disable react/prop-types */

export default function MovieCard({imagePath, title}){

    const imgUrl = `https://image.tmdb.org/t/p/w500/${imagePath}`
    return(
        <div className="md:pr-8">
            <img src={imgUrl} alt="" className="md:min-w-[250px] min-w-[200px] rounded-lg max-h-[140px] object-cover"/>
            <p className="text-white font-semibold mt-1">{title}</p>
        </div>
        
    )
}