import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import { useState } from "react";
import AddMovie from "../AddMovie/AddMovie";
function MovieList(props) {

    const [movies, setMovies] = useState(props.movies)

    const addMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    }
    return (
        <div className="movie-list">
            {movies.map((movie) =>
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    description={movie.description}
                    posterURL={movie.posterURL}
                    rating={movie.rating}
                />
            )}
            <AddMovie addMovie={addMovie} />
        </div>
    )
}

export default MovieList;