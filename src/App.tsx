import produce from 'immer';
import { useState } from 'react';
import './App.css';

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', description: 'Description 1', fixed: false },
    { id: 2, title: 'Bug 2', description: 'Description 2', fixed: false },
    { id: 3, title: 'Bug 3', description: 'Description 3', fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce(bugs, (draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <>
      <pre>{JSON.stringify(bugs, null, 2)}</pre>
      <button onClick={handleClick}>Add 1</button>
    </>
  );
}

export default App;
