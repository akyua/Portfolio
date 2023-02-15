import './Home.css';
import linkedin from '../../assets/img/linkedin.png';
import github from '../../assets/img/github.png';

const Home = () => {
    return (
        <section id="home">
            <div className="home-container">
                <h1>Gabriel Silveira</h1>
                <p>Desenvolvedor Front-end</p>
                <nav className='button'>
                    <a href="https://www.linkedin.com/in/gabriel-hs/" className="image-link">
                        <div className='button-link'>
                            <img src={linkedin} />
                            <p>Linkedin</p>
                        </div>
                    </a>
                    <a href="https://github.com/akyua" className="image-link">
                        <div className='button-link'>
                            <img src={github} />
                            <p>Github</p>
                        </div>
                    </a>
                </nav>
            </div>
        </section>
    );
    
}

export default Home;