import { useEffect, useState } from "react"

export default function EX_UseEffect() {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(5)
    useEffect(() => {
        setCount(count + 1)
    }, [number,])
    return (
        <div>
            <h1>useEffect</h1>
            <h2>count: {count}</h2>
            <h2>Number: {number}</h2>
            <button onClick={()=>setNumber(number +5)}>button</button>

        </div>
    )
}