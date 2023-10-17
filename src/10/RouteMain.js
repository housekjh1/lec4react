import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteHome from "./RouteHome";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";
import RouteNav from "./RouteNav";
import TailH1 from "../comm/TailH1";

const RouteMain = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <TailH1 title='react-router-dom으로 라우팅' />
                <RouteNav />
                <Routes>
                    <Route path='/' element={<RouteHome />} />
                    <Route path='/page1/:item' element={<RoutePage1 />} />
                    <Route path='/page2' element={<RoutePage2 />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default RouteMain
