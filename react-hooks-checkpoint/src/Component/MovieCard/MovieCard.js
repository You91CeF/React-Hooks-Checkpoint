import "./MovieCard.css"
function MovieCard(props) {
    console.log(props)
    return (
        <div className="movie-card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.posterURL} alt={props.title} />
            <p>Rating: {props.rating}</p>
        </div>
    )
}

export default MovieCard;