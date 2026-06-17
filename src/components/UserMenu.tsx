/* ---------------------------------------------- */
/* ------ 2.14.1 Бібліотека React Icons --------- */
/* ---------------------------------------------- */
// https://react-icons.github.io/react-icons/
//
// Щоб додати бібліотеку до свого проєкту, скористайтесь командою:
// npm install react-icons
//
// Для використання іконок потрібно лише імпортувати потрібний компонент та додати його в JSX. Наприклад, на веб-сайті React Icons є зручний графічний інтерфейс, де можна вибрати іконку та скопіювати необхідний код.
/* ---------------------------------------------- */

import { HiUser } from "react-icons/hi";
import css from "./UserMenu.module.css";

interface UserMenuProps {
  name: string;
}

export default function UserMenu({ name }: UserMenuProps) {
  return (
    <div>
      <HiUser className={css.icon} size={24} /> {name}
    </div>
  );
}
