// useState giup quan ly trang thai cua componest thuoc Hook
import { useState } from "react";
export default function UseState() {
    const [count, setCount] = useState(1);
    const [text, setText] = useState("le meo"); 
    function handle_increase() {
        setCount( count + 1) // Count = Count + 1 (phai dung 1 bien thay the)
    }
    function handle_change_text() {
        setText("le ga")
    }
    console.log("render useState1") // render laf hien thi ra
    return(
        <div>
            <h1> Tim hieu useState 1</h1>
            <h2>Count{count}</h2>
            <button onClick={handle_increase}>Inscrease count</button>
            <h2> text: {text}</h2>
            <button onClick={handle_change_text}>Change text</button>
       </div>
    )
}