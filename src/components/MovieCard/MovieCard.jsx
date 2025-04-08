import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <div>
      <div>
        <button>Overlay</button>
      </div>
      <div>
        Movie poster
        <img src="" alt="" />
      </div>
      <div>Movie details</div>
    </div>
  );
}
