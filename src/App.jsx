import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { List } from './components/List'
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Первый элемент' },
    { id: 2, text: 'Второй элемент' }
  ]);
  const [inputText, setInputText] = useState('')
  const inputRef = useRef(null);

  const handleRename = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: `!!!${item.text}` } : item
      )
    );
  };

  const handleAdd = () => {
    if (inputText.trim()) {
      const newItem = {
        id: uuidv4(), 
        text: inputText
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setInputText('');
    }
  };

  return <>
    <List items={items} onRename={handleRename} />

    <div style={{ marginTop: '20px' }}>
        <input
          ref={inputRef} 
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()} // Отслеживаем Enter
          placeholder="Новый элемент..."
        />
        <button onClick={handleAdd} style={{ marginLeft: '10px' }}>
          Добавить
        </button>
      </div>

       <div style={{ marginTop: '20px' }}>
        <button onClick={() => inputRef.current.focus()}>
          Вернуть фокус на поле ввода
        </button>
      </div>
  </>
}

export default App
