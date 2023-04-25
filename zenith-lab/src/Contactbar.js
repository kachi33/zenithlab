import { Link } from "react-router-dom";

const Contactbar = () => {
    return ( 
        <div className="contact-bar">
            <Link to={''}>Support@zenithlab.com</Link>
            <Link to={'https://goo.gl/maps/45ZbGUjcVBWT8oJJA'} className="address"> 9th mile corner Ngwo, Enugu State,Nigeria.</Link>
            <Link to={''}>Call Now: +2347 778 9933</Link>
        </div>
     );
}
 
export default Contactbar;
