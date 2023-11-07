import Div2 from '../14/Div2'

const Div1 = ({ n, setN }) => {
    return (
        <div>
            <div className='bg-green-800 px-10 pb-10 rounded-lg'>
                <div className='text-white py-5'>
                    Div1
                </div>
                <Div2 n={n} setN={setN} />
            </div>
        </div>
    )
}

export default Div1
