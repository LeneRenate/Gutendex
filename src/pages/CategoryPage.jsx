import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBooks } from "../api/axiosGutendex";
import BookCard from "../components/BookCard";

export default function CategoryPage() {
  const { name } = useParams();
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchBooks({ search: name }).then((data) => {
      setBooks(data.results);
    });
  }, [name]);

  return (
    <section>
      <h2>{name} books:</h2>
      <div className="flex flex-row flex-wrap">
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  );
}
