import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.css";

export default function MovieGrid({ movies }) {
  return (
    <menu>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </menu>
  );
}
