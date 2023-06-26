import { useState } from "react";
import logo from "../../assets/img/logo.png";
import "./TopNavBar.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Envíame un mensaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="cancel-button" onClick={handleClose}>
                        <span className="titulo">Cancelar</span>
                    </button>
                    <button className="navbar-button" onClick={handleClose}>
                        <span className="titulo">Enviar</span>
                    </button>
                </Modal.Footer>
            </Modal>
            <Navbar expand="lg" fixed='top'>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="text-start">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
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