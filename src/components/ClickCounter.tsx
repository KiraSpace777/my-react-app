// -----------------------------------------------
// 2.21.2 Підняття стану
//        (експорт ClickCounter.tsx / імпорт в App.tsx)
// -----------------------------------------------
// -- 2 --- Рішення підняти стан

interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

export function ClickCounter2({ value, onUpdate }: ClickCounterProps) {
  return <button onClick={onUpdate}>Clicked: {value}</button>;
}

// -----------------------------------------------
// 2.20.1 Локальність стану
//        (експорт ClickCounter.tsx / імпорт в App.tsx)
// -----------------------------------------------
// Стан у React завжди локальний для кожної копії компонента. Якщо ми рендеримо один і той самий компонент кілька разів – кожен екземпляр зберігає свій окремий стан.
// -----------------------------------------------

import { useState } from "react";

export function ClickCounter1() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return <button onClick={handleClick}>Clicked: {clicks}</button>;
}
