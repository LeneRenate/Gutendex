import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import styles from "../styles/Header.module.css";
import bookIcon from "../assets/TextBooks_colours.png";
import heartIcon from "../assets/Heart.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={`${styles.wholeHeader} flex flex-col`}>
      {/* Top section: "logo"/pagetitle + search + favourites */}
      <div
        className={`${styles.topSection} flex flex-row justify-around items-center`}
      >
        {/* Logo + title */}
        <div
          className={`${styles.logo} flex flex-row justify-start items-end`}
          onClick={() => navigate("/Gutendex/")}
        >
          <img
            className={styles.headIcon}
            src={bookIcon}
            alt="Colourful books on a shelf"
          />
          <h2 className={styles.title}>GUTENDEX</h2>
        </div>

        {/* Searchbar */}
        <SearchBar />

        {/* Favourites navigation */}
        <nav aria-label="Favourite Books">
          <Link
            to="/Gutendex/favourites"
            className={`${styles.favBtn} flex flex-row items-end`}
          >
            <img src={heartIcon} alt="❤️" className={styles.favIcon} />
            <p className={`text-center ${styles.favText}`}>
              My favourite books
            </p>
          </Link>
        </nav>
      </div>

      {/* Category navigation */}
      <nav aria-label="Book Categories">
        <CategoryList />
      </nav>
    </header>
  );
}
