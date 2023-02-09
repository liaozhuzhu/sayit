import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faComment} from "@fortawesome/free-solid-svg-icons"

function Footer({handleSubmit}) {

    const footerSubmit = (e) => {
        e.preventDefault();
        let userPrompt = document.getElementById("user-input").value;
        form.reset();
        if (userPrompt === "") return;
        handleSubmit(false, userPrompt);
    }

    return (
        <section id="footer">
            <form className="form" id="form" onSubmit={footerSubmit}>
                <input type="text" name="prompt" className="form-input" autoFocus autoComplete='off' id="user-input"/>
                <button type="submit" className="form-btn"><FontAwesomeIcon icon={faComment} /></button>
            </form>
            <p className="footer-desc">SayIT! <a target="_blank" href="https://liaozhu.dev" className="link-primary footer-desc">Liao Zhu© 2023</a></p>
        </section>
    )
}

export default Footer