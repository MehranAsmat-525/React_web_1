import CurrentDate from "../connect/CurrentDate";
import "./footer.css";
const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <p className="footer-text">
                    Created by Mehran. All rights reserved.
                </p>
                <CurrentDate />
            </footer>
        </>
    );
};

export default Footer;
