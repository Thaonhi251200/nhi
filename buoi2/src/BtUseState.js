import { useState } from 'react'
export default function BtUseState() {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [kq, setKq] = useState("")
    return (
        <div>
            <form>
                <label>nhap a: <input type='text' value={a} onChange={(e) => setA(e.target.value)} /></label><br/>
                <label>nhap b: <input type='text' value={b} onChange={(e) => setB(e.target.value)} /></label><br/>
            </form>
            <button onClick={()=>setKq(a*1+b*1)}>tinh tong</button><br/>
            <button onClick={()=>setKq(a-b)}>tinh hieu</button><br/>
            <button onClick={()=>setKq(a*b)}>tinh tich</button><br/>
            <button onClick={()=>setKq(a/b)}>tinh thuong</button><br/>
            <h2>kq: {kq}</h2>
        </div>
    )
}