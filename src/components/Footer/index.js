import './Footer.scss';
import { useTheme } from '../../hooks/useTheme';
import footerlinkedinBlack from '../../assets/img/linkedin-footer.png';
import footergithubBlack from '../../assets/img/github-footer.png';
import footerlinkedinWhite from '../../assets/img/linkedin-footer1.png';
import footergithubWhite from '../../assets/img/github-footer1.png';


const Footer = () => {
    const { theme } = useTheme();

    return(
        <section id='footer'>
            <div className='footer-container'>
                <div>
                    <p>© Copyright {new Date().getFullYear()} Gabriel Silveira. All rights are reserved.</p>
                </div>
                <aside>
                    <a href="https://www.linkedin.com/in/gabriel-hs/" target="_blank" rel="noreferrer">
                        <img src={theme === 'light' ? footerlinkedinBlack : footerlinkedinWhite} alt="linkedin"/>
                    </a>
                    <a href="https://github.com/akyua" target="_blank" rel="noreferrer">
                        <img src={theme === 'light' ? footergithubBlack : footergithubWhite} alt="github"/>
                    </a>
                </aside>
            </div>
        </section>
    )
}

export default Footer;