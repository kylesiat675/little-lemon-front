import logo from '../little_lemon_assets/Logo.svg'
import { Link } from 'react-router-dom';

export default function Nav(){
    return (
    <nav>
        <ul>
            <img id="logo" src={logo} alt='little lemon logo'></img>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    );
}