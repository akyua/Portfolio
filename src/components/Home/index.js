import './Home.scss';
import linkedin from '../../assets/img/linkedin.png';
import github from '../../assets/img/github.png';
import Lottie from "lottie-react";
import animation from "./animation.json";

/* const style = {
    height: "1000px",
    width: "1000px",
} */

const Home = () => {
    return (
        <section id="home">
            <div className="home-container" data-aos="fade-down" data-aos-duration="1000">
                <div className="home-description">
                    <h1>Gabriel Silveira</h1>
                    <p id="text-animation">Desenvolvedor Full Stack</p>
                    <nav className='button'>
                        <a href="https://www.linkedin.com/in/gabriel-hs/" target="_blank" rel="noreferrer" className="image-link">
                            <div className='button-link'>
                                <img src={linkedin} alt="linkedin"/>
                                <p>Linkedin</p>
                            </div>
                        </a>
                        <a href="https://github.com/akyua" target="_blank" rel="noreferrer" className="image-link">
                            <div className='button-link'>
                                <img src={github} alt="github"/>
                                <p>Github</p>
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