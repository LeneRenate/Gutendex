import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import { fetchBooks, fetchFromUrl } from "../api/axiosGutendex";
import Pagination from "../components/Pagination";

export default function SearchResultsPage() {
  const [apiResponse, setApiResponse] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");
  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    fetchBooks({ search: query, page }).then(setApiResponse);
  }, [query, page]);

  const goToPage = (url) => {
    const urlParams = new URL(url).searchParams;
    const newPage = urlParams.get("page") || 1;
    setSearchParams({ query, page: newPage });
    fetchFromUrl(url).then(setApiResponse);
  };

  if (!apiResponse) return <p className="loading">Loading...</p>;

  return (
    <section>
      <h2>
        Search results for "{query}" ({apiResponse.count}):
      </h2>
      <div className="flex flex-row flex-wrap">
        {apiResponse.results.map((b) => (
          <BookCard
            key={b.id}
            id={b.id}
            image={b.formats["image/jpeg"] || "../assets/NoBookCover.png"}
            title={b.title}
            authors={b.authors}
            fullBook={b}
          />
        ))}
      </div>
      <Pagination
        previous={apiResponse.previous}
        next={apiResponse.next}
        currentPage={page}
        onPageChange={goToPage}
      />
    </section>
  );
}
