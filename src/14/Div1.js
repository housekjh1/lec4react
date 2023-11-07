import Div2 from './Div2';
import { useRecoilValue } from 'recoil';
import { DivAtom2 } from './DivAtom';

const Div1 = () => {
    const n2 = useRecoilValue(DivAtom2);
    return (
        <div>
            <div className='bg-green-800 px-10 pb-10 rounded-lg'>
                <div className='text-white py-5'>
                    Div1<br />
                    n2={n2}
                </div>
                <Div2 />
            </div>
        </div>
    )
}

export default Div1
