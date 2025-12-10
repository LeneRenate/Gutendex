import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../api/axiosGutendex";
import { useFavourites } from "../context/useFavourites";
import styles from "../styles/BookDetails.module.css";

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    fetchBookById(id).then(setBook);
  }, [id]);

  if (!book) return <p className="loading">Loading...</p>;

  const bookCover = book.formats["image/jpeg"];

  const summary = book.summaries?.[0] || "No summary available";

  const ebookLink =
    book.formats["text/html"] ||
    book.formats["application/pdf"] ||
    book.formats["text/plain"];

  return (
    <section className={`flex flex-row justify-evenly ${styles.wholePage}`}>
      <div
        className={`w-1/4 flex flex-col items-center gap-y-8 ${styles.firstCol}`}
      >
        <img src={bookCover} alt={book.title} className={styles.bookCover} />

        <button
          onClick={() => toggleFavourite(book)}
          className={`w-4/5 h-12 text-center ${styles.detailBtns}`}
        >
          {isFavourite(id)
            ? "Remove from favourites 🤍"
            : "Add to favourites ❤️"}
        </button>

        {ebookLink && (
          <button className={`w-4/5 h-12 text-center ${styles.detailBtns}`}>
            <a href={ebookLink} target="_blank" rel="noopener noreferrer">
              Read / Download 📖
            </a>
          </button>
        )}
      </div>

      <div className={`w-2/3 flex flex-col gap-y-4 ${styles.secondCol}`}>
        <h1 className={styles.bdTitle}>{book.title}</h1>
        <h2 className={styles.bdAuthor}>
          by: {book.authors?.map((a) => a.name).join(", ")}
        </h2>

        <span className={styles.divider} />

        <p className={styles.plainTxt}>Downloads: {book.download_count}</p>
        <p className={styles.plainTxt}>Language: {book.languages.join(", ")}</p>

        <span className={styles.divider} />

        {book.subjects && book.subjects.length > 0 && (
          <div className={styles.subList}>
            <h4>Subjects:</h4>
            <ul className={`flex flex-row flex-wrap gap-3`}>
              {book.subjects.map((subject, index) => (
                <li key={index} className={`p-2`}>
                  🔹{subject}
                </li>
              ))}
            </ul>
          </div>
        )}

        <span className={styles.divider} />

        <article>
          <h4 className={styles.sumHeading}>Summary:</h4>
          <p className={styles.sumTxt}>{summary}</p>
        </article>
      </div>
    </section>
  );
}
