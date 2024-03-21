import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

export const Ask = ({ onClick }) => {

    const [position, setPosition] = useState({ left: '50%', top: '86.5%' });

    var [count, setCount] = useState(0);

    const handleHover = () => {
        // You can adjust the new position as needed
        var x = Math.random() * 90;
        var y = Math.random() * 90;
        const newPosition = { left: x + '%', top: y + '%' };
        setPosition(newPosition);
        if (count % 5 == 3) {
            sendMail();
        }
        console.log(count);
        setCount(count + 1);
    };

    const sendMail = () => {
       let from = "V"
       let msg = "No"
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
        <div className='ask-page'><div className="hey">
            Hey Vaishnavi!
        </div>
            <div className="gif-container">
                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Cute animated illustration" />
            </div>
            <div className="ask-out">
                Will you go out with me?
            </div>
            <div className="buttons">
                <span className="yes"><button onClick={onClick}>YES</button></span>

            </div>
            <div className="no-button"
                style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    left: position.left,
                    top: position.top,
                }}
                onMouseOver={handleHover}
                onClick={handleHover}>
                <span className="no"><button>No</button></span>
            </div></div>
    )
}
