import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
    return (
        <section id='contacts'>
            <h2 data-aos="fade-right" data-aos-duration="1000">Contact</h2>
            <div className='contact-container' data-aos="fade-right" data-aos-duration="1000">
                <div className='contact-content'>
                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    <div className='contact-info'>
                        <h3>Email</h3>
                        <a href="mailto:gabrielnovatoo@gmail.com" target='_blank'>gabrielnovatoo@gmail.com</a>
                    </div>
                </div>
                <div className='contact-content'>
                    <span><FontAwesomeIcon icon={faGithub} /></span>
                    <div className='contact-info'>
                        <h3>Github</h3>
                        <a href="https://github.com/akyua" target='_blank'>Akyua</a>
                    </div>
                </div>
                <div className='contact-content'>
                    <span><FontAwesomeIcon icon={faLinkedin} /></span>
                    <div className='contact-info'>
                        <h3>Linkedin</h3>
                        <a href="https://linkedin.com/in/gabriel-hs" target='_blank'>Gabriel Henrique Silveira</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;