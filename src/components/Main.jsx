import React, {useState, useEffect} from 'react'
import '../assets/styles/main.css'

export default function Main() {
    const [allMemes, setAllMemes] = useState({});

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function getMemeImage() {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    // Updating the text state
    function textChange(event) {
        const {name, value} = event.target;

        setMeme((prevMeme) => {
            return {...prevMeme, [name]: value}
        })
    }

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data))
    }, [])


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
