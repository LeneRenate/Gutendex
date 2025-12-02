import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";

export default function Header() {
  return (
    <header className="flex flex-col">
      {/* Top section: "logo"/pagetitle + search + favourites */}
      <div className="flex flex-row justify-around">
        {/* Logo + title */}
        <div className="flex flex-row justify-start">
          <img
            src="../assets/TextBooks_colour"
            alt="Colourful books on a shelf"
          />
          <h2>GUTENDEX</h2>
        </div>

        {/* Searchbar */}
        <SearchBar />

        {/* Favourites navigation */}
        <nav aria-label="Favourite Books">
          <Link to="/favourites">
            <img src="" alt="❤️" />
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
