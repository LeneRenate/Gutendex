import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <input
        className={styles.searchInput}
        placeholder="Search books by title, author, theme.."
        value={query}
      />
      <button className={styles.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
}
