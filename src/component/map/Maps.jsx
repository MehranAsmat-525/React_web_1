import "./map.css";
const Maps = () => {
    return (
        <>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.0707968086563!2d73.06067187426483!3d33.57751104265086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9369c223da7f%3A0xa69202fe0256feee!2sMilitary%20College%20of%20Signals%2C%20NUST!5e0!3m2!1sen!2s!4v1685163888585!5m2!1sen!2s"
                    width="90%"
                    height="400"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
};

export default Maps;
