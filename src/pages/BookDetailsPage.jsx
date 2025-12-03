import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../api/axiosGutendex";
import { useFavourites } from "../context/useFavourites";

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    fetchBookById(id).then(setBook);
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const ebookLink =
    book.formats["text/html"] ||
    book.formats["application/pdf"] ||
    book.formats["text/plain"];

  return (
    <section className="flex flex-row">
      <div className="flex flex-col">
        <img src={book.img} alt={book.title} />

        <button onClick={() => toggleFavourite(book)}>
          {isFavourite(id)
            ? "Remove from favourites 🤍"
            : "Add to favourites ❤️"}
        </button>

        {ebookLink && (
          <button>
            <a href={ebookLink} target="_blank" rel="noopener noreferrer">
              Read / Download
            </a>
          </button>
        )}
      </div>

      <div className="flex flex-col">
        <h1>{book.title}</h1>
        <h2>by: {book.authors?.map((a) => a.name).join(", ")}</h2>
        <p>Downloads: {book.download_count}</p>
        <p>Language: {book.languages.join(", ")}</p>

        {book.subjects && book.subjects.length > 0 && (
          <div className="flex flex-row flex-wrap">
            <h4>Subjects:</h4>
            <ul>
              {book.subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
