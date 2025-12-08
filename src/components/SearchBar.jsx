import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search is pressed");
    if (query.trim()) {
      navigate(`search?query=${encodeURIComponent(query.trim())}`);
      console.log("query = true");
      setQuery("");
    } else {
      console.log("query = false");
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search books by title, author, theme.."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button className={styles.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
}
