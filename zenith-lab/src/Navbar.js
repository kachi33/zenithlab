import {Link } from 'react-router-dom';

const Navbar = () => {
    return (  
            <nav className="navbar">
                <Link to={'/'} className="logo">
                    <img alt ='zenith  laboratory' src=""/>
                </Link>

                <div className="links">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>Who are we</Link>
                <Link to={'/services'}>What we've done</Link>
                <Link to={'/contact'}>
                    <button className='btnCallToAction'> Contact us</button>
                    </Link>

                </div>
            </nav>
    );
}
 
export default Navbar;
