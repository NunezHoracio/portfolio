import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsInstagram, BsTiktok, BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";
import "./Banner.css";
import spacesuit from "../../assets/img/spacesuit-float.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="banner d-flex align-items-center pb-5" id="home">
      <Container data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 7, offset: 0 }}
            xl={{ span: 7, offset: 0 }}>
            <div className="banner-info d-flex flex-column align-items-center align-items-md-start">
              <span className="tagline">Bienvenidos a mi portfolio</span>
              <div className="presentation d-flex flex-column align-items-center align-items-md-start align-items-lg-center">
                <h1 className="banner_main-title text-center text-md-start text-lg-start">
                  Mi nombre es <span className="banner_name">Horacio</span>
                </h1>

              </div>
              <p className="banner_main-text mt-3 text-md-start text-center">
                Soy Técnico Universitario en Programación, graduado de la  UTN de Tucumán, Argentina.
              </p>
              <p className="banner_main-text text-md-start text-center">
                Me gusta mucho escuchar lo-fi hip hop, y por supuesto, no puedo empezar mi día sin una buena taza de café.
              </p>
              <p className="banner_main-text text-md-start text-center">
                Mi mayor pasión es el desarrollo web frontend. Tener la posibilidad de dar vida a través del código a elementos visuales y funcionales es algo que me fascina . Me encantaría conectarme con ustedes por eso los invito a pasar por  mis redes sociales.
              </p>
              <div className="social-media">
                <a href="https://www.youtube.com/@mocaCode/featured" target="_blank" rel="noopener noreferrer">
                  <BsYoutube className="p-2 me-3 social-media__icon" />
                </a>
                <a href="https://www.instagram.com/mocacodedev/" target="_blank" rel="noopener noreferrer">
                  <BsInstagram className="p-2 me-3 social-media__icon" />
                </a>
                <a href="https://www.tiktok.com/@mocacode" target="_blank" rel="noopener noreferrer">
                  <BsTiktok className="p-2 me-3 social-media__icon" />
                </a>
                <a href="https://github.com/NunezHoracio" target="_blank" rel="noopener noreferrer">
                  <BsGithub className="p-2 me-3 social-media__icon" />
                </a>
                <a href="https://www.linkedin.com/in/horaciorodolfonunez/" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className="p-2 social-media__icon" />
                </a>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 8, offset: 2 }}
            md={{ span: 5, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
          >
            <div className="banner-img">
              <img className="spacesuit-img" src={spacesuit} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
