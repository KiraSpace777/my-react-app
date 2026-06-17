/* ---------------------------------------------- */
/* ---- 2.15.1 - Обробка подій / Інлайн-функції
/* ---------------------------------------------- */
// 1. Додаємо функцію обробки кліку всередину компонента App перед return
/* 2. Передаємо функцію у властивість onClick для кожної кнопки <Button onClick={handleClick} /> */
/* ---------------------------------------------- */

import Product from "./Product";
import Button from "./Button";

export default function App() {
  return (
    <>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />

      {/* Кастомні кнопки, вони не реагують на кліки 2.13*/}
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />

      {/* Інлайн-функція для цієї кнопки що реагує на кліки 2.15*/}
      <button onClick={() => console.log("Clicked!")}>Click me!</button>
    </>
  );
}
/* ---------------------------------------------- */
/* ---- 2.15.1 - Обробка подій / Обробка кліку
/* ---------------------------------------------- */
// 1. Додаємо функцію обробки кліку всередину компонента App перед return
/* 2. Передаємо функцію у властивість onClick для кожної кнопки <Button onClick={handleClick} /> */
/* ---------------------------------------------- */

// import Product from "./Product";
// import Button from "./Button";

// export default function App() {
//   const handleClick = () => {
//     console.log("I'm a button!");
//   };

//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />

//       <Button variant="primary" text="Login" />
//       <Button variant="secondary" text="Follow" />

//       <button onClick={handleClick}>Click me!</button>
//     </>
//   );
// }

/* ---------------------------------------------- */
/* ---- 2.13.3 Повторне використання стилів / Використання
/* ---------------------------------------------- */
// import Product from "./Product";
// import Button from "./Button";

// export default function App() {

//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//       <Button variant="primary" text="Login" />
//       <Button variant="secondary" text="Follow" />
//     </>
//   );
// }

// ----------------------------------------------
// 2.5.3 - Властивості компонента/ Декілька props
// ----------------------------------------------
// При використанні компонента Product передаємо значення решти пропсів з Product.tsx
// ----------------------------------------------
// import Product from "./Product";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//     </>
//   );
// }

// ----------------------------------------------
// 2.5.2 - Властивості компонента/Передача значень props
// ----------------------------------------------
// import Product from "./Product";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product name="Tacos With Lime" />
//       <Product name="Fries and Burger" />
//     </>
//   );
// }
// ----------------------------------------------
// --------- 2.4.2 - Компоненти / Імпорт компонента
// ----------------------------------------------

// import Product from "./Product";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>

//       <Product />
//       <Product />
//       <Product />
//     </>
//   );
// }

// ----------------------------------------------
// --------- 2.4.1 - Компоненти -----------------
// ----------------------------------------------
// Важливі правила
//
// Компонент – це функція, яка повертає JSX.
// Ім’я компонента має починатися з великої літери, пишуться у PascalCase.
// Компонент використовують у JSX як тег, наприклад: <Product />.
// У TypeScript файл з компонентом має бути з розширенням .tsx.
// ----------------------------------------------

// function Product() {
//   return (
//     <div>
//       <h2>Cookies</h2>
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </>
//   );
// }

// ----------------------------------------------
// --------- "ZERO"/installation CODE -----------
// ----------------------------------------------
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
