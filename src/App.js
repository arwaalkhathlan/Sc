import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

import NavbarButtons from './components/navbarButtons';
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

    // 

    return (
        <>
        <div className='navbar justify-content-center'>

            <header class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">

            <Link class="navbar-brand" to="/" onClick={() => scrollToSection(home)}>logo</Link>

            

            <button 
            class="navbar-toggler" 
            className='navbar-toggler'
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => scrollToSection(home)}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={() => scrollToSection(about)}>
                                About us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hiw" onClick={() => scrollToSection(hiw)}>
                                How it works
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={() => scrollToSection(contact)}>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                    <NavbarButtons />
                </div>
                </div>
            </header>
            </div>

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
            </>
        
    );
}

export default App;
