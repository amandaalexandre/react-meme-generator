import React from 'react'
import '../assets/styles/main.css'
import meme from '../assets/images/memeimg.png'

export default function Main() {
    

    return (
        <main>
            <input type="text" />
            <input type="text" />
            <button type="submit">Get a new meme image 🖼️</button>
            <div className='meme-generated'>
                <img src={meme}/>
            </div>
            
        </main>
    )
}
