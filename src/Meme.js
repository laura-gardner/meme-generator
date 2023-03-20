import React, {useState} from "react";
import memesData from './memesData.js'




const Meme = () => {
    
    const [meme, setMeme] = useState({
        topText:"", 
        bottomText:"", 
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState({memesData})
    
    const getMemeImage = () => {
        const memeArray = allMemeImages.memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
                ...prevMeme, 
                randomImage: url
        }))
    }

    return (
        <main className="meme">
            <div className="meme--form">
                    <input 
                        className="meme--input"
                        type="text" 
                        placeholder="Top text"
                    />
                    <input 
                        className="meme--input"
                        type="text" 
                        placeholder="Bottom text"
                    />
                <button 
                    className="meme--button"
                    onClick={getMemeImage}
                >Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} alt="" className="meme--image"/>
        </main>
    )
}

export default Meme;