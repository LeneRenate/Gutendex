import { Link } from "react-router-dom";
import { useFavourites } from "../context/useFavourites";
import styles from "../styles/BookCard.module.css";

export default function BookCard(props) {
  const { id, image, title, authors, fullBook } = props;
  const { toggleFavourite, isFavourite } = useFavourites();

  return (
    <article className={`flex flex-col items-center ${styles.bookCard}`}>
      <Link to={`books/${id}`} className={`flex flex-col items-center`}>
        <img src={image} alt={title} className={`${styles.bcImg}`} />
        <h3 className={styles.bcTitle}>{title}</h3>
        <p className={styles.bcAuthors}>
          {authors && authors.length > 0
            ? authors.map((a) => a.name).join(" ,")
            : "Unknown author"}
        </p>
      </Link>
      <button
        onClick={() => toggleFavourite(fullBook)}
        className={styles.bcFavBtn}
      >
        {isFavourite(id) ? "Remove from favourites 🤍" : "Add to favourites ❤️"}
      </button>
    </article>
  );
}
