import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useMovieContext } from "../../contexts/MovieProvider";

import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const { favorites } = useMovieContext();

  if (Object.keys(favorites).length !== 0) {
    return <MovieGrid movies={favorites} />;
  } else {
    return (
      <div>
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
      </div>
    );
  }
}
