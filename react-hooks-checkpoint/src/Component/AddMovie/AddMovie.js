import { useState } from "react";
import "./AddMovie.css"


function AddMovie(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newMovie = {
            title: title,
            description: description,
            posterURL: posterURL,
            rating: rating,
        };
        props.addMovie(newMovie);
    }


    return (
        <div className="add-movie">
            <h2>Add movies to the list:</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} type="text" onChange={(event) => setTitle(event.target.value)}></input>
                <label>Description</label>
                <input value={description} type="text" onChange={(event) => setDescription(event.target.value)}></input>
                <label>Poster URL</label>
                <input value={posterURL} type="text" onChange={(event) => setPosterURL(event.target.value)}></input>
                <label>Rating</label>
                <input value={rating} type="number" onChange={(event) => setRating(event.target.value)}></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddMovie;