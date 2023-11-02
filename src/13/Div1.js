import Div2 from './Div2'

const Div1 = ({ n, n2, set1, set2 }) => {
    return (
        <div className='bg-green-800 p-10 rounded-lg'>
            <Div2 n={n} n2={n2} set1={set1} set2={set2} />
        </div>
    )
}

export default Div1
