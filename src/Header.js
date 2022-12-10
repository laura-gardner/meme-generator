import memeIcon from './3-2-troll-face-meme-png.png';

const Header = () => {
    return (
        <nav>
            <img className='meme-icon' src={memeIcon} alt=""/>
            <h1>Meme Generator</h1>
            <h2>React Course - Project 3</h2>
        </nav>
    )
}

export default Header;