import { createContext, useContext, useEffect, useState } from "react";

export const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (book) => {
    setFavourites((prev) =>
      prev.some((b) => b.id === book.id) ? prev : [...prev, book]
    );
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((b) => b.id !== id));
  };

  const isFavourite = (id) => favourites.some((b) => b.id === id);

  const toggleFavourite = (book) => {
    if (isFavourite(book.id)) {
      removeFromFavourites(book.id);
    } else {
      addToFavourites(book);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
