import Div3 from "./Div3"
import { useRecoilValue } from "recoil"
import { DivAtom3 } from "./DivAtom"
const Div2 = () => {
    const n3 = useRecoilValue(DivAtom3);
    return (
        <div className='bg-green-700 px-10 pb-10 rounded-lg'>
            <div className='text-white py-5'>
                Div2<br />
                n3={n3}
            </div>
            <Div3 />
        </div>
    )
}

export default Div2
