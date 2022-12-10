import memeIcon from './troll-face.png';

const Header = () => {
    return (
        <header>
            <img className='header--icon' src={memeIcon} alt=""/>
            <h2 className='header--title'>Meme Generator</h2>
            <h2 className='header--project'>React Course - Project 3</h2>
        </header>
    )
}

export default Header;