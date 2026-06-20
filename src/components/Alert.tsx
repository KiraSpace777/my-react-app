/* ----------------------------------------------
/* 2.11.1 - Композиція класів / CSS-модулі
/* ----------------------------------------------
Створимо CSS-модуль для стилізації компонента в Alert.module.css 
та імпортуємо в Alert.tsx:
-------------------------
css.alert – базовий стиль (використовується завжди)
Якщо передано type="success", додасться клас css.success
Якщо type="error" – буде css.error
Якщо type не передано – буде лише базовий стиль
/* ----------------------------------------------*/

import clsx from "clsx";
import css from "./Alert.module.css";

interface AlertProps {
  type?: "success" | "error";
}

export default function Alert({ type }: AlertProps) {
  return (
    <p className={clsx(css.alert, type && css[type])}>
      This is a default alert text
    </p>
  );
}
