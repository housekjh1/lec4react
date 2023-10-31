import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Ultra from "./Ultra";

const FcstFetch = () => {
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;
    const m = useParams().m;
    const [items, setItems] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        let url = '';

        if (m === '1') {
            url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`;
            url += `?serviceKey=${apiKey}`;
            url += `&pageNo=1`;
            url += `&numOfRows=60`;
            url += `&dataType=json`;
            url += `&base_date=${dt}`;
            url += `&base_time=0630`;
            url += `&nx=${x}`;
            url += `&ny=${y}`;
        }
        else if (m === '2') {
            url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`;
            url += `?serviceKey=${apiKey}`;
            url += `&pageNo=1`;
            url += `&numOfRows=60`;
            url += `&dataType=json`;
            url += `&base_date=${dt}`;
            url += `&base_time=0500`;
            url += `&nx=${x}`;
            url += `&ny=${y}`;
        }

        fetch(url)
            .then(resp => resp.json())
            .then(data =>
                setItems(data.response.body.items.item)
            )
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        console.log(items)
    }, [items])

    return (
        <div>
            <Ultra dt={dt} area={area} m={m} items={items} />
        </div>
    )
}

export default FcstFetch
