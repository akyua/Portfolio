import './About.css';
import foto from '../../assets/img/foto.jpg';
import download from '../../assets/img/download.png';
import curriculum from '../../assets/img/curriculum.pdf';

const About = () => {
    return (
        <section id='aboutme'>
            <div className='aboutme-container'>
                <div data-aos="fade-right" data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos-once="false">
                    <img src={foto}/>
                </div>
                <aside  data-aos="fade-right" data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos-once="false">
                    <h2>Sobre mim</h2>
                    <h3>Biguaçu, Santa Catarina</h3>
                    <p>
                        Sou um estudante de Ciência da Computação com formação técnica em Telecomunicações. Tenho interesse especial no desenvolvimento front-end, onde já utilizo tecnologias como <strong>React, VueJS, Vite, Tailwind, Bootstrap, SASS, NodeJS e Javascript</strong>. Além disso, hoje em dia utilizo <strong>Java e NodeJS</strong> em algumas aplicações. Meu objetivo é criar interfaces que sejam intuitivas, funcionais e esteticamente atraentes, sempre visando a satisfação do usuário.
                    </p>
                    <a href={curriculum} download>
                        <div>
                            <img src={download}/>
                            <p>Currículo</p>
                        </div>
                    </a>
                </aside>
            </div>
        </section>
    )
}



export default About;