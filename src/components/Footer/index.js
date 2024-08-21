import './Footer.scss';
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
                    <a href="https://www.linkedin.com/in/gabriel-hs/" target="_blank" rel="noreferrer">
                        <img src={footerlinkedin} alt="linkedin"></img>
                    </a>
                    <a href="https://github.com/akyua" target="_blank" rel="noreferrer">
                        <img src={footergithub} alt="github"></img>
                    </a>
                </aside>
            </div>
        </section>
    )
}

export default Footer;