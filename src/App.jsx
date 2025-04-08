import { useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
