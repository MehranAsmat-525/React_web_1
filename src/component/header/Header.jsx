import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/">
                        <img src="img/logo.jpg" alt="" />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link className="menu" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="menu" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="menu" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="menu" to="/services">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className="menu" to="/movies">
                                products
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
