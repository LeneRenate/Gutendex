import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import { FavouritesProvider } from "./context/FavouritesContext.jsx";
import App from "../src/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavouritesProvider>
      <RouterProvider router={router} />
    </FavouritesProvider>
  </StrictMode>
);
