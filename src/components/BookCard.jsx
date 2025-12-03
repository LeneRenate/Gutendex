import { Link } from "react-router-dom";
import { useFavourites } from "../context/useFavourites";

export default function BookCard(book) {
  const { toggleFavourite, isFavourite } = useFavourites();

  const bookCover = book.formats["image/jpeg"];

  return (
    <article className="bookCard">
      <Link to={`book/${book.id}`}>
        <img src={bookCover} alt={book.title} />
        <h3>{book.title}</h3>
        <p>
          {book.authors && book.authors.length > 0
            ? book.authors.map((a) => a.name).join(" ,")
            : "Unknown author"}
        </p>
      </Link>
      <button onClick={() => toggleFavourite(book)}>
        {isFavourite(book.id)
          ? "Remove from favourites 🤍"
          : "Add to favourites ❤️"}
      </button>
    </article>
  );
}
