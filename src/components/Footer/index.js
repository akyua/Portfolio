import './Footer.css';
import footerlinkedin from '../../assets/img/linkedin-footer.png';
import footergithub from '../../assets/img/github-footer.png';

const Footer = () => {
    return(
        <section id='footer'>
            <div className='footer-container'>
                <div>
                    <p>Email de Contato: gabrielnovatoo@gmail.com</p>
                    <p>Feito por: Gabriel Silveira</p>
                </div>
                <aside>
                    <a href="https://www.linkedin.com/in/gabriel-hs/">
                        <img src={footerlinkedin}></img>
                    </a>
                    <a href="https://github.com/akyua">
                        <img src={footergithub}></img>
                    </a>
                </aside>
            </div>
        </section>
    )
}

export default Footer;