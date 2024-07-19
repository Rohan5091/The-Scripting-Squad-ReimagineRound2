import './App.css';
import Cards1 from './componets/Cards1/Cards1.js';
import Navbar from './componets/Navbar/Navbar.js';
import Contact from "./componets/Contact/Contact";
import MovingText from "./componets/MovingText/MovingText";
import Footer from "./componets/Footer/Footer";

function App() {
  return (
    <div className='app'>
      {/*<Navbar/>*/}
      {/* <Cards1/> */}
        <MovingText/>
        <Footer/>
        {/*<Contact/>*/}
    </div>
  )
}

export default App;
