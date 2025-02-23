import Navbar from "./components/Navbar/Navbar";
import Contact from '../src/components/contact/contact';
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <div>
          <BrowserRouter>
          
          <Routes>
              <Route path="/" element={<Home />} > </Route>
          </Routes>
          <Routes>
          <Route path="/contact" element={<Contact />} > </Route>
          </Routes> 
          </BrowserRouter>
           
        </div>
    )
}

export default App;
