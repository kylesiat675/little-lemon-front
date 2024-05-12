import logo from '../little_lemon_assets/littlelemonlogo.png'
import { Link } from 'react-router-dom';
export default function Footer(){
    return (
    <footer>
            <img id="footer-logo"src={logo} alt='little lemon logo'></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservation">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <ul>
                <div id="contact-information">
                    <li>555 Location St. CA, USA</li>
                    <li>{'(XXX)-XXX-XXXX'}</li>
                    <li>littlelemon@email.com</li>
                </div>
            </ul>
            <p id="copyright">COPYRIGHT BY LITTLE LEMON ©</p>
    </footer>
    );
}