import logo from "../../Images/logo.png"
import image1 from "../../Images/image1.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="Navbar">
  
          <div className="logo-div">
            <a href="/" className="logo">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="div2">
            <a href="/" className="logo">
              <img src={image1} alt="logo" />
            </a>
          </div>

          <div className="div3">
            <a href="/" className="logo">
               <button>Shop</button>
            </a>
          </div>

        </div>
    </>
  );
};

export default Navbar;