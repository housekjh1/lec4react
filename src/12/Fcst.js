import { BrowserRouter, Routes, Route } from "react-router-dom";
import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";
import FcstFetch from "./FcstFetch";

const Fcst = () => {
    return (
        <BrowserRouter>
            <main className="container mx-auto">
                <FcstNav />
                <Routes>
                    <Route path="/" element={<FcstMain />}></Route>
                    <Route path="/fetch/:dt/:area/:x/:y/:m" element={<FcstFetch />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Fcst
