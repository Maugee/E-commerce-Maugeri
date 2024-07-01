import "./NavBar.css"
import { FaHamburger } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";
import CardWidget from './CardWidget';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    <nav className='navBar'>
        <Link to="/" className='logo'>
            <img src="https://live.pystatic.com/webassets/AppscoreWeb/global-page/0.5.6/_next/static/media/peya.bf6a4964.svg" alt="" />
        </Link>
        <ul>
            <Link to="/categoria/hamburguesa">  
                <FaHamburger size={40} color='bisque'/>
            </Link>

            <Link to="/categoria/pizza">
                <GiFullPizza size={40} color='yellow'/>
            </Link>

            <Link to="/categoria/lomitos" >
                <GiSandwich size={40} color='wheat'/>
            </Link>
        </ul>
        <CardWidget/>
    </nav>
    )
}

export default NavBar