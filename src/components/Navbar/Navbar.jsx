import { Link } from "react-router";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar({
  searchQuery,
  setSearchQuery,
  handleSearch,
  theme,
  toggleTheme,
}) {
  const [disabled, setDisabled] = useState(false);
  return (
    <nav id={styles.navbar}>
      <Link to="/">
        <svg
          className={styles.logo}
          viewBox="0 0 64 64"
          fill="var(--revbackground)"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* {film strip} */}
          <rect
            x="4"
            y="12"
            width="56"
            height="40"
            rx="4"
            ry="4"
            fill="var(--revsecondary)"
            stroke="var(--revprimary)"
            strokeWidth="2"
          />
          <rect x="8" y="16" width="4" height="4" fill="#var(--revprimary)" />
          <rect x="8" y="24" width="4" height="4" fill="#var(--revprimary)" />
          <rect x="8" y="32" width="4" height="4" fill="#var(--revprimary)" />
          <rect x="8" y="40" width="4" height="4" fill="#var(--revprimary)" />
          <rect x="52" y="16" width="4" height="4" fill="#var(--revprimary)" />
          <rect x="52" y="24" width="4" height="4" fill="#var(--revprimary)" />
          <rect x="52" y="32" width="4" height="4" fill="#var(--revprimary)" />
          <rect x="52" y="40" width="4" height="4" fill="#var(--revprimary)" />

          {/* {star} */}
          <polygon
            points="32,20 35,28 44,28 36.5,33.5 39,42 32,36.5 25,42 27.5,33.5 20,28 29,28"
            fill="var(--revaccent))"
            stroke="var(--revtext)"
            strokeWidth="1"
          />
        </svg>
      </Link>
      <form
        id={styles.search_bar}
        onSubmit={(event) => {
          event.preventDefault();
          setDisabled(true);
          handleSearch();
          setSearchQuery("");
          setDisabled(false);
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          disabled={disabled}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
        <button type="submit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#f4f8fb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="17" y1="17" x2="22" y2="22" />
          </svg>
        </button>
      </form>
      <menu className={styles.pages}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="favorites">Favorites</Link>
        </li>
      </menu>
      <button id={styles.darkmode_bttn} onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}
