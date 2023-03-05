`use strict`

const Navbar = () =>{
    return(
        <nav className="navbar">
            <a>
                <img src='/imgs/favicon.ico'/>Zenith Medical laboratory
            </a>
            <a href='/'>Home</a>
            <a href='/About'>Who we are</a>
            <a href='/Services' >What we've done</a>
            <a href='/Contact-us' >Contact us</a>
    
        </nav>
     );
   }
  
 export default Navbar;