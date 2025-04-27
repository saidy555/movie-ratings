import { useParams } from "react-router";
import { searchMovies } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./SearchPage.module.css";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const searchResults = await searchMovies(params.searchTerm);
        setMovies(searchResults);
      } catch (e) {
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [params.searchTerm]);

  if (loading == true) {
    return <div>Loading...</div>;
  } else if (error != null) {
    return <div>{error}</div>;
  } else {
    return (
      <>
        <h1>Your search results for: {params.searchTerm}</h1>
        {movies.length != 0 ? (
          <MovieGrid movies={movies} />
        ) : (
          <div>No movies found </div>
        )}
      </>
    );
  }
}
