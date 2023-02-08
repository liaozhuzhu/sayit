import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


function Main() {
  return (
    <div>
        <h1>SayIT</h1>
        <form>
            <textarea name="prompt" rows="1" cols="1" placeholder="Just Say IT!"/>
            <button type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
        </form>
    </div>
  )
}

export default Main