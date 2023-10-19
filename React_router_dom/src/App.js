import Footer from "./Foodter";
import Home from "./Home";
import Main from "./Main";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Product from "./Product";

export default function App() {
    return (
        <div>
            {/* */}
            {/* <Main/> */}

            {/* <ul>
                <li>
                    <a href="/">Home</a> 
                     / la trang hien thi dau tien
                </li>
                <li>
                    <a href="main">Main</a>
                </li>
                <li>
                    <a href="footer">Footer</a>
                </li>
            </ul> */}
            <BrowserRouter>
                {/* co the thay the bang the link , thong thuowng se sd the link de theo cu phap */}
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        {/*  / lLink trLinkng hien thi dLinku tien */}
                    </li>
                    <li>
                        <Link to="main">Main</Link>
                    </li>
                    <li>
                        <Link to="footer">Footer</Link>
                    </li>
                    <li>
                        <Link to="product/1">Product 1</Link>
                    </li>
                    <li>
                        <Link to="product/2">Product 2</Link>
                    </li>
                </ul>
                <Routes>
                    {/* hoc thuoc */}
                    <Route index element={<Home />}></Route>
                    {/* index element cu pham cua / */}
                    <Route path="main" element={<Main />}></Route>
                    <Route path="Footer" element={<Footer />}></Route>
                    <Route path="product/:id" element={<Product />}></Route>

                </Routes>

            </BrowserRouter>
        </div>
    )
}