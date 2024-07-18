import './App.css';
import Cards1 from './componets/Cards1/Cards1.js';
import Navbar from './componets/Navbar/Navbar.js';
import Contact from "./componets/Contact/Contact";

function App() {
  return (
    <div className='app'>
      <Navbar/>
      {/* <Cards1/> */}
        <Contact/>
    </div>
  )
}

export default App;
