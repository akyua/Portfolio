import './About.css';
import foto from '../../assets/img/foto.png';
import download from '../../assets/img/download.png';
import curriculum from '../../assets/img/curriculum.pdf';

const About = () => {
    return (
        <section id='aboutme'>
            <div className='aboutme-container'>
                <div>
                    <img src={foto}/>
                </div>
                <aside>
                    <h2>Sobre mim</h2>
                    <h3>Florianópolis, Santa Catarina</h3>
                    <p>Me formei em técnico de Telecomunicações pelo IFSC, em 2021. Atualmente estou graduando em Ciência da Computação pela Estácio. Estudo diariamente a parte de front-end desde a metade de 2022, fiz alguns cursos, mas atualmente priorizo o desenvolvimento de projetos, utilizando REACT, SASS, TailwindCSS. </p>
                    <a href={curriculum}>
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