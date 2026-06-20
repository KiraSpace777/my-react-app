import Product from "./Product";
import { useState } from "react";
import { ClickCounter1, ClickCounter2 } from "./ClickCounter";

interface Values {
  x: number;
  y: number;
}

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // 2.17.2  Використовуємо setClicks для зміни стану clicks
    setClicks(clicks + 1);
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  // 2.23.1 Оновлення обʼєктів
  const [values1, setValues1] = useState<Values>({ x: 0, y: 0 });

  const updateX = () => {
    setValues1({
      ...values1,
      x: values1.x + 1,
    });
  };

  const updateY = () => {
    setValues1({
      ...values1,
      y: values1.y + 1,
    });
  };

  // 2.23.2. Оновлення обʼєктів / Універсальна функція оновлення
  const [values2, setValues2] = useState<Values>({ x: 0, y: 0 });

  const updateValue = (key: keyof Values) => {
    setValues2({
      ...values2,
      [key]: values2[key] + 1,
    });
  };

  return (
    <>
      <h1>Best selling</h1>
      <Product
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        name="Fries and Burger"
        price={14.29}
      />
      <h3>2.20.1 --- Локальність стану</h3>
      <p>Експорт ClickCounter1.jsx / імпорт в App.tsx</p>
      <p>
        Стан у React завжди локальний для кожної копії компонента. Якщо ми
        рендеримо один і той самий компонент кілька разів – кожен екземпляр
        зберігає свій окремий стан.
      </p>
      <ClickCounter1 />
      <ClickCounter1 />
      <h3>2.21.2 --- Підняття стану</h3>
      <p>Експорт ClickCounter2.jsx / імпорт в App.tsx</p>
      <p>
        Іноді компоненти мають спільні дані, які мають бути синхронізованими.
        Наприклад, два або більше компонентів ClickCounter, які мають показувати
        одну і ту саму кількість кліків. У такому випадку стан потрібно
        зберігати в їхньому спільному батьківському компоненті – і передавати
        через пропси. Це називається підняттям стану
      </p>
      <ClickCounter2 value={clicks} onUpdate={handleClick} />
      <ClickCounter2 value={clicks} onUpdate={handleClick} />
      <h3>2.22. Декілька станів</h3>
      <p>
        Кожен стан працює незалежно. Зміна count не впливає на isOpen, і
        навпаки. Це дозволяє створювати прості, зрозумілі компоненти навіть з
        кількома логіками всередині.
      </p>
      <button onClick={toggleMessage}>
        {isOpen ? "Hide message" : "Show message"}
      </button>
      {isOpen && <p>🎉 Surprise! You toggled me.</p>}
      <h3>2.23.1 Оновлення обʼєктів</h3>
      <p>
        Стан компонента може містити будь-який тип даних, у тому числі об'єкти.
        Наприклад, збережемо координати x та y в одному об'єкті. Стан у React –
        тільки для читання. Якщо змінити його напряму, React не помітить змін і
        не оновить інтерфейс. Не можна змінювати об'єкт напряму! Завжди
        створюйте новий об’єкт і використовуйте оператор spread (...) для
        оновлення стану через setValues. Інакше ви випадково видалите інші поля,
        наприклад, y.
      </p>
      <p>
        x: {values1.x}, y: {values1.y}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>

      <h3>2.23.2. Оновлення обʼєктів / Універсальна функція оновлення</h3>
      <p>
        Якщо потрібно однотипно оновлювати кілька полів об'єкта, не обов'язково
        створювати окрему функцію для кожного поля (updateX, updateY тощо).
        Можна зробити одну універсальну функцію, яка приймає ключ поля, яке
        потрібно змінити.
      </p>
      <p>
        x: {values2.x}, y: {values2.y}
      </p>
      <button onClick={() => updateValue("x")}>Update x</button>
      <button onClick={() => updateValue("y")}>Update y</button>

      <h4>
        💡 Пам'ятайте! Ви пишете JSX → React створює віртуальний DOM → Порівнює
        його зі старим → Вносить тільки потрібні зміни в справжній DOM.
      </h4>
    </>
  );
}
