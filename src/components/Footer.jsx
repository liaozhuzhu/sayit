import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faComment} from "@fortawesome/free-solid-svg-icons"

function Footer() {

    // handle the form submission and show the main page
    const handleSubmit = (e) => {
        //prevent the default action of the form
        e.preventDefault();
        document.getElementById("main").style.display="block";
        document.getElementById("home").style.display="none";
    }

    return (
        <section id="footer">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="prompt" className="form-input" autoFocus autoComplete='off'/>
                <button type="submit" className="form-btn"><FontAwesomeIcon icon={faComment} /></button>
            </form>
            <a target="_blank" href="https://liaozhu.dev" className="link-primary">Liao Zhu© 2023</a>
        </section>
    )
}

export default Footer