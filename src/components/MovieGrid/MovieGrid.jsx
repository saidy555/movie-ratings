import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.css";

export default function MovieGrid({ movies, title }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <menu className={styles.grid}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </menu>
    </>
  );
}
