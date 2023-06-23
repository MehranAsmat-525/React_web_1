import { Link } from "react-router-dom";
import "./herosection.css";
const Herosection = (props) => {
    const { title, img, btn, desc, link } = props;
    return (
        <>
            <div className="container_herosection">
                <div className="left">
                    <h1 className="heading_herosection">{title}</h1>
                    <p className="para_hero">{desc}</p>
                    <Link to={link} target="_blank">
                        <button>{btn}</button>
                    </Link>
                </div>
                <div className="right">
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default Herosection;
