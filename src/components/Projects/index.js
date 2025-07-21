import './Projects.scss';
import samu from '../../assets/img/samu.png';
import hermes from '../../assets/img/hermes.png';
import kirin from '../../assets/img/kirin.png';
import studano from '../../assets/img/studano.png';
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
                        <a href="https://github.com/akyua" target='_blank'>
                            <img className='contain' src={samu}></img>
                        </a>
                    </div>
                    <div className="project-info">
                        <h3>SAMU</h3>
                        <p>
                        Projeto sendo desenvolvido para participação da licitação como novo software/crm que será utilizado pelo samu de Santa Catarina.
                        Fui responsável pelo desenvolvimento das telas, modais e rotas.
                        </p>
                        <div className="project-technologies">
                            <p>VueJS</p>
                            <p>Javascript</p>
                            <p>Mariadb</p>
                            <p>Java</p>
                        </div>
                        <div className="project-links">
                            <span>Código Privado <FontAwesomeIcon icon={faGithub} /></span>
                            <span>Site Privado <FontAwesomeIcon icon={faExternalLink} /></span>
                        </div>
                    </div>
                </div>
                <div className='project-individual'>
                    <div className="project-info">
                        <h3>Studano</h3>
                        <p>Um aplicativo mobile para android, focado na melhoria de rotinas para estudantes. O aplicativo conta com sistema pomodoro, lista de materias, opção de idioma, graficos e histórico de atividades e notificações pre-definidas pelo estudante.</p>
                        <div className="project-technologies">
                            <p>React Native</p>
                            <p>Typescript</p>
                            <p>Realm</p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/akyua/studano" target='_blank'>Código <FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://github.com/akyua/studano/releases/latest" target='_blank'>Site do APK <FontAwesomeIcon icon={faExternalLink} /></a>
                        </div>
                    </div>
                    <div className='project-image'>
                        <a href="https://github.com/akyua/studano" target='_blank'>
                            <img className='contain' src={studano}></img>
                        </a>
                    </div>
                </div>
                <div className='project-individual'>
                    <div className='project-image'>
                        <a href="https://github.com/akyua/kirin-app" target='_blank'>
                            <img  src={kirin}></img>
                        </a>
                    </div>
                    <div className="project-info">
                        <h3>Anime Kirin</h3>
                        <p>Site focado em listagem de Animes, junto com todo um sistema de login, categorização de genero, sistema de buscas e sua propria listagem de animes, por fim, haverá um sistema de rankeamemnto das notas dos animes dadas pelos usuários do site.</p>
                        <div className="project-technologies">
                            <p>VueJS</p>
                            <p>Javascript</p>
                            <p>SASS</p>
                            <p>NODEJS</p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/akyua/kirin-app" target='_blank'>Código <FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://github.com/akyua/kirin-app/" target='_blank'>Site <FontAwesomeIcon icon={faExternalLink} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;