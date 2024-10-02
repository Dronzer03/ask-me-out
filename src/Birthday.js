import React from 'react'
import './Success.css';

export const Birthday = ({ onClick }) => {
    return (
        <div class="container">
            <div >
                <h1 class = "header_text_bday">Heyyy V!!</h1>
            </div>
            <div class="gif_container">
                <img src="https://media.giphy.com/media/j2BT5dABIt1OzGff6X/giphy.gif" alt="Cute animated illustration" />
                <img src="https://media.giphy.com/media/wosPKyYAOkULvZ1cuf/giphy.gif" alt="Cute animated illustration" />
            </div>
            <div className="buttons">
                <span className="continue"><button onClick={onClick}>Continue</button></span>

            </div>
        </div>
    )
}
