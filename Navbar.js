`use strict`

const Navbar = () =>{
 return(
    <nav className="navbar">
        <a className="navbar-brand">
            <img src='/docs/4.0/assets/brand/bootstrap-solid.svg' width='30' height='30'>Zenith Medical laboratory</img>
        </a>
        <a href='/'>Home</a>
        <a href='/About'>Who we are</a>
        <a href='/Services'>What we've done</a>
        <a href='/Contact-us'>Contact us</a>

    </nav>
  );
}
 export default Navbar;