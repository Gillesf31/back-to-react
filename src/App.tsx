import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('1st useEffect');
    ref.current?.focus();
  });

  useEffect(() => {
    console.log('2nd useEffect');
    setTimeout(() => {
      document.title = 'Editing';
    }, 1000);
  });

  return (
    <>
      <input type='text' className='form-control' ref={ref} />
    </>
  );
}

export default App;
