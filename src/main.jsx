import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/buscador.css";
import { BuscadorPeliculas } from "./BuscadorPeliculas";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BuscadorPeliculas />
  </StrictMode>
);
