import { useState, useEffect } from "react";

import './CountdownTimer.css';

interface Props {
    time: Timer
}

const CountdownTimer: React.FC<Props> = ({ time }) => {
    const [timeLeft, setTimeLeft] = useState(time);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                return;
            }

            const newTime = { ...timeLeft };
            newTime.seconds -= 1;

            if (newTime.seconds === -1) {
                newTime.minutes -= 1;
                newTime.seconds = 59;
            }

            if (newTime.minutes === -1) {
                newTime.hours -= 1;
                newTime.minutes = 59;
            }

            setTimeLeft(newTime);

        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const handleResetClick = () => {
        setTimeLeft(time);
    };

    return (
        <div className="timer">
            <p className="timer-text">Time Remaining: {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</p>
            <button onClick={handleResetClick}>Reset Timer</button>
        </div>
    );
};

export default CountdownTimer;
