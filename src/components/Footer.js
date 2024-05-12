import logo from '../little_lemon_assets/Logo.svg'
export default function Footer(){
    return (
    <footer>
        <nav>
            <ul>
                <li><img src={logo} alt='little lemon logo'></img></li>
                <li>Copyright Little Lemon</li>
            </ul>
        </nav>
    </footer>
    );
}