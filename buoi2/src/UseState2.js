import { useState } from "react"
export default function UseState2() {
    const [Change, setChange] = useState(5)
    function handle_increase() {
        setChange(Change + 5)
    }
    console.log("render useState2")
    return (
        <div>
            <h2>Change: {Change}</h2>
            <button onClick={handle_increase}> Change</button>
        </div>)

}