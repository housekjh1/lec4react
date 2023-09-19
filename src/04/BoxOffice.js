import { useState, useEffect } from "react";
import style from './BoxOffice.module.css';

const BoxOffice = () => {

    const [boxlist, setBoxList] = useState();
    const [listTag, setListTag] = useState();
    const [detailTag, setDetailTag] = useState();

    const handleClick = (item) => {
        console.log(item);
        if (item.rankOldAndNew === "NEW") {
            setDetailTag(
                <div className={style.design}>
                    <span>[{item.movieCd}]</span>
                    <span>개봉일 : {item.openDt}</span>
                    <span className={style.NEW}>{item.rankOldAndNew}</span>
                </div>
            );
        } else {
            setDetailTag(
                <div className={style.design}>
                    <span>[{item.movieCd}]</span>
                    <span>개봉일 : {item.openDt}</span>
                    <span className={style.OLD}>{item.rankOldAndNew}</span>
                </div>
            );
        }
    }

    useEffect(() => {// 컴포넌트 생성 시 한 번 실행
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => setBoxList(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err));
    }, []);

    // State 변수가 변경될 때마다 실행
    useEffect(() => {
        if (boxlist) {
            setListTag(boxlist.map((item, idx) =>
                <tr key={'mv' + idx} onClick={() => handleClick(item)}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
                    <td>{
                        parseInt(item.rankInten) === 0
                            ? "-"
                            : item.rankInten > 0
                                ? "▲" + Math.abs(item.rankInten)
                                : "▼" + Math.abs(item.rankInten)
                    }</td>
                </tr>
            ));
        }
    }, [boxlist]);

    return (
        <main className="container">
            <article>
                <header><h1>일일 박스오피스</h1></header>
                <table role="grid">
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTag}
                    </tbody>
                </table>
                <footer>
                    {detailTag}
                </footer>
            </article>
        </main>
    );
}

export default BoxOffice;