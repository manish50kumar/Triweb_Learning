
import './App.css';
import FirstComponent from './components/FirstComponents'
import { useState } from 'react';
function App() {

  const [modalOpen, setModalOpen] = useState(true);

  const modalCloseHandler = () => {
    setModalOpen(false);
  }

  const modalOpenHandler = () => {
    setModalOpen(true);
  }

  return (
    <div className="App">
      <h1>Hii How are you ??</h1>
      {modalOpen?<FirstComponent  owner="Manish" demo="Application" closeModal = {modalCloseHandler} />:null}
      
      {/* <FirstComponent  owner="Ravi" demo="Testing"/> */}
      <button onClick={modalOpenHandler}>Open Modal</button>
    </div>
  );
}

export default App;
