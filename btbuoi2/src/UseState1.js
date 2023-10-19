import { useState } from "react";
export default function UseState() {
    const [count, setCount] = UseState(1)
    function handle_increase() {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>tim hieu useState</h1>
            <h2>count{count}</h2>
            <button onClick={handle_increase()}>Inscrease</button>
        </div>
    )
}