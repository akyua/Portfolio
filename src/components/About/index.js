import './About.scss';
import foto from '../../assets/img/foto.jpg';
import curriculum from '../../assets/img/Portfolio.pdf';
import { useTheme } from '../../hooks/useTheme';
import downloadBlack from '../../assets/img/download.png';
import downloadWhite from '../../assets/img/download1.png';

const About = () => {
    const { theme } = useTheme();

    return (
        <section id='aboutme'>
            <div className='aboutme-container'>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false">
                    <img src={foto} alt="foto"/>
                </div>
                <aside  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false">
                    <h2>Sobre mim</h2>
                    <h3>Biguaçu, Santa Catarina</h3>
                    <p>
                        Sou um estudante de Ciência da Computação com formação técnica em Telecomunicações. Com experiência em desenvolvimento full stack, onde já utilizo tecnologias como <strong>Java, Spring Boot, JUnit, SQL Server, React, VueJS, Quasar, Bootstrap, SASS, NodeJS e Javascript</strong>. Meu objetivo é criar interfaces que sejam intuitivas, funcionais e esteticamente atraentes, juntamente com uma maior eficiência de consultas e funcionalidades, sempre visando a satisfação do usuário. 
                    </p>
                    <a href={curriculum} download>
                        <div>
                            <img src={theme === 'light' ? downloadBlack : downloadWhite} alt="download"/>
                            <p>Currículo</p>
                        </div>
                    </a>
                </aside>
            </div>
        </section>
    )
}

export default About;