import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// styles.css is at repo ROOT, so import with one level up
import "../styles.css";

createRoot(document.getElementById("root")).render(<App />);
