

const Navbar = () => {
  return (
    <>
    <div className="Navbar">
      <div className="container">
        <div className="row">
          <div className="logo-div">
            <a href="/" className="logo">
              {/* <img src={logo} alt="logo" /> */}
            </a>
          </div>
          <div className="col-md-4">
            <ul className="nav">
              <li className="nav-item">
                <a href="/" className="nav-link ">
                  PRODUCTS
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  AIOT SOLUTION
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" id='news'>
                  WHAT'S NEW
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  SUPPORT
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;