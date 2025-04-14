import { useState } from 'react';
import './App.css';

function App() {
  const [drink, setDrink] = useState({
    title: 'Canadiano',
    price: 5,
  });

  const handleClick = () => {
    setDrink({
      ...drink,
      price: drink.price + 1,
    });
  };

  return (
    <>
      <p>
        {drink.title} {drink.price}
      </p>
      <button onClick={handleClick}>Add 1</button>
    </>
  );
}

export default App;
