import './Footer.css';
import footerlinkedin from '../../assets/img/linkedin-footer.png';
import footergithub from '../../assets/img/github-footer.png';

const Footer = () => {
    return(
        <section id='footer'>
            <div className='footer-container' data-aos="fade-right" data-aos-duration="500">
                <div>
                    <p>Email de Contato: gabrielnovatoo@gmail.com</p>
                    <p>Feito por: Gabriel Silveira</p>
                </div>
                <aside>
                    <a href="https://www.linkedin.com/in/gabriel-hs/" target="_blank">
                        <img src={footerlinkedin}></img>
                    </a>
                    <a href="https://github.com/akyua" target="_blank">
                        <img src={footergithub}></img>
                    </a>
                </aside>
            </div>
        </section>
    )
}

export default Footer;