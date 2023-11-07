import Div1 from "./Div1";
import { DivAtom } from "./DivAtom";
import { useRecoilValue } from "recoil";

const DivMain = () => {
    const n = useRecoilValue(DivAtom);
    return (
        <main className="container mx-auto">
            <div className="bg-green-900 mt-10 px-10 pb-10 rounded-lg">
                <div className="text-white py-5">
                    DivMain<br />
                    n={n}
                </div>
                <Div1 />
            </div>
        </main>
    )
}

export default DivMain
