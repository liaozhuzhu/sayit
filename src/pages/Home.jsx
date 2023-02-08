import React from 'react'


function Home() {
  return (
    <section id="home">
        <h1 className="title-primary">SayIT</h1>
        <div className="container-grid">
            <div className="box">
                <p>"Say something!"</p>
            </div>
            <div className="box">
                <p>Does everything ChatGPT can do</p>
            </div>
            <div className="box">
                <p>"How do I say something?"</p>
            </div>
            <div className="box">
                <p>Made by Liao Zhu</p>
            </div>
            <div className="box">
                <p>"Got anything to say?"</p>
            </div>
            <div className="box">
                <p>Go start saying something...</p>
            </div>
        </div>
    </section>
  )
}

export default Home