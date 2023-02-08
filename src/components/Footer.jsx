import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faComment} from "@fortawesome/free-solid-svg-icons"

function Footer({handleSubmit}) {

    const footerSubmit = (e) => {
        e.preventDefault();
        handleSubmit(false);
    }

    return (
        <section id="footer">
            <form className="form" id="form" onSubmit={footerSubmit}>
                <input type="text" name="prompt" className="form-input" autoFocus autoComplete='off'/>
                <button type="submit" className="form-btn"><FontAwesomeIcon icon={faComment} /></button>
            </form>
            <a target="_blank" href="https://liaozhu.dev" className="link-primary">Liao Zhu© 2023</a>
        </section>
    )
}

export default Footer