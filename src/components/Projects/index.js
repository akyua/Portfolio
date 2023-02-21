import './Projects.css';
import darkzone from '../../assets/img/darkzone.png';
import countdown from '../../assets/img/countdown.png';
import myth from '../../assets/img/myth.png';
import secretnumber from '../../assets/img/secretnumber.png';
import todo from '../../assets/img/todo.png';
import cronos from '../../assets/img/cronos.png';

const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projetos</h2>
            <div className='projects-container'>
                <div>
                    <a href="https://github.com/akyua/DarkZone">
                        <img src={darkzone}/>
                        <div className='hide'>
                            <h3>Darkzone</h3>
                            <p>HTML, CSS, JS</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/Countdown">
                        <img src={countdown}/>
                        <div className='hide'>
                            <h3>Coutndown</h3>
                            <p>HTML, CSS, JS</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/MYTH">
                        <img src={myth}/>
                        <div className='hide'>
                            <h3>MYTH</h3>
                            <p>HTML, CSS</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/SecretNumber">
                        <img src={secretnumber}/>
                        <div className='hide'>
                            <h3>SecretNumber</h3>
                            <p>HTML, CSS, JS, API</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/ToDo">
                        <img src={todo}/>
                        <div className='hide'>
                            <h3>ToDo</h3>
                            <p>HTML, CSS, JS</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/Cronos">
                        <img src={cronos}/>
                        <div className='hide'>
                            <h3>Cronos</h3>
                            <p>JSX, ReactJS, SASS</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;