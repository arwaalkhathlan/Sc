import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/index.css';

import HomeSection from './pages/homeSection';
import AboutSection from './pages/aboutSection';
import ContactUs from './pages/contactUs';
import HiwSection from './pages/hiwSection';

function App() {
    const home = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);
    const hiw = useRef(null);

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li >
                        <Link className="nav-link" to="/" onClick={() => scrollToSection(home)}>
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-link" to="/about" onClick={() => scrollToSection(about)}>
                            About us
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-link" to="/hiw" onClick={() => scrollToSection(hiw)}>
                            How it works
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-link" to="/contact" onClick={() => scrollToSection(contact)}>
                            Contact us
                        </Link>
                    </li>
                </ul>
            </nav>

            <div ref={home}>
                <HomeSection />
            </div>

            <div ref={about}>
                <AboutSection />
            </div>

            <div ref={hiw}>
                <HiwSection />
            </div>

            <div ref={contact}>
                <ContactUs />
            </div>
        </div>
    );
}

export default App;
