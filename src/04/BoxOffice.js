import Hh1 from '../comm/Hh1';
import style from './BoxOffice.module.css';
import { useRef, useState, useEffect } from 'react';

const BoxOffice = () => {
    // 날짜선택
    const dt = useRef();

    // 선택된 날짜
    const [cdt, setCdt] = useState();

    // 컴포넌트 생성 시 한 번 실행
    useEffect(() => {
        dt.current.focus();

        // let date = new Date();
        // let yyyy = date.getFullYear().toString();
        // let mm = (date.getMonth() + 1);
        // mm = parseInt(mm) < 10 ? '0' + (mm.toString()) : mm.toString();
        // let dd = (date.getDate() - 1);
        // dd = parseInt(dd) < 10 ? '0' + (dd.toString()) : dd.toString();
        // setCdt(yyyy + mm + dd);

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let y = `${yesterday.getFullYear()}`;
        let m = yesterday.getMonth() + 1 < 10 ? `0${yesterday.getMonth() + 1}` : `${yesterday.getMonth() + 1}`;
        let d = yesterday.getDate() < 10 ? `0${yesterday.getDate()}` : `${yesterday.getDate()}`;

        // 어제 날짜로 기본값 설정
        dt.current.value = `${y}-${m}-${d}`;// 연월일 형식으로 입력해야 들어감
        setCdt(y + m + d);
    }, []);

    useEffect(() => {
        console.log(cdt);

        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${cdt}`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                let tmp = data.boxOfficeResult.dailyBoxOfficeList;
                console.log(tmp);
            })
            .catch(err => console.log(err));
    }, [cdt]);

    const [boxList, setBoxList] = useState();
    const [detailTag, setDetailTag] = useState();

    // 날짜가 변경되었을 때
    const handleChange = () => {
        let tmp = dt.current.value.replaceAll('-', '');
        setCdt(tmp);
    }

    return (
        <main className='container'>
            <section className={style.sec}>
                <Hh1 title='박스오피스' />
            </section>
            <article>
                <header>
                    <div className={style.dtsel}>날짜선택 : {cdt}</div>
                    <form>
                        <input ref={dt} type='date' id='dt' name='dt' onChange={handleChange} />
                    </form>
                </header>
                <table role='grid'>
                    <thead>
                        <tr>
                            <th scope='col'>순위</th>
                            <th scope='col'>제목</th>
                            <th scope='col'>매출액</th>
                        </tr>
                    </thead>
                    {detailTag}
                </table>
            </article>
        </main>
    );
}

export default BoxOffice;
