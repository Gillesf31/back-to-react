import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  console.warn('Component mounted (ngOnInit equivalent)');

  useEffect(() => {
    console.log('Component mounted (ngOnInit equivalent)');
  }, []);

  const [isVisible, setVisibility] = useState(false);
  let counter = 0;

  const handleClick = () => {
    setVisibility(!isVisible);
    console.log(isVisible);
  };

  return (
    <>
      <Button onButtonClicked={handleClick}>Test</Button>
      {isVisible && <div>isVisible: {isVisible.toString()}</div>}
      <div>Counter: {counter}</div>
    </>
  );
}

export default App;
