import Hh1 from "../comm/Hh1";
import data from "./dataFrcst.json";
import style from "./Frcst.module.css";
import { useState, useEffect } from "react";

const Frcst = () => {

    const dtkey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnkey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    // state 변수
    const [cnTag, setCnTag] = useState([]);

    let dtcn = {};
    dtkey.map((item, idx) =>
        dtcn[data[item]] = data[cnkey[idx]]// 오브젝트[키값] = 밸류값
    );

    //날짜영역 만들기
    let dtTag = Object.keys(dtcn).map((item, idx) =>
        <div
            key={`dtcn${idx}`}
            className={style.dtcnkey}
            onClick={() => handleClick(item)}
        >
            {item}
        </div>
    );

    // 날짜가 클릭 되었을 때
    const handleClick = (k) => {
        let temp = dtcn[k].split(',');
        temp = temp.map((item, idx) => {
            let spItem = item.split(':');
            return (
                <div key={`cn` + idx}>
                    <span className={style.sp1}>{spItem[0]}</span>
                    {
                        spItem[1].trim() === '낮음'
                            ? <span className={style.sp21}>{spItem[1]}</span>
                            : spItem[1].trim() === '보통'
                                ? <span className={style.sp22}>{spItem[1]}</span>
                                : <span className={style.sp23}>{spItem[1]}</span>
                    }
                </div>
            );
        });
        setCnTag(temp);
    }

    useEffect(() => {
        // console.log("cnTag", cnTag)
    }, [cnTag]);

    return (
        <main className="container">
            <article>
                <Hh1 title='미세먼지확인' />
                <div className="grid">
                    {dtTag}
                </div>
                <div className="grid">
                    {cnTag}
                </div>
            </article>
        </main>
    );
}

export default Frcst;