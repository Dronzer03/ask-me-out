import './App.css';
import React, { useState } from 'react';
import { Ask } from './Ask';
import { Success } from './Success';
import emailjs from "@emailjs/browser";

function App() {

  const [showComponentA, setShowComponentA] = useState(true);

  const handleButtonClick = () => {
    sendMail();
    setShowComponentA(!showComponentA);
  };

  const sendMail = () => {
    let from = "V"
    let msg = "Yes"
     var temp = {
       from,
       msg,
     };
     emailjs
     .send(
      "service_85ihk17",
      "template_om1c19q",
      temp,
      "uYtVuOB79qkbl5eiq"
    )
       .then((res) => {
         console.log(res);
       })
       .catch((err) => {
         console.log(err);
     });
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
