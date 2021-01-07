import "./styles.css";
import { ReactComponent as Logo } from '../../assets/img/dsdelivery_logo.svg'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="main_navbar">
            <Logo />
            <Link className="logo-text" to="/">
                DS Delivery
            </Link>
        </nav>
    )
}

export default Navbar;