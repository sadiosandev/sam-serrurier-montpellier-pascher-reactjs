// import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import AppLogo from "../../../assets/images/logo.png";

const AppHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="app-navbar">
            <Container className="app-navbar-parent-container">
                <div className="app-header-first-level">
                    <Navbar.Brand href="#home" className="app-brand" >
                        <img src={AppLogo} alt="Serrurier Montpellier" className="app-brand-img" />
                        <span className="app-name">Serrurier Montpellier</span>
                    </Navbar.Brand>
                    <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                        <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                        <span className="phone-number">06 44 96 24 01</span>
                    </Button>
                </div>
                
                <div className="other-navbar-infos-container">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="app-navbar-collapse">
                        <div className="app-navbar-container">
                            <Nav className="menu-links-container">
                                <Nav.Link className="app-navbar-link" href="#features" title="Dépannage d'urgence">Dépannage d'urgence</Nav.Link>
                                <Nav.Link className="app-navbar-link" href="#pricing">Portes blindées</Nav.Link>
                                <Nav.Link className="app-navbar-link" href="#pricing">Protection contre le vol</Nav.Link>
                                <Nav.Link className="app-navbar-link" href="#pricing">Pose Serrure</Nav.Link>
                                <Nav.Link className="app-navbar-link" href="#pricing">Remplacement de cylindre</Nav.Link>
                                <Nav.Link className="app-navbar-link" href="#pricing">Changement de serrure 3 points</Nav.Link>
                            </Nav>
                            {/* <Nav>
                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                    <span className="phone-number">06 44 96 24 01</span>
                                </Button>
                            </Nav> */}
                        </div>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default AppHeader