import './Contacts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
    return (
        <section id='contacts'>
            <h2 data-aos="fade-right" data-aos-duration="1000">Contatos</h2>
            <div className='contact-container' data-aos="fade-right" data-aos-duration="1000">
                <a href="mailto:gabrielnovatoo@gmail.com" target='_blank'>
                    <div className='contact-content'>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        <div className='contact-info'>
                            <h3>Email</h3>
                            gabrielnovatoo@gmail.com
                        </div>
                    </div>
                </a>
                <a href="https://github.com/akyua" target='_blank'>
                    <div className='contact-content'>
                        <span><FontAwesomeIcon icon={faGithub} /></span>
                        <div className='contact-info'>
                            <h3>Github</h3>
                            <p>Akyua</p>
                        </div>
                    </div>
                </a>
                <a href="https://linkedin.com/in/gabriel-hs" target='_blank'>
                    <div className='contact-content'>
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>
                        <div className='contact-info'>
                            <h3>Linkedin</h3>
                            <p>Gabriel Henrique Silveira</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Contacts;