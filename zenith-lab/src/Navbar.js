import {Link } from 'react-router-dom';

const Navbar = () => {
    return (  
            <nav className="navbar">
                <Link to={'/'} className="logo">
                    <img alt ='logo' src=""/>
                    Zenith Medical Laboratory
                </Link>

                <div className="links">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>Who are we</Link>
                <Link to={'/services'}>What we've done</Link>
                <Link to={'/contact'}>Contact us</Link>

                </div>
            </nav>
    );
}
 
export default Navbar;
