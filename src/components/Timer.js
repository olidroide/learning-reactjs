import {useState} from "react";

const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    const refreshTime = () => (
        setCurrentTime(new Date().toLocaleTimeString())
    )
    setInterval(refreshTime, 1000);

    return (
        <p>{currentTime}</p>
    )
}


export default Timer;