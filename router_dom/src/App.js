import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from "./Main";
import Foodter from "./Footer";
import Product from "./Product";
import './App.css'

export default function App() {
    return (
        <div id="contain">
            <BrowserRouter>
                <ul id="list">
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='main'> Main </Link>
                    </li>
                    <li>
                        <Link to='footer'> Footer </Link>
                    </li>
                     <li>
                        <Link to='product/1'> Product </Link>
                    </li>
                    <li>
                        <Link to='product/2'> Product </Link>
                    </li>
                </ul>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="main" element={<Main />}></Route>
                    <Route path="footer" element={<Foodter />}></Route>
                    <Route path="product/:id" element={<Product />}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}