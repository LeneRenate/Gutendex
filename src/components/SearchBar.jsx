import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SearchBar.module.css";
import { Search } from "lucide-react";

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
    <form
      className={`flex flex-row no-wrap max-w-sm w-4/10 ${styles.searchForm}`}
      onSubmit={handleSearch}
    >
      <input
        type="text"
        aria-label="Search books by title, author, theme"
        title="Search books by title, author, theme"
        className={styles.searchInput}
        placeholder="Search books by title, author, theme.."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button className={styles.searchBtn} type="submit">
        <Search />
      </button>
    </form>
  );
}
