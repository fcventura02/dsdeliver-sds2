import "./styles.css";
import {ReactComponent as Logo} from '../../assets/img/dsdelivery_logo.svg'
function Navbar(){
    return(
        <nav className="main_navbar">
            <Logo />
            <a href="/" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;