import styles from "./HomePage.module.css";
import { getPopularMovies } from "../../services/api";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (e) {
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  if (loading == true) {
    return <div>Loading...</div>;
  } else if (error != null) {
    return <div>{error}</div>;
  } else {
    return <MovieGrid movies={movies} title={"Popular Movies"} />;
  }
}
