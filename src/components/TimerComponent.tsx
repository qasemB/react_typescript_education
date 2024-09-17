import { useEffect, useRef, useState } from "react";

const TimerComponent = () => {
    const [time, setTime] = useState(0)

    const timeRef = useRef<number | undefined>(undefined)

    const stop = ()=>{
        clearTimeout(timeRef.current)
    }

    useEffect(() => {
        timeRef.current = setInterval(() => {
            setTime(old => old + 1)
        }, 1000)
    }, [])

    return (
        <div>
            {time}
            <button onClick={stop}>stop timer</button>
        </div>
    );
};

export default TimerComponent;