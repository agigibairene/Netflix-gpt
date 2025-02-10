export default function MovieCard({imagePath}){
    let path; 
    const imgUrl = `https://image.tmdb.org/t/p/w500/${imagePath}`
    return(
        <div>
            <img src={imgUrl} alt="" />
        </div>
        
    )
}