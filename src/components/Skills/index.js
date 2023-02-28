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
            <h2 data-aos="fade-up" data-aos-duration="1000">Habilidades</h2>
            <div className='skills-container'  data-aos="fade-up" data-aos-duration="1200">
                <div className='skills-box orange' >
                    <img src={html}></img>
                    <h3>HTML</h3>
                </div>
                <div className='skills-box blue'>
                    <img src={css}></img>
                    <h3>CSS</h3>
                </div>
                <div className='skills-box yellow'>
                    <img src={js}></img>
                    <h3>Javascript</h3>
                </div>
                <div className='skills-box pink'>
                    <img src={sass}></img>
                    <h3>SASS</h3>
                </div>
                <div className='skills-box purple'>
                    <img src={bootstrap}></img>
                    <h3>Bootstrap</h3>
                </div>
                <div className='skills-box marin'>
                    <img src={react}></img>
                    <h3>ReactJS</h3>
                </div>
                <div className='skills-box marin'>
                    <img src={tailwind}></img>
                    <h3>Tailwind</h3>
                </div>
                <div className='skills-box gray'>
                    <img src={linux}></img>
                    <h3>Linux</h3>
                </div>
            </div>
        </section>
    )
}

export default Skills;