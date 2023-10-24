import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UltraSrtFcst = () => {
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [items, setItems] = useState();

    useEffect(() => {
        const apiKey = `plzVJFqsOqtUcJRz1vXIKLJNwG41wF%2B3bIFSiNVK2UvAmPWaISX%2B%2BXlzG8ITZ8mzokDaMWoYxL248NM%2BolJUIg%3D%3D`;
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`;
        url += `?serviceKey=${apiKey}`;
        url += `&numOfRows=60`;
        url += `&pageNo=1`;
        url += `&base_date=${dt}`;
        url += `&base_time=0630`;
        url += `&nx=${x}`;
        url += `&ny=${y}`;
        url += `&dataType=json`;

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

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="font-bold text-xl">
                초단기예보 : {area}({dt.substring(0, 4)}-{dt.substring(4, 6)}-{dt.substring(6, 8)})
            </div>
            <div>
                <select id='sel' name='sel'>
                    <option value=''>항목선택</option>
                </select>
            </div>
        </div>
    )
}

export default UltraSrtFcst
