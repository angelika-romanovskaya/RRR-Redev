import { useCallback, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { v4 as uuidv4 } from "uuid";
import { CounterButton } from './components/CounterButton'
import { SearchInput } from './components/SearchInput'
import { ItemList } from './components/ItemList'

const DATA_SET = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  text: `Элемент #${index + 1}`
}));

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

   const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <CounterButton count={count} onIncrement={handleIncrement} />
      <SearchInput value={searchTerm} onChange={handleSearchChange} />
      <h3>Список (Всего: {DATA_SET.length})</h3>
      <ItemList items={DATA_SET} searchTerm={searchTerm} />
    </div>
  )
}

export default App
