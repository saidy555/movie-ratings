import styles from "./MovieCard.module.css";
import { MovieContext } from "../../contexts/MovieProvider";
import { useContext } from "react";

export default function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useContext(MovieContext);
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div>
      <div>
        <button onClick={onFavoriteClick}>♥</button>
      </div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
