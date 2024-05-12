import logo from '../little_lemon_assets/Logo.svg'

export default function Nav(){
    return (
    <nav>
        <ul>
            <img src={logo} alt='little lemon logo'></img>
            <li><a href="google.com">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
    );
}