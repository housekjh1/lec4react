import Div3 from './Div3'

const Div2 = ({ n, setN }) => {
    return (
        <div className='bg-green-700 px-10 pb-10 rounded-lg'>
            <div className='text-white py-5'>
                Div2
            </div>
            <Div3 n={n} setN={setN} />
        </div>
    )
}

export default Div2
