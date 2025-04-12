import './App.css';
import Like from './components/Like/Like';

function App() {
  return (
    <>
      {/* <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
      <Alert
        onCloseClicked={() => updateIsShown(false)}
        isShown={isShown}
        alertType='alert-danger'
      >
        Ceci est une alerte!
      </Alert>
      <Button onButtonClicked={() => console.log('clicked')}>
        Default (Primary) Button
      </Button>
      <Button
        btnType='secondary'
        onButtonClicked={() => console.log('clicked')}
      >
        Secondary Button
      </Button> */}
      <Like onClick={() => console.log('clicked')} />
      <Like liked={true} onClick={() => console.log('clicked')} />
      <Like liked={false} onClick={() => console.log('clicked')} />
    </>
  );
}

export default App;
