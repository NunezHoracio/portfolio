import { useEffect } from "react";
import "./Skills.css";
import SkillItem from "../skillItem/SkillItem";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaGithub } from "react-icons/fa";
import { Container } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="skills d-flex flex-column align-items-center pt-5"
      id="skills"
    >
      <Container>
        <h3 className="subtitle text-center mb-2">Skills</h3>
        <p className="text-center info">
        Estas son solo algunas de las habilidades y tecnologías que he adquirido y perfeccionado en mi viaje como desarrollador frontend. Mi pasión por el aprendizaje continuo me impulsa a mantenerme actualizado con las últimas tendencias y herramientas del mundo del desarrollo web.
        </p>
        <p className="text-center mb-5 info">
        Aquí podrás apreciar algunas tecnologías que he usado en el desarrollo de diferentes proyectos.
        </p>
        <div className="skills-container d-flex justify-content-around flex-wrap"  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
          <SkillItem name={"HTML"}  time={"3s"}>
            <FaHtml5 className="skill-logo"/>
          </SkillItem>
          <SkillItem name={"CSS"} time={"2s"}>
            <FaCss3Alt className="skill-logo" />
          </SkillItem>
          <SkillItem name={"Javascript"} time={"4s"}>
            <FaJsSquare className="skill-logo" />
          </SkillItem>
          <SkillItem name={"Bootstrap"} time={"3.5s"}>
            <FaBootstrap className="skill-logo" />
          </SkillItem>
          <SkillItem name={"React JS"} time={"2.5s"}>
            <FaReact className="skill-logo" />
          </SkillItem>
          <SkillItem name={"Github"} time={"1.5s"}>
            <FaGithub className="skill-logo" />
          </SkillItem>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
