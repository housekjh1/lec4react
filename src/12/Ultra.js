import { useState } from "react";
import TailH1 from "../comm/TailH1";
import TailSelect from "../comm/TailSelect";
import TailTable from "../comm/TailTable";
import getcode from "./getcode.json";

const Ultra = ({ dt, area, m, items }) => {
    const gubun = (m === '1') ? "초단기예보" : "단기예보";
    const [tbitem, setTbitem] = useState();

    let ultraTitle = area + ' ';
    ultraTitle += gubun;
    ultraTitle += '(' + dt.substring(0, 4) + '-' + dt.substring(4, 6) + '-' + dt.substring(6, 8) + ')';

    const opItem = getcode
        .filter(item => item['예보구분'] === gubun)
        .map(item => [item['항목값'], item['항목명'] + '(' + item["항목값"] + ')'])

    const handleSelChange = (e) => {
        const sky = {'1':'☀', '3':'🌥', '4':'☁'}
        const pty = {'0':'없음', '1':'비', '2':'비/눈', '3':'눈', '4':'소나기', '5':'빗방울', '6':'빗방울눈날림', '7':'눈날림'}
        let itemName = getcode.filter((item) => item['항목값'] === e.target.value && item['예보구분'] === gubun)[0];
        let tmp = { 'th': ['항목명', '예측시간', '항목값', '단위'] };
        tmp['tr'] = items.filter((item) => item['category'] === e.target.value)
                        .map((item) => {
                            return [itemName['항목명'], item['fcstTime'], 
                            item['category'] === 'SKY' ? sky[item['fcstValue']] : item['category'] === 'PTY' ? pty[item['fcstValue']] : item['fcstValue'], 
                            (item['category'] === 'SKY' || item['category'] === 'PTY') ? '' : itemName['단위']]
                        })
        console.log(tmp)
        setTbitem(tmp);
    }

    return (
        <section className="flex flex-col justify-center align-middle p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 my-5">
                <div>
                    <TailH1 title={ultraTitle} />
                </div>
                <div>
                    <TailSelect id={'sel'} opItem={opItem} handleChange={handleSelChange} />
                </div>
                <div className="md:col-span-2">
                    {tbitem && <TailTable tbitem={tbitem} />}
                </div>
            </div>
        </section>
    )
}

export default Ultra
