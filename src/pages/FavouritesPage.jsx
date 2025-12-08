import { useFavourites } from "../context/useFavourites";
import BookCard from "../components/BookCard";
import styles from "../styles/BookDisplay.module.css";

export default function FavouritesPage() {
  const { favourites } = useFavourites();

  return (
    <section className={`${styles.bookDisplay}`}>
      <h2 className={`${styles.displayHeadline}`}>Favourite Books ❤️</h2>
      <div className="flex flex-row flex-wrap">
        {favourites.length === 0 ? (
          <p>No favourite books yet. Go find some 😀</p>
        ) : (
          <ul className="flex flex-row flex-wrap justify-start">
            {favourites.map((b) => (
              <li key={b.id} className={`${styles.cardDisplay}`}>
                <BookCard
                  id={b.id}
                  image={b.formats["image/jpeg"] || "../assets/NoBookCover.png"}
                  title={b.title}
                  authors={b.authors}
                  fullBook={b}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
