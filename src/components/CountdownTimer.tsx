import { useState, useEffect } from "react";

import './CountdownTimer.css';

interface Props {
    time: number
}

const CountdownTimer: React.FC<Props> = ({ time }) => {
    const [timeLeft, setTimeLeft] = useState(time);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(time => time - 1);
            } else { }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const handleResetClick = () => {
        setTimeLeft(time);
    };

    return (
        <div className="timer">
            <p className="timer-text">Time Remaining: {timeLeft}</p>
            <button onClick={handleResetClick}>Reset Timer</button>
        </div>
    );
};

export default CountdownTimer;
