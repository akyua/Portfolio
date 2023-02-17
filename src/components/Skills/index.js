import './Skills.css';
import html from '../../assets/img/html.svg';
import css from '../../assets/img/css.svg';
import js from '../../assets/img/js.svg';
import sass from '../../assets/img/sass.svg';
import bootstrap from '../../assets/img/bootstrap.svg';
import react from '../../assets/img/react.svg';
import tailwind from '../../assets/img/tailwindcss.svg';
import linux from '../../assets/img/linux.svg';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Habilidades</h2>
            <div className='skills-container'>
                <div>
                    <img src={html}></img>
                    <h3>HTML</h3>
                    <span className='border'>
                    </span>
                </div>
                <div>
                    <img src={css}></img>
                    <h3>CSS</h3>
                    <span className='border'>
                    </span>
                </div>
                <div>
                    <img src={js}></img>
                    <h3>Javascript</h3>
                    <span className='border'>
                    </span>
                </div>
                <div>
                    <img src={sass}></img>
                    <h3>SASS</h3>
                    <span className='border'>
                    </span>
                </div>
                <div>
                    <img src={bootstrap}></img>
                    <h3>Bootstrap</h3>
                    <span className='border'>
                    </span>
                </div>
                <div>
                    <img src={react}></img>
                    <h3>ReactJS</h3>
                    <span className='border'>
                    </span>
                </div>
                <div>
                    <img src={tailwind}></img>
                    <h3>Tailwind</h3>
                    <span className='border'>
                    </span>
                </div>
                <div>
                    <img src={linux}></img>
                    <h3>Linux</h3>
                    <span className='border'>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Skills;