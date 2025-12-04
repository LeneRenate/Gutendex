import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBooksByCategory } from "../api/axiosGutendex";
import BookCard from "../components/BookCard";
import { capitalize } from "../utils/capitalize";

export default function CategoryPage() {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!category) return;

    fetchBooksByCategory(category)
      .then((res) => setBooks(res))
      .catch((err) => console.log(err));
  }, [category]);

  const catName = capitalize(category);
  const numberOfBooks = books.length;

  return (
    <section>
      <h2>
        {catName} books ({numberOfBooks})
      </h2>
      <div className="flex flex-row flex-wrap">
        {books.map((b) => (
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
    </section>
  );
}
