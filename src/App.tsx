import './App.css';
import Button from './components/Button/Button';

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      {/* <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert
        onCloseClicked={() => updateIsShown(false)}
        isShown={isShown}
        alertType='alert-danger'
      >
        Ceci est une alerte!
      </Alert> */}
      <Button onButtonClicked={() => console.log('clicked')}>
        Default (Primary) Button
      </Button>
      <Button
        btnType='secondary'
        onButtonClicked={() => console.log('clicked')}
      >
        Secondary Button
      </Button>
    </>
  );
}

export default App;
