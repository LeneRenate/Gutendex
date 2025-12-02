import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import { FavouritesProvider } from "./context/FavouritesContext.jsx";
import App from "../src/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </RouterProvider>
  </StrictMode>
);
