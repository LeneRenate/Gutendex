import { Link } from "react-router-dom";
import { useFavourites } from "../context/useFavourites";
import styles from "../styles/BookCard.module.css";

export default function BookCard(props) {
  const { id, image, title, authors, fullBook } = props;
  const { toggleFavourite, isFavourite } = useFavourites();

  const author =
    authors && authors.length > 0
      ? authors.map((a) => a.name).join(" ,")
      : "Unknown author";

  return (
    <article
      className={`flex flex-col items-center ${styles.bookCard}`}
      title={title}
      onClick={() => {
        console.log(`id: ${id}`);
      }}
    >
      <Link to={`../books/${id}`} className={`flex flex-col items-center`}>
        <div
          className={`flex flex-col justify-center items-center ${styles.imgWrapper}`}
        >
          <img src={image} alt={title} className={`${styles.bcImg}`} />
        </div>
        <div className="w-full flex flex-col">
          <h3 className={styles.bcTitle}>{title}</h3>
          <p className={styles.bcAuthors} title={author}>
            {author}
          </p>
        </div>
      </Link>
      <button
        onClick={() => toggleFavourite(fullBook)}
        className={styles.bcFavBtn}
      >
        {isFavourite(id) ? (
          "Remove from favourites 🤍"
        ) : (
          <>
            Add to <br /> favourites ❤️
          </>
        )}
      </button>
    </article>
  );
}
