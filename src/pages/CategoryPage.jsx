import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchBooks, fetchFromUrl } from "../api/axiosGutendex";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";
import { capitalize } from "../utils/capitalize";

export default function CategoryPage() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [apiResponse, setApiResponse] = useState(null);

  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    if (!category) return;
    fetchBooks({ topic: category, page }).then(setApiResponse);
  }, [category, page]);

  const goToPage = (url) => {
    const urlParams = new URL(url).searchParams;
    const newPage = urlParams.get("page") || 1;
    setSearchParams({ page: newPage });
    fetchFromUrl(url).then(setApiResponse);
  };

  if (!apiResponse) return <p className="loading">Loading...</p>;

  return (
    <>
      <section>
        <h2>
          {capitalize(category)} books ({apiResponse.count}):
        </h2>
        <ul className="flex flex-row flex-wrap">
          {apiResponse.results.map((b) => (
            <li>
              <BookCard
                key={b.id}
                id={b.id}
                image={b.formats["image/jpeg"] || "../assets/NoBookCover.png"}
                title={b.title}
                authors={b.authors}
                fullBook={b}
              />
            </li>
          ))}
        </ul>
      </section>
      <Pagination
        previous={apiResponse.previous}
        next={apiResponse.next}
        currentPage={page}
        onPageChange={goToPage}
      />
    </>
  );
}
