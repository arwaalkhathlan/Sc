
import React ,{ useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const ProfileHeader = () => {
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
        <header className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={() => scrollToSection(home)}>
            <img src={logo} alt="logo" width="120" height="100" className="d-inline-block align-text-top" />
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={() => scrollToSection(home)}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={() => scrollToSection(about)}>
                        About us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={() => scrollToSection(hiw)}>
                        How it works
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={() => scrollToSection(contact)}>
                        Contact us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact" onClick={() => scrollToSection(contact)}>
                       Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cont" onClick={() => scrollToSection(contact)}>
                        Logout
                    </Link>
                </li>
            </ul>
           
        </div>
    </div>
    </header>


     );
}

export default ProfileHeader;