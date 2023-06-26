import { Container } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
    return (  
        <footer className="footer pt-5 pb-3">
            <Container>
                <p className="text-center">Desarrollado por <span className="footer-name">Horacio Rodolfo Nuñez</span> </p>
            </Container>
        </footer>
    );
}
 
export default Footer;