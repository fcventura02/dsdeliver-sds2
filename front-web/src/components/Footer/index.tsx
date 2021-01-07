import "./styles.css";
import { ReactComponent as Youtube } from '../../assets/img/Youtube.svg'
import { ReactComponent as Linkedin } from '../../assets/img/Linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/img/Instagram.svg'

function Footer() {
    return (
        <footer className="main_footer">
            <p>
                App desenvolvido durante a 2ª ed. do evento Semana DevSuperior | Desenvolvido por
                 <a target="_new" href="https://corujadev.tk/"> DevVentura</a>
            </p>
            <div className="footer_icons">
                <a target="_new" href="https://www.youtube.com/devsuperior">
                    <Youtube />
                </a>
                <a target="_new" href="https://www.linkedin.com/in/fcventura02/">
                    <Linkedin />
                </a>
                <a target="_new" href="https://www.instagram.com/fc_ventura/">
                    <Instagram />
                </a>
            </div>
        </footer>
    )
}
export default Footer;