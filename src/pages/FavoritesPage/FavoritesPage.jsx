import { useContext } from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { MovieContext } from "../../contexts/MovieProvider";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const { favorites } = useContext(MovieContext);
  if (favorites) {
    return <MovieGrid movies={favorites} />;
  } else {
    return <div>No movies have been favorited</div>;
  }
}
