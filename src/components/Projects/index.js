import './Projects.css';
import dice from '../../assets/img/dice.png';
import countdown from '../../assets/img/countdown.png';
import rps from '../../assets/img/rps.png';
import guess from '../../assets/img/guess.png';
import secretnumber from '../../assets/img/secretnumber.png';
import todo from '../../assets/img/todo.png';
import cronos from '../../assets/img/cronos.png';
import password from '../../assets/img/password.png';
import lotus from "../../assets/img/lotus.png";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <section id='projects'>
            <h2 data-aos="zoom-in" data-aos-duration="1000">Projetos</h2>
            <div className='projects-container' data-aos="zoom-in" data-aos-duration="1000">
                <div className='project-individual'>
                    <div className='project-image'>
                        <a href="https://lotus-akyua.vercel.app/" target='_blank'>
                            <img src={lotus}></img>
                        </a>
                    </div>
                    <div className="project-info">
                        <h3>Lotus</h3>
                        <p>
                        Lotus é um projeto de portfólio/mostruário de vídeos dinâmico que simula o YouTube/Twitch, com filtros interativos de navegação, modo escuro e opção de adicionar vídeos dentro do mostruário.
                        </p>
                        <div className="project-technologies">
                            <p>React</p>
                            <p>NextJS</p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/akyua/Lotus" target='_blank'>Código <FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://lotus-akyua.vercel.app/" target='_blank'>Site <FontAwesomeIcon icon={faExternalLink} /></a>
                        </div>
                    </div>
                </div>
                <div className='project-individual'>
                    <div className="project-info">
                        <h3>Secret Number</h3>
                        <p>Mini-jogo web em que os jogadores usam o microfone para adivinhar o número secreto, exclusivamente suportado no Google Chrome. Esse jogo interativo, totalmente em inglês, demonstra meu conhecimento com consumo de API's e páginas interativas.</p>
                        <div className="project-technologies">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                            <p>API Web Speech</p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/akyua/SecretNumber" target='_blank'>Código <FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://secret-number-opal.vercel.app" target='_blank'>Site <FontAwesomeIcon icon={faExternalLink} /></a>
                        </div>
                    </div>
                    <div className='project-image'>
                        <a href="https://secret-number-opal.vercel.app" target='_blank'>
                            <img src={secretnumber}></img>
                        </a>
                    </div>
                </div>
                <div className='project-individual'>
                    <div className='project-image'>
                        <a href="https://cronos-akyua.vercel.app/" target='_blank'>
                            <img  src={cronos}></img>
                        </a>
                    </div>
                    <div className="project-info">
                        <h3>Cronos</h3>
                        <p>Desenvolvi um projeto web de cronômetro Pomodoro para auxiliar no foco, oferecendo controle sobre os períodos de trabalho e descanso. As configurações personalizáveis permitem ajustar os valores de tempo de acordo com suas preferências.</p>
                        <div className="project-technologies">
                            <p>Javascript</p>
                            <p>React</p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/akyua/Cronos" target='_blank'>Código <FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://cronos-akyua.vercel.app/" target='_blank'>Site <FontAwesomeIcon icon={faExternalLink} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;