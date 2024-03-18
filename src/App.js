import './App.css';
import React, { useState } from 'react';
import { Ask } from './Ask';
import { Success } from './Success';

function App() {

  const [showComponentA, setShowComponentA] = useState(true);

  const handleButtonClick = () => {
    setShowComponentA(!showComponentA);
  };

  return (
    <div className="App">
      {showComponentA ? (
        <Ask onClick={handleButtonClick} />
      ) : (
        <Success />
      )}
    </div>
  );
}

export default App;
