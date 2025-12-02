import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchBooks } from "../api/axiosGutendex";
import BookCard from "../components/BookCard";

export default function SearchResultsPage() {
  const [results, setResults] = useState();
  const [params] = useSearchParams();
  const query = params.get("query");

  useEffect(() => {
    fetchBooks({ search: query }).then((data) => setResults(data.results));
  }, [query]);

  return (
    <section>
      <h2>Search results:</h2>
      <div className="flex flex-row flex-wrap">
        {results.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  );
}
