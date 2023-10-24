import { useState, useEffect, useRef } from "react";
import getxy from './getxy.json';
import { Link } from "react-router-dom";

const FcstMain = () => {
    const dtRef = useRef();
    const selRef = useRef();
    const [dt, setDt] = useState();
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
        let tmp = getxy.filter((item) =>
            item.행정구역코드 === parseInt(selRef.current.value)
        )[0];
        console.log("tmp", tmp);
        setArea(tmp["1단계"]);
        setX(tmp["격자 X"]);
        setY(tmp["격자 Y"]);
    }

    useEffect(() => {
        console.log("area", area);
        console.log("x", x);
        console.log("y", y);
    }, [area, x, y])

    return (
        <div>
            <header>
                <span className="text-lg font-bold text-gray-500">단기예보 입력정보</span>
            </header>
            <form className="mt-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input ref={dtRef} type="date" id='dt' name='dt' onChange={handleDtChange}></input>
                    <select ref={selRef} id='sel' name='sel' onChange={handleSelChange}>
                        <option value=''>지역선택</option>
                        {ops}
                    </select>
                    <Link to={`/ultra/${dt}/${area}/${x}/${y}`}><div className="text-center font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 p-2"><button>초단기예보</button></div></Link>
                    <Link to={`/vilage/${dt}/${area}/${x}/${y}`}><div className="text-center font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 p-2"><button>단기예보</button></div></Link>
                </div>
            </form>
        </div>
    )
}

export default FcstMain
