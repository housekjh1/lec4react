import Div1 from "../14/Div1";
import { useState, useEffect } from "react";

const DivMain = () => {
    const [n, setN] = useState(0);
    const [n2, setN2] = useState();
    useEffect(()=>{setN2(n*2)},[n]);
    return (
        <main className="container mx-auto">
            <div className="bg-green-900 mt-10 px-10 pb-10 rounded-lg">
                <div className="text-white py-5">
                    <div>DivMain</div>
                    <div>n={n}, n2={n2}</div>
                </div>
                <Div1 n={n} setN={setN} />
            </div>
        </main>
    )
}

export default DivMain
