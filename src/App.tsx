import { useState } from 'react';
import './App.css';
import ListGroup from './components/ListGroup/ListGroup';

function App() {
  const [isShown, updateIsShown] = useState(false);
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
      {/* <Alert
        onCloseClicked={() => updateIsShown(false)}
        isShown={isShown}
        alertType='alert-danger'
      >
        Ceci est une alerte!
      </Alert>
      <Button onButtonClicked={() => updateIsShown(true)} btnType='btn-danger'>
        Texte du bouton
      </Button> */}
    </>
  );
}

export default App;
