import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MovieProvider from "./contexts/MovieProvider";

function App() {
  // theme state and useeffect
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");

    // Fallback to system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const defaultTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(defaultTheme);
    document.documentElement.setAttribute("data-theme", defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // search bar state and handle function
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  function handleSearch() {
    if (!searchQuery.trim()) return;
    navigate(`search/${searchQuery}`);
  }

  return (
    <MovieProvider>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="search/:searchTerm" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
