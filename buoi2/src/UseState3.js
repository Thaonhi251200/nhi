import { useState} from 'react'
export default function UseState3(){
    const[ text, setText]= useState("")
    const[ a, setA]= useState("")
    const[ b, setB]= useState("")
    const[kq, setKq] = useState()

    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>Text: {text}</h2>
            <from>
                <label>nhap a <input type='text' value={a} onChange={(e)=>setA(e.target.value)}/></label> <br />
                <label>nhap b <input target='text' value={b} onChange={(e)=>setB(e.target.value)}/></label><br />
            </from>
            <button onClick={()=>setKq(a*1+b*1)}> tinh tong</button><br />
            <button onClick={()=>setKq(a-b)}> tinh hieu</button><br />
            <button onClick={()=>setKq(a*b)}> tinh tich</button><br />
            <button onClick={()=>setKq(a/b)}> tinh thuong</button><br />
            <h2>a: {a}</h2>
            <h2>b: {b}</h2>
            <h1>kq: {kq}</h1>
        </div>

    )
}