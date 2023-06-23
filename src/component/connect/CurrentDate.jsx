import { useState, useEffect } from "react";
import "./date.css"
function CurrentDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formattedDate = currentDate.toLocaleDateString();

    return (
        <div>
            <p className="date_current">{formattedDate}</p>
        </div>
    );
}

export default CurrentDate;
