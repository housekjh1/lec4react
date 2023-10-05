import Hh1 from '../comm/Hh1';
import TaccidentNav from './TaccidentNav';
import dataTaccident from './dataTaccident.json';
import { useState, useEffect } from 'react';
import style from './Taccident.module.css';

const Taccident = () => {

    // 오브젝트 값 가져오기
    // const tdata = dataTaccident["data"];
    const tdata = dataTaccident.data;

    // 배열 순회
    let c1 = tdata.map(item => item['사고유형_대분류']);
    c1 = [...new Set(c1)];

    // 대분류 선택
    const [sel1, setSel1] = useState();

    // 중분류
    const [c2, setC2] = useState();

    // 중분류 선택
    const [sel2, setSel2] = useState();

    useEffect(() => {
        if (!sel1) return;
        let temp = tdata.filter((item) => item.사고유형_대분류 === sel1);
        temp = temp.map((item) => item.사고유형_중분류);

        // let temp = 
        // tdata
        // .filter((item) => item.사고유형_대분류 === sel1)
        // .map((item) => item.사고유형_중분류);

        setC2(temp);
        setSel2();// 초기화
        setDivTag();// 초기화
        // console.log(temp);
    }, [sel1]);

    // 중분류 선택잡기
    useEffect(() => {
        if (!sel2) return;
        let temp = tdata.filter((item) => item.사고유형_대분류 === sel1 && item.사고유형_중분류 === sel2);
        temp = temp[0];// 결과는 오브젝트

        // 오브젝트 순회
        let k = Object.keys(temp).filter((item) => 
            (item !== '사고유형_대분류' && item !== '사고유형_중분류')
        );// 키 값만 빼기 -> 배열 리턴
        
        temp = k.map((item, idx) => 
            <div key={`d${idx}`}>{item} : <span className={style.cl}>{temp[item]}</span></div>
        );// item : 키값, temp오브젝트[item] : 해당 키값의 밸류 리턴

        setDivTag(temp);

    }, [sel2]);

    const [divTag, setDivTag] = useState();

    return (
        <main className='container'>
            <article>
                <Hh1 title='유형별 교통사고' />
                <TaccidentNav title='교통사고 대분류' c={c1} sel={sel1} setSel={setSel1} />
                {c2 && <TaccidentNav title='교통사고 중분류' c={c2} sel={sel2} setSel={setSel2} />}
                {divTag && <div className='grid'>{divTag}</div>}
            </article>
        </main>
    );
}

export default Taccident;