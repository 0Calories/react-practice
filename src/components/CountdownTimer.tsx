import { useState, useEffect } from "react";

import './CountdownTimer.css';

const DEFAULT_TIME = 10

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(time => time - 1);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const handleResetClick = () => {
        setTimeLeft(DEFAULT_TIME);
    };

    return (
        <div className="timer">
            <p className="timer-text">Time Remaining: {timeLeft}</p>
            <button onClick={handleResetClick}>Reset Timer</button>
        </div>
    );
};

export default CountdownTimer;
