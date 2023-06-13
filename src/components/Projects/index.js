import './Projects.css';
import dice from '../../assets/img/dice.png';
import countdown from '../../assets/img/countdown.png';
import rps from '../../assets/img/rps.png';
import guess from '../../assets/img/guess.png';
import secretnumber from '../../assets/img/secretnumber.png';
import todo from '../../assets/img/todo.png';
import cronos from '../../assets/img/cronos.png';
import password from '../../assets/img/password.png';

const Projects = () => {
    return (
        <section id='projects'>
            <h2 data-aos="zoom-in" data-aos-duration="1000">Projetos</h2>
            <div className='projects-container' data-aos="zoom-in" data-aos-duration="1000">
                <div>
                    <a href="https://github.com/akyua/Dice" target="_blank">
                        <img src={dice}/>
                        <div className='hide'>
                            <h3>Dice</h3>
                            <p>HTML, CSS, JS</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/Countdown" target="_blank">
                        <img src={countdown}/>
                        <div className='hide'>
                            <h3>Coutndown</h3>
                            <p>HTML, CSS, JS</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/GuessMyNumber" target="_blank">
                        <img src={guess}/>
                        <div className='hide'>
                            <h3>Guess</h3>
                            <p>HTML, CSS, Javascript</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/SecretNumber" target="_blank">
                        <img src={secretnumber}/>
                        <div className='hide'>
                            <h3>SecretNumber</h3>
                            <p>HTML, CSS, JS, API</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/ToDo" target="_blank">
                        <img src={todo}/>
                        <div className='hide'>
                            <h3>ToDo</h3>
                            <p>HTML, CSS, JS</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/Cronos" target="_blank">
                        <img src={cronos}/>
                        <div className='hide'>
                            <h3>Cronos</h3>
                            <p>JSX, ReactJS, SASS</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/RPS-Game" target="_blank">
                        <img src={rps}/>
                        <div className='hide'>
                            <h3>RockPaperScissor</h3>
                            <p>HTML, CSS, SASS, Javascript</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/akyua/Random-Password-Generator" target="_blank">
                        <img src={password}/>
                        <div className='hide'>
                            <h3>RandomPassword</h3>
                            <p>HTML, CSS, SASS, Javascript</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;