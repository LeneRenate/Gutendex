import { useFavourites } from "../context/useFavourites";
import BookCard from "../components/BookCard";

export default function FavouritesPage() {
  const { favourites } = useFavourites;

  return (
    <section>
      <h2>Favourite Books ❤️</h2>
      <div className="flex flex-row flex-wrap">
        {favourites.length === 0 ? (
          <p>No favourite books yet. Go find some 😀</p>
        ) : (
          favourites.map((b) => <BookCard key={b.id} book={b} />)
        )}
      </div>
    </section>
  );
}
