import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

export default function BookCard(props) {
  const { id, image, title, authors, fullBook } = props;
  const { toggleFavourite, isFavourite } = useFavourites();

  return (
    <article className="bookCard">
      <Link to={`/book/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>
          {authors && authors.length > 0
            ? authors.map((a) => a.name).join(" ,")
            : "Unknown author"}
        </p>
      </Link>
      <button onClick={() => toggleFavourite(fullBook)}>
        {isFavourite(id) ? "Remove from favourites 🤍" : "Add to favourites ❤️"}
      </button>
    </article>
  );
}
