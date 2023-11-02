import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TailH1 from '../comm/TailH1';
import TailSelect from '../comm/TailSelect';
import ButtonBlue from '../comm/ButtonBlue';
import getxy from './getxy.json';

const FcstMain = () => {
    const [dt, setDt] = useState();
    const [area, setArea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const inDt = useRef();

    const opItem = getxy.map((item) =>
        [item['격자 X'] + '-' + item['격자 Y'] + '-' + item['1단계'], item['1단계']]
    )

    const handleDtChange = (e) => {
        if (e.target.value === '') {
            setDt();
            return;
        }
        setDt(e.target.value.replaceAll('-', ''));

    }

    const handleSelChange = (e) => {
        console.log(e.target.value)
        let tmp = e.target.value.split('-')
        setX(tmp[0])
        setY(tmp[1])
        setArea(tmp[2])
    }

    const handleBtClick = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        // 오늘날짜 기본설정
        const today = new Date();
        let y = `${today.getFullYear()}`;
        let m = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`;
        let d = today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`;

        inDt.current.value = `${y}-${m}-${d}`;
        setDt(y + m + d)
        inDt.current.focus();
    }, [])

    useEffect(() => {
        console.log("dt", dt)
        console.log("x", x)
        console.log("y", y)
        console.log("area", area)
    }, [dt, x, y, area])

    return (
        <section>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 my-5">
                    <div className='col-span-2'>
                        <TailH1 title="기상청 예보 정보입력" />
                    </div>
                    <div>
                        <input ref={inDt} type='date' id='dt' name='dt' onChange={handleDtChange} />
                    </div>
                    <div>
                        <TailSelect id={'sel'} opItem={opItem} handleChange={handleSelChange} />
                    </div>
                    <div>
                        {
                            x ?
                                <Link to={`/fetch/${dt}/${area}/${x}/${y}/1`}><ButtonBlue caption='초단기예보' /></Link>
                                : <ButtonBlue caption='초단기예보' handleClick={handleBtClick} />
                        }
                    </div>
                    <div>
                        {
                            x ?
                                <Link to={`/fetch/${dt}/${area}/${x}/${y}/2`}><ButtonBlue caption='단기예보' /></Link>
                                : <ButtonBlue caption='단기예보' handleClick={handleBtClick} />
                        }
                    </div>
                </div>
            </form>
        </section>
    )
}

export default FcstMain
