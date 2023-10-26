import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import getcode from './getcode.json';

const VilageFcst = () => {
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [items, setItems] = useState();

    const ops = getcode
        .filter(item => item.예보구분 === "단기예보")
        .map(item => <option key={item.항목값} value={item.항목값}>{item.항목명}({item.항목값})({item.단위})</option>);

    const sel = useRef();

    const [trs, setTrs] = useState();

    useEffect(() => {
        const apiKey = `plzVJFqsOqtUcJRz1vXIKLJNwG41wF%2B3bIFSiNVK2UvAmPWaISX%2B%2BXlzG8ITZ8mzokDaMWoYxL248NM%2BolJUIg%3D%3D`;
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`;
        url += `?serviceKey=${apiKey}`;
        url += `&pageNo=1`;
        url += `&numOfRows=60`;
        url += `&dataType=JSON`;
        url += `&base_date=${dt}`;
        url += `&base_time=0500`;
        url += `&nx=${x}`;
        url += `&ny=${y}`;

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setItems(data.response.body.items.item)
            })
            .catch(err => console.log(err))

    }, []);

    useEffect(() => {
        console.log(items);
    }, [items]);

    const handleSel = () => {
        if (items === undefined) return;
        console.log(items.filter(item => item.category === sel.current.value))
        let tmp = items
            .filter(item => item.category === sel.current.value)
            .map((item, idx) =>
                <tr key={'tr' + idx}>
                    <td>{item.category}</td>
                    <td>{item.fcstTime}</td>
                    <td>{item.fcstValue}</td>
                </tr>
            );
        setTrs(tmp);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-lg font-bold text-gray-500">
                단기예보 : {area}({dt.substring(0, 4)}-{dt.substring(4, 6)}-{dt.substring(6, 8)})
            </div>
            <select ref={sel} id='sel' name='sel' onChange={handleSel}>
                <option value=''>항목선택</option>
                {ops}
            </select>
            <table className="w-full md:col-span-2">
                <thead>
                    <tr className="text-left">
                        <th>항목명</th>
                        <th>예측시간</th>
                        <th>항목값</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    )
}

export default VilageFcst
