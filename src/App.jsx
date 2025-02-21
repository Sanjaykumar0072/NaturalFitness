import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// style
import './assets/css/style.css';

// pages
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Services from './components/pages/services';
import Contact from "./components/pages/contact";
import BlogPost from "./components/pages/blogPost";
import Achievements from "./components/pages/achievements";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (loading) {
        return (
            <>
                <div className="page-loader">
                    <svg className="bike" viewBox="0 0 48 30" width="48px" height="30px">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                            <g transform="translate(9.5,19)">
                                <circle className="bike__tire" r="9" strokeDasharray="56.549 56.549" />
                                <g className="bike__spokes-spin" strokeDasharray="31.416 31.416" strokeDashoffset="-23.562">
                                    <circle className="bike__spokes" r="5" />
                                    <circle className="bike__spokes" r="5" transform="rotate(180,0,0)" />
                                </g>
                            </g>
                            <g transform="translate(24,19)">
                                <g className="bike__pedals-spin" strokeDasharray="25.133 25.133" strokeDashoffset="-21.991" transform="rotate(67.5,0,0)">
                                    <circle className="bike__pedals" r="4" />
                                    <circle className="bike__pedals" r="4" transform="rotate(180,0,0)" />
                                </g>
                            </g>
                            <g transform="translate(38.5,19)">
                                <circle className="bike__tire" r="9" strokeDasharray="56.549 56.549" />
                                <g className="bike__spokes-spin" strokeDasharray="31.416 31.416" strokeDashoffset="-23.562">
                                    <circle className="bike__spokes" r="5" />
                                    <circle className="bike__spokes" r="5" transform="rotate(180,0,0)" />
                                </g>
                            </g>
                            <polyline className="bike__seat" points="14 3,18 3" strokeDasharray="5 5" />
                            <polyline className="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" strokeDasharray="79 79" />
                            <path className="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" strokeDasharray="10 10" />
                            <polyline className="bike__front" points="32.5 2,38.5 19" strokeDasharray="19 19" />
                        </g>
                    </svg>
                </div>
            </>
        )
    }

    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/achievements' element={<Achievements />} />
                    <Route path='/blog/:slug' element={<BlogPost />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
