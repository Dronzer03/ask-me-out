import './App.css';
import React, { useState } from 'react';
import { Ask } from './Ask';
import { Success } from './Success';
import { Birthday } from './Birthday'
import emailjs from "@emailjs/browser";

function App() {

  const [showComponentA, setShowComponentA] = useState(true);
  const [showComponentB, setShowComponentB] = useState(true);

  const handleButtonClick = () => {
    sendMail();
    setShowComponentB(false);
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

 const showAsk = () => {
  setShowComponentA(false);
 }

 return (
  <div className="App">
    {showComponentA ? (
      <Birthday onClick={showAsk} />
    ) : showComponentB ? (
      <Ask onClick={handleButtonClick} />
    ) : (
      <Success />
    )}
  </div>
);
}

export default App;
