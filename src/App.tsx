import { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({
    firstName: 'Gilles',
    lastName: 'Ferrand',
  });

  return (
    <>
      <p>
        {person.firstName} {person.lastName}
      </p>
    </>
  );
}

export default App;
