import { useState } from "react";

export const BuscadorPeliculas = () => {
  const urlBase = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "a11a6ecf80d4f846a8c4ef626391caad";

  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setPeliculas(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Películas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe el nombre de la película"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="movie-list">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            {pelicula.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                alt={pelicula.title}
              />
            ) : (
              <div className="no-poster">Sin poster</div>
            )}
            <h2>{pelicula.title}</h2>
            <p>Estreno: {pelicula.release_date}</p>
            <p>Popularidad: {pelicula.popularity.toFixed(2)}</p>
            <p>Votos: {pelicula.vote_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
