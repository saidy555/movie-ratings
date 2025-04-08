import { Link } from "react-router";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <Link>Logo</Link>
      <form action="">
        <input type="text" name="" id="" />
        <button type="submit"></button>
      </form>
      <menu>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="favorites">Favorites</Link>
        </li>
      </menu>
    </nav>
  );
}
