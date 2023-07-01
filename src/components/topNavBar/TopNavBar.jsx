import { useState } from "react";
import logo from "../../assets/img/logo.png";
import "./TopNavBar.css";
import Modal from "react-bootstrap/Modal";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ContactForm from "../contactForm/ContactForm";

const TopNavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [activeLink, setActiveLink] = useState("home");

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>Envíame un mensaje</Modal.Title>
                </Modal.Header>
                <ContactForm handleClose={handleClose} />
            </Modal>

            <Navbar expand="lg" fixed='top' className="ps-5 pe-5">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="text-start">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link
                                href="#home"
                                className={activeLink === "home" ? "active" : ""}
                                onClick={() => onUpdateActiveLink("home")}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={activeLink === "skills" ? "active" : ""}
                                onClick={() => onUpdateActiveLink("skills")}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={activeLink === "projects" ? "active" : ""}
                                onClick={() => onUpdateActiveLink("projects")}
                            >
                                Proyectos
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <button className="navbar-button" onClick={handleShow}>
                                <span className="titulo">Contáctame</span>
                            </button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default TopNavBar;
