import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/axiosGutendex";
import BookCard from "../components/BookCard";

export default function CategoryPage() {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!category) return;

    axios
      .get(`${BASE_URL}?topic=${category}`)
      .then((res) => setBooks(res.data.results))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <section>
      <h2>{category} books:</h2>
      <div className="flex flex-row flex-wrap">
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  );
}
