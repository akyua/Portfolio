import './Projects.css';
import darkzone from '../../assets/img/darkzone.png';
import countdown from '../../assets/img/countdown.png';
import myth from '../../assets/img/myth.png';
import secretnumber from '../../assets/img/secretnumber.png';
import todo from '../../assets/img/todo.png';

const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projetos</h2>
            <div className='projects-container'>
                <div>
                    <a href="">
                        <img src={darkzone}/>
                        <div className='hide'>
                            <h3>Darkzone</h3>
                            <p>Website</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={countdown}/>
                        <div className='hide'>
                            <h3>Coutndown</h3>
                            <p>Website</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={myth}/>
                        <div className='hide'>
                            <h3>MYTH</h3>
                            <p>Website</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={secretnumber}/>
                        <div className='hide'>
                            <h3>SecretNumber</h3>
                            <p>Website</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={todo}/>
                        <div className='hide'>
                            <h3>ToDo</h3>
                            <p>Website</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={darkzone}/>
                        <div className='hide'>
                            <h3>Darkzone</h3>
                            <p>Website</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;