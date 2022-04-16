import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { PokeListProvider } from "./contexts/PokeListProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <PokeListProvider>
        <App />
      </PokeListProvider>
    </ThemeProvider>
  </React.StrictMode>
);
