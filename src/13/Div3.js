import ButtonBlue from '../comm/ButtonBlue';

const Div3 = ({ n, n2, set1, set2 }) => {
    let tmp = n;

    const handleAddClick = () => {
        tmp += 1;
        set1(tmp)
        set2(tmp * 2)
    }

    const handleSubClick = () => {
        tmp -= 1;
        set1(tmp)
        set2(tmp * 2)
    }

    const handleResetClick = () => {
        set1(0)
        set2(0)
    }

    return (
        <div className='bg-green-600 rounded-lg'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
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
