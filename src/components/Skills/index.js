import "./Skills.scss";
import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import js from "../../assets/img/js.svg";
import sass from "../../assets/img/sass.svg";
import bootstrap from "../../assets/img/bootstrap.svg";
import react from "../../assets/img/react.svg";
import tailwind from "../../assets/img/tailwindcss.svg";
import linux from "../../assets/img/linux.svg";
import java from "../../assets/img/java.svg";
import git from "../../assets/img/git.svg";
import vue from "../../assets/img/vue.svg";
import node from "../../assets/img/node.svg";
import neovim from "../../assets/img/neovim.png";
import mongodb from "../../assets/img/mongodb.png";
import typescript from "../../assets/img/typescript.png";
import express from "../../assets/img/express.png";

const Skills = () => {
  return (
    <section id="skills">
      <h2 data-aos="fade-up" data-aos-duration="1000">
        Habilidades
      </h2>
      <div
        className="skills-container"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="skills-box orange">
          <img src={html} alt="html-icon"></img>
          <h3>HTML</h3>
        </div>
        <div className="skills-box blue">
          <img src={css} alt="css-icon"></img>
          <h3>CSS</h3>
        </div>
        <div className="skills-box yellow">
          <img src={js} alt="js-icon"></img>
          <h3>Javascript</h3>
        </div>
        <div className="skills-box blue">
          <img src={typescript} alt="typescript-icon"></img>
          <h3>Typescript</h3>
        </div>
        <div className="skills-box pink">
          <img src={sass} alt="sass-icon"></img>
          <h3>SASS</h3>
        </div>
        <div className="skills-box marin">
          <img src={react} alt="react-icon"></img>
          <h3>ReactJS</h3>
        </div>
        <div className="skills-box gray">
          <img src={express} alt="express-icon"></img>
          <h3>Express.js</h3>
        </div>
        <div className="skills-box green2">
          <img src={vue} alt="vue-icon"></img>
          <h3>VueJS</h3>
        </div>
        <div className="skills-box purple">
          <img src={bootstrap} alt="bootstrap-icon"></img>
          <h3>Bootstrap</h3>
        </div>
        <div className="skills-box marin">
          <img src={tailwind} alt="tailwind-icon"></img>
          <h3>Tailwind</h3>
        </div>
        <div className="skills-box orange">
          <img src={java} alt="java-icon"></img>
          <h3>Java</h3>
        </div>
        <div className="skills-box green3">
          <img src={node} alt="node-icon"></img>
          <h3>NodeJS</h3>
        </div>
        <div className="skills-box orange">
          <img src={git} alt="git-icon"></img>
          <h3>Git</h3>
        </div>
        <div className="skills-box gray">
          <img src={linux} alt="linux-icon"></img>
          <h3>Linux</h3>
        </div>
        <div className="skills-box green">
          <img src={neovim} alt="neovim-icon"></img>
          <h3>Neovim</h3>
        </div>
        <div className="skills-box green3">
          <img src={mongodb} alt="mongodb-icon"></img>
          <h3>Mongodb</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;

