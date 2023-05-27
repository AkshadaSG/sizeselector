import React, { useState } from 'react';
import Modal from './Modal';
import "./App.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modalContainer">
      <button onClick={openModal} className="modalButton">Open Modal</button>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
