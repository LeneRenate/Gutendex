import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookDetailsPage from "../pages/BookDetailsPage";
import CategoryPage from "../pages/CategoryPage";
import FavouritesPage from "../pages/FavouritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>An error occured</h1>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "categories", element: <CategoryPage /> },
      { path: "books/:id", element: <BookDetailsPage /> },
      { path: "favourites", element: <FavouritesPage /> },
      { path: "*", element: <h1>404 not found</h1> },
    ],
  },
]);
