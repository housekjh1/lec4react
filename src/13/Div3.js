import ButtonBlue from '../comm/ButtonBlue';

const Div3 = ({ n, setN }) => {
    const handleAddClick = () => {
        setN(n + 1)
    }

    const handleSubClick = () => {
        setN(n - 1)
    }

    const handleResetClick = () => {
        setN(0)
    }

    return (
        <div className='bg-green-600 rounded-lg'>
            <div className='text-white px-10 py-5'>
                Div3
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-10 pb-10'>
                <ButtonBlue caption={'증가'} handleClick={handleAddClick} />
                <ButtonBlue caption={'감소'} handleClick={handleSubClick} />
                <div className='md:col-span-2'>
                    <ButtonBlue caption={'리셋'} handleClick={handleResetClick} />
                </div>
            </div>
        </div>
    )
}

export default Div3
