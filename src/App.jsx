import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// style
import './assets/css/style.css';

// pages
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Services from './components/pages/services';
import Contact from "./components/pages/contact";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
