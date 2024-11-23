

import Footer from "./componenst/Footer/Footer";
import Navbar from "./componenst/Navbar/Navbar";
import "./css/main.css"
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

import { BrowserRouter as Router,Routes,  Route  } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/project" element={<Project/>}/>
             <Route path="/contact" element={<Contact/>}/>
          </Routes> 
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
