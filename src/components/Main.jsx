import React, {useState} from 'react'
import Data from '../memesData'
import '../assets/styles/main.css'

export default function Main() {
    const [allMemeImages, setAllMemeImages] = useState(Data.data.memes)

    // colocando a primeira imagem pra ser a primeira do BD
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const getMemeImage = () => {
        // finds a random index
        const randomIndex = Math.floor(Math.random() * Data.data.memes.length);

        // assigns it to variable memeUrl
        const memeUrl = Data.data.memes[randomIndex].url;
        console.log(memeUrl)

        setMeme((prevMeme) => {
            return {...prevMeme, randomImage: memeUrl}
        })
        console.log(meme.randomImage)
    }

    // Updating the text state
    function textChange(event) {
        const {name, value} = event.target;

        setMeme((prevMeme) => {
            return {...prevMeme, [name]: value}
        })
    }

    console.log(meme)

    return (
        <main>
            <div className='form'>
                <input type="text" name="topText" onChange={textChange} />
                <input type="text" name="bottomText" onChange={textChange} />
                <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
                <div id='meme-generated'>
                    <img src={meme.randomImage} className='meme-image' />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}
