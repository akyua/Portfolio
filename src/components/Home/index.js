import './Home.scss';
import Lottie from "lottie-react";
import animation from "./animation.json";

import { useTheme } from '../../hooks/useTheme';
import linkedinBlack from '../../assets/img/linkedin.png';
import githubBlack from '../../assets/img/github.png';
import linkedinWhite from '../../assets/img/linkedin1.png';
import githubWhite from '../../assets/img/github1.png';


const Home = () => {
    const { theme } = useTheme();

    return (
        <section id="home">
            <div className="home-container" data-aos="fade-down" data-aos-duration="1000">
                <div className="home-description">
                    <h1>Gabriel Silveira</h1>
                    <p className='text'>Desenvolvedor Full Stack</p>
                    <nav className='button'>
                        <a href="https://www.linkedin.com/in/gabriel-hs/" target="_blank" rel="noreferrer" className="image-link">
                            <div className='button-link'>
                                <img src={theme === 'light' ? linkedinBlack : linkedinWhite} alt="linkedin"/>
                                <p className='text'>Linkedin</p>
                            </div>
                        </a>
                        <a href="https://github.com/akyua" target="_blank" rel="noreferrer" className="image-link">
                            <div className='button-link'>
                                <img src={theme === 'light' ? githubBlack : githubWhite} alt="github"/>
                                <p className='text'>Github</p>
                            </div>
                        </a>
                    </nav>
                </div>
                <div className='container-animation'>
                    <Lottie animationData={animation}/>
                </div>
            </div>  
        </section>
    );
}

export default Home;