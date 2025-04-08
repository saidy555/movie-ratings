import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <div>
      <div>
        <button>Overlay</button>
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
