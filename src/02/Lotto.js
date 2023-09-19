import style from './Lotto.module.css';
import { useState } from 'react';

const Lotto = () => {

    let numArr = [];
    // let lottoTag = [];
    const [lottoTag, setLottoTag] = useState([]);// 변수명, 바꿀값, useState(초기값)

    const getNum = () => {
        numArr = [];
        while (numArr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (numArr.indexOf(n) < 0) {// 중복값 제거, 없을 경우 음수, 있을 경우 인덱스값 리턴
                numArr.push(n);
            }
        }

        // console.log(numArr);
        // lottoTag = numArr.map((item) => {// map(), 배열을 하나씩 순회
        //     <div className={style.lottonum}>1</div>
        // });
        setLottoTag(numArr.map((item) =>
            <div className={style.lottonum}>{item}</div>
        ));
        // console.log(lottoTag);
    }

    return (// 하나의 태그만 리턴이 가능 단, 자식 노드들은 제한없이 달고갈 수 있음, <></>프래그먼트 태그도 사용가능
        <main className="container">
            <article>
                <header>
                    <h1>로또생성기</h1>
                </header>
                <div className={style.lottobox}>
                    {lottoTag}
                </div>
                <footer>
                    <button onClick={() => getNum()}>생성하기</button>
                </footer>
            </article>
        </main>
    );

}

export default Lotto;