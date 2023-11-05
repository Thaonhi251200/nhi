import { useRef } from "react";
import './App.css'
export default function App() {
    const sidebarRef = useRef()
    const rightRef = useRef()
    const handle_toggle = () => {
        sidebarRef.current.classList.toggle("active");
        rightRef.current.classList.toggle("active"); // cu phap goi doi tuong nhu js
    }
    return (
        <div>
            <div className="header">
                <button className="toggle" onClick={handle_toggle}>toggle</button>
                <div className="nav-side">
                    <div className="sidebar" ref={sidebarRef}>
                        {/* ref={} -> goi dia chi  */}
                        <button className="close" onClick={handle_toggle}>X</button>
                        <h2>sidebar</h2>
                    </div>
                </div>
                <div className="right" onClick={handle_toggle} ref={rightRef}> right

                </div>
            </div>



        </div>
    )
}