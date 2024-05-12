import logo from '../little_lemon_assets/Logo.svg'

export default function Nav(){
    return (
    <nav>
        <ul>
            <li><img src={logo} alt='little lemon logo'></img></li>
            <li><a href="google.com">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/reserve">Reservation</a></li>
        </ul>
    </nav>
    );
}