import { useState } from "react";
import Div1 from "./Div1";

const DivMain = () => {
    const [n, setN] = useState(0);
    const [n2, setN2] = useState(0);
    return (
        <main className="container mx-auto">
            <div className="bg-green-900 p-10 my-10 rounded-lg">
                <div className="text-white mb-10">
                    <div>DivMain</div>
                    <div>n={n}</div>
                    <div>n2={n2}</div>
                </div>
                <Div1 n={n} n2={n2} set1={setN} set2={setN2} />
            </div>
        </main>
    )
}

export default DivMain
