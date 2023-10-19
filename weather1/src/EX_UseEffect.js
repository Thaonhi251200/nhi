import { useEffect, useState } from "react"

export default function EX_UseEffect() {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(5)
    useEffect(() => {
        setCount(count + 1)
    }, [number])

    return (
        <div>
            <h1>UseEffect</h1>
            <h3>count: {count}</h3>
            <h3>Number: {number}</h3>
            <button onClick={()=>setNumber(number+5) }>plus</button>

        </div>
    )
}