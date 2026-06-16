// Файл main.tsx відповідає за запуск рендеру додатка "App".

// ----------------------------------------------
// --------- 2.9.1 - Рендер додатка в DOM
// ----------------------------------------------
// document.getElementById("root") – ми отримуємо посилання на DOM-елемент з index.html, у який React вставить розмітку. Це той самий <div id="root"></div> у HTML.
// ReactDOM.createRoot(container) – створює "React-корінь" для рендерингу.
// .render(element) – запускає рендер компонента App і всіх вкладених у нього компонентів.
// У типовому проєкті використовується один виклик render(), щоб рендерити весь інтерфейс, починаючи з App.
// -------------------------
// <React.StrictMode>, для чого він потрібен:
// -----------------------------
// Попереджає про застарілі або небезпечні API.
// Допомагає виявити нечисті побічні ефекти.
// У режимі розробки дублює деякі виклики, щоб перевірити стабільність компонента.
// Показує попередження у консолі, якщо знайдено проблеми.
// ----------------------------------------------
// Підсумок
// ----------------------------------------------
// Файл main.tsx відповідає за запуск рендеру вашого додатка.
// createRoot().render() вставляє React-компоненти у DOM.
// Обгорніть App у <React.StrictMode>, щоб отримати підказки та перевірки під час розробки.
// Усе рендериться в елемент <div id="root"></div> в файлі index.html.
// ----------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// ----------------------------------------------
// --------- 2.4.1 - Компоненти -----------------
// ----------------------------------------------

// import { createRoot } from "react-dom/client";
// import App from "./components/App";
// import "./index.css";

// createRoot(document.getElementById("root") as HTMLElement).render(<App />);

// ------------------------------------------------
// --------- Workbook notes 2.3.2 coding ----------
// ------------------------------------------------

// import { createRoot } from "react-dom/client";

// const techName = "React";
// const imgUrl =
//   "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=640";

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <>
//     <h1>Welcome to {techName}</h1>
//     <p>
//       This is JSX — it looks like HTML, but it's not quite the same. It has its
//       // own rules! JSX (JavaScript XML) is a special syntax in React that
//       allows // you to write HTML-like markup directly in JavaScript or
//       TypeScript files. // Instead of creating a separate .html file, in React
//       you describe the // interface directly in the code, using JSX.
//     </p>
//     <img src={imgUrl} alt="Man, field and a mountain" width="640" />
//   </>,
// );

// ----------------------------------------------
// --------- Workbook notes 2.3.1 coding ----------
// ----------------------------------------------

// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <div>
//     <h1>Welcome to React</h1>
//     <p>
//       This is JSX — it looks like HTML, but it's not quite the same. It has its
//       own rules! JSX (JavaScript XML) is a special syntax in React that allows
//       you to write HTML-like markup directly in JavaScript or TypeScript files.
//       Instead of creating a separate .html file, in React you describe the
//       interface directly in the code, using JSX.
//     </p>
//   </div>,
// );

// ----------------------------------------------
// --------- "ZERO"/installation CODE -----------
// ----------------------------------------------

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./components/App.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
