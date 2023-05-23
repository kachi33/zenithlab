import { Link } from 'react-router-dom';
import logo from './imgs/logo.png';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-info">
                <div className="socials">
                    <img src={logo} alt="logo"/>
                    <p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>
                </div>
                <div className="support">
                    <h4>Support</h4>
                    <ul>
                        <li><Link to={''}>Terms and conditions</Link></li>
                        <li><Link to={''}>FAQuestions</Link></li>
                        <li><Link to={''}>Privacy policy</Link></li>
                        <li><Link to={''}>Company Licence</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h4>Get In Touch</h4>
                    <p> Call us at:<br/>
                        <Link>+2347 778 9933</Link>
                    </p>
                    <p> Support avaliable Mon to Fri : 8:00am - 6pm<br/>
                        <Link>support@zenithlab.com</Link>
                    </p>
                </div>
            </div>
            <div>
                copyright @2023, designed and developed by Kachi
            </div>
        </footer>
     );
}
 
export default Footer;