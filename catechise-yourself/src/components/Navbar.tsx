import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>Catechise Yourself</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/westminster-shorter">Shorter Catechism</Link>
            </div>
        </nav>
    );
}

export default Navbar;
