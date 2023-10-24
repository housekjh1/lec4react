import { BrowserRouter, Routes, Route } from "react-router-dom";
import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./VilageFcst";

const Fcst = () => {
    return (
        <BrowserRouter>
            <main className="container mx-auto">
                <FcstNav />
                <article>
                    <Routes>
                        <Route path="/" element={<FcstMain />} />
                        <Route path="/ultra/:dt/:area/:x/:y" element={<UltraSrtFcst />} />
                        <Route path="/vilage/:dt/:area/:x/:y" element={<VilageFcst />} />
                    </Routes>
                </article>
            </main>
        </BrowserRouter>
    )
}

export default Fcst
