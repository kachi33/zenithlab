import {Link } from 'react-router-dom';
import logo from '../imgs/logo.png';
import '../Styles/Header.css';

const Header = () => {
    return (  
        <header>
            <div className="top-contact-bar">
                <div className="container">
                    <div className='flex-contain'>
                            <Link to={''}>
                                <i className="fa-solid fa-envelope" style={{color: "#ffffff",}}></i>&nbsp;Support@zenithlab.com
                            </Link>
                            <Link to={'https://goo.gl/maps/45ZbGUjcVBWT8oJJA'} className="flex-grow">
                            <i class="fa-solid fa-location-dot" 
                            style={{color: "#ffffff",}}></i>
                            &nbsp;9th mile corner Ngwo, Enugu State,Nigeria
                            </Link>
                        <Link to={''}>Call Now: <span>+2347 778 9933</span></Link>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="nav-container">
                    <Link to={'/'}>
                        <img alt ="Zenith" src={logo}/>
                    </Link>

                    <div className="nav-links">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>Who are we</Link>
                        <Link to={'/services'}>What we've done</Link>
                        <Link to={'/contact'}>
                        <button className='btnCallToAction'> Contact us</button>
                        </Link>

                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;
