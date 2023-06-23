import "./services.css";
import "./category.css";
import Data from "../api/Data";
import { useState } from "react";
import { Link } from "react-router-dom";
const Services = () => {
    const [data, setdata] = useState(Data);
    return (
        <>
            <h1 className="heading">Our Services </h1>
            <div className="grid_services">
                {data.map((CV) => {
                    const { title, desc, img, id } = CV;
                    return (
                        <>
                            <div className="box" key={id}>
                                <h2>{title}</h2>
                                <p>{desc}</p>
                                <img
                                    className="img_services"
                                    src={img}
                                    alt=""
                                />
                                <Link to="/contact" target="_blank">
                                    <button className="serv_btn">
                                        Join Now
                                    </button>
                                </Link>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Services;
