import './Footer.css';
import footerlinkedin from '../../assets/img/linkedin-footer.png';
import footergithub from '../../assets/img/github-footer.png';

const Footer = () => {
    return(
        <section id='footer'>
            <div className='footer-container'>
                <div>
                    <p>© Copyright 2023 Gabriel Silveira. All rights are reserved.</p>
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