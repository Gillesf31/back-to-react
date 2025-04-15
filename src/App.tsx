import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2']);

  return (
    <>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart onClear={() => setCartItems([])} cartItems={cartItems} />
    </>
  );
}

export default App;
