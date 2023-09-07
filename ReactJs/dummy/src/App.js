
import './App.css';
import FirstComponent from './components/FirstComponents'
import { useState } from 'react';
function App() {

  const [modalOpen, setModalOpen] = useState(true);

  const modalCloseHandler = () => {
    setModalOpen(false);
  }

  return (
    <div className="App">
      <h1>Hii How are you ??</h1>
      {modalOpen?<FirstComponent  owner="Manish" demo="Application" closeModal = {modalCloseHandler} />:null}
      
      {/* <FirstComponent  owner="Ravi" demo="Testing"/> */}
    </div>
  );
}

export default App;
