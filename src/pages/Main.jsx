import React from 'react'
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function Main({userText}) {

    return (
        <div id="main">
            <div id="chat-container"></div>
            <div className="chat-box" id="user-chat-box">
                <div className="profile-icon"><FontAwesomeIcon icon={faUser} /></div>
                <p className="prompt">{userText}</p>
            </div>
        </div>
    )
}

export default Main