import React from 'react'
import  { useParams } from 'react-router-dom'
import '../css/Board.css'

function Board() {
    const params = useParams()

  function handleD() {
    document.querySelector('#panelNewBoard').style.display = 'flex'
  }

  return (
    <div id='board'>
        <form id='panelNewBoard'>
            <span><h3>Create apost</h3></span>
            <h3>Write something for your post</h3>
            <p>Subject</p>
            <input type='text' required />

            <span id='colours'>
                <input className='color1' type='radio' name='colour'/>
                <input className='color2' type='radio' name='colour'/>
                <input className='color3' type='radio' name='colour'/>
                <input className='color4' type='radio' name='colour'/>
            </span>
            <p>What's on your mind?</p>
            <input type='text' required />

            <button>Publish</button>
        </form>
        <nav>{params.name}</nav>
        <section>
            <div id='bar'>
                <h3>Your Posts</h3>
                <span id='cp' onClick={handleD}>Create new post</span>
            </div>
        </section>
    </div>
  )
}

export default Board