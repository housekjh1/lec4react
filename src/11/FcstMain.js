import { useState, useEffect, useRef } from "react";
import getxy from './getxy.json';
import { Link } from "react-router-dom";

const FcstMain = () => {
    const dtRef = useRef();
    const selRef = useRef();
    const [dt, setDt] = useState('');
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [area, setArea] = useState();

    const ops = getxy.map(item =>
        <option key={item.행정구역코드} value={item["행정구역코드"]}>{item["1단계"]}</option>
    );

    useEffect(() => {
        dtRef.current.focus();
        console.log(getxy);
    }, [])

    const handleDtChange = () => {
        setDt(dtRef.current.value.replaceAll('-', ''));
    }

    useEffect(() => {
        // console.log("dt", dt);
    }, [dt])

    const handleSelChange = () => {
        if (selRef.current.value === '') {
            setArea();
            setX();
            setY();
            return;
        }
        let tmp = getxy.filter((item) =>
            item.행정구역코드 === parseInt(selRef.current.value)
        )[0];
        console.log("tmp", tmp);
        setArea(tmp["1단계"]);
        setX(tmp["격자 X"]);
        setY(tmp["격자 Y"]);
    }

    useEffect(() => {
        console.log("area, x, y :", area, x, y);
    }, [area, x, y])

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-lg font-bold text-gray-500">단기예보 입력정보</div>
                <div></div>
                <div>{dt && `${dt.substring(0, 4)}-${dt.substring(4, 6)}-${dt.substring(6, 8)}`}</div>
                <div>{area && `${area}, ${x}, ${y}`}</div>
                <input ref={dtRef} type="date" id='dt' name='dt' onChange={handleDtChange}></input>
                <select ref={selRef} id='sel' name='sel' onChange={handleSelChange}>
                    <option value=''>지역선택</option>
                    {ops}
                </select>
                {
                    (dt === '') | (x === undefined)
                        ? <button className="text-center font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 p-2">초단기예보</button>
                        : <Link to={`/ultra/${dt}/${area}/${x}/${y}`}><div className="text-center font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 p-2">초단기예보</div></Link>
                }
                {
                    (dt === '') | (x === undefined)
                        ? <button className="text-center font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 p-2">단기예보</button>
                        : <Link to={`/vilage/${dt}/${area}/${x}/${y}`}><div className="text-center font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 p-2">단기예보</div></Link>
                }
            </div>
        </div >
    )
}

export default FcstMain
