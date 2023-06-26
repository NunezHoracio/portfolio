import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Projects.css";
import project1 from "../../assets/img/project-img1.png";
import planet from "../../assets/img/planet.webp";
import { BsGithub, BsGlobe2 } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="projects pt-5 pb-5" id="projects">
      <Container>
        <h3 className="subtitle text-center mb-2">Proyectos</h3>
        <p className="text-center info">
          Quiero compartir con ustedes algunos de los proyectos en los que he trabajado. Estoy emocionado de mostrarles mi trabajo y cómo he aplicado mis habilidades de desarrollo frontend.
        </p>
        <div
          className="cards-container d-flex justify-content-around flex-wrap pt-5 mt-3"
        >
          <Card style={{ width: "18rem" }} className="mb-5" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
            <Card.Img variant="top" src={project1} />
            <Card.Body className="card-info">
              <Card.Title className="card-title">Proyecto 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="buttons-container d-flex justify-content-around">
                <BsGithub className="p-1 card-link_button" />
                <BsGlobe2 className="p-1 card-link_button" />
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mb-5" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
            <Card.Img variant="top" src={project1} />
            <Card.Body className="card-info">
              <Card.Title className="card-title">Proyecto 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="buttons-container d-flex justify-content-around">
                <BsGithub className="p-1 card-link_button" />
                <BsGlobe2 className="p-1 card-link_button" />
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mb-5" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
            <Card.Img variant="top" src={project1} />
            <Card.Body className="card-info">
              <Card.Title className="card-title">Proyecto 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="buttons-container d-flex justify-content-around">
                <BsGithub className="p-1 card-link_button" />
                <BsGlobe2 className="p-1 card-link_button" />
              </div>
            </Card.Body>
          </Card>
        </div>
        <img src={planet} alt="planeta" className="img-planet_project" />
      </Container>
    </section>
  );
};

export default Projects;
