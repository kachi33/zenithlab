'use strict'

const Navbar = () =>{
  return(
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand">
              <img src='/imgs/favicon.ico' width='30' height='30'/>Zenith Medical laboratory
          </a>
          {/* <button></button> */}
          <a href='/' className='text-white nav-link'>Home</a>
          <a href='/About' className='text-white nav-link'>Who we are</a>
          <a href='/Services' className='text-white nav-link'>What we've done</a>
          <a href='/Contact-us' className='text-white nav-link'>Contact us</a>
  
      </nav>
     </div>
   );
 }

const App = () => {
  return (
    <Navbar/>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
