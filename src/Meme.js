import React, {useState, useEffect} from "react";

const Meme = () => {
    
    const [meme, setMeme] = useState({
        topText:"", 
        bottomText:"", 
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]:value
            }
        })

    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
                ...prevMeme, 
                randomImage: url
        }))
    }

    return (
        <main>
            <div className="form">
                    <input 
                        className="form--input"
                        type="text" 
                        placeholder="Top text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input 
                        className="form--input"
                        type="text" 
                        placeholder="Bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme;