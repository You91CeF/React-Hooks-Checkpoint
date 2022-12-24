import "./App.css";
import MovieList from "./Component/MovieList/MovieList";
import AddMovie from "./Component/AddMovie/AddMovie";
import { useState } from "react";
function App() {

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Interstellar",
      description: "Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy.",
      posterURL: "https://images.affiches-et-posters.com//albums/3/53771/poster-film-interstellar.jpg",
      rating: 9.3,
    },
    {
      id: 2,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      posterURL: "https://i.pinimg.com/736x/1f/15/53/1f1553e5798f010f9b855ec065543015--hans-zimmer-christopher-nolan.jpg",
      rating: 8.7,
    },
    {
      id: 3,
      title: "The Prestige",
      description: "The Prestige is an intricate tale of obsession, jealousy and deception. A mysterious story of two magicians, whose intense rivalry leads them on a life-long battle for supremacy, full of obsession, deceit, and jealousy, with dangerous and deadly consequences.",
      posterURL: "https://alternativemovieposters.com/wp-content/uploads/2019/05/alberto_prestige.jpg",
      rating: 7.4,
    }
  ])


  return (
    <div className="App">
      <h1>List of Movies</h1>
      <MovieList movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;