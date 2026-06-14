// ----------------------------------------------
// --------- "ZERO"/install CODE ----------------
// ----------------------------------------------
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// --------- Workbook notes 3.1 coding ----------
// ----------------------------------------------

// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <div>
//     <h1>Welcome to React</h1>
//     <p>
//       This is JSX — it looks like HTML, but it's not quite the same. It has its own rules!
//     </p>
//     <p>
//       JSX (JavaScript XML) is a special syntax in React that allows you to write HTML-like markup directly in JavaScript or TypeScript files. Instead of creating a separate .html file, in React you describe the interface directly in the code, using JSX.
//     </p>
//   </div>,
// );
