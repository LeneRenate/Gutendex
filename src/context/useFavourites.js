import { useContext } from "react";
import { FavouritesContext } from "./FavouritesContext";

export const useFavourites = () => useContext(FavouritesContext);
