import style from './Lotto.module.css'

// const LottoNums = (probs) => {
const LottoNums = ({ ns }) => {
    // console.log("LottoNums=", probs.ns);
    console.log("LottoNums=", ns);

    // const nsTag = ns.map((item, idx) => {
    // item < 10 ? <div className={style.lottonum0}>{item}</div> :
    // item < 20 ? <div className={style.lottonum1}>{item}</div> :
    // item < 30 ? <div className={style.lottonum2}>{item}</div> :
    // item < 40 ? <div className={style.lottonum3}>{item}</div> :
    // <div className={style.lottonum4}>{item}</div>

    // let temp;
    // if (item < 10) temp = <div key={'ns'+idx} className={style.lottonum0}>{item}</div>;
    // else if (item < 20) temp = <div key={'ns'+idx} className={style.lottonum1}>{item}</div>;
    // else if (item < 30) temp = <div key={'ns'+idx} className={style.lottonum2}>{item}</div>;
    // else if (item < 40) temp = <div key={'ns'+idx} className={style.lottonum3}>{item}</div>;
    // else temp = <div key={'ns'+idx} className={style.lottonum4}>{item}</div>;

    // let n;
    // if (item < 10) n = 0;
    // else if (item < 20) n = 1;
    // else if (item < 30) n = 2;
    // else if (item < 40) n = 3;
    // else n = 4;
    // let n = Math.floor(item / 10);
    // switch (n) {
    //     case 0: temp = <div key={'ns' + idx} className={style.lottonum0}>{item}</div>; break;
    //     case 1: temp = <div key={'ns' + idx} className={style.lottonum1}>{item}</div>; break;
    //     case 2: temp = <div key={'ns' + idx} className={style.lottonum2}>{item}</div>; break;
    //     case 3: temp = <div key={'ns' + idx} className={style.lottonum3}>{item}</div>; break;
    //     case 4: temp = <div key={'ns' + idx} className={style.lottonum4}>{item}</div>; break;
    // }

    // let ncss = style[`lottonum${n}`];
    // temp = <div key={'ns' + idx} className={ncss}>{item}</div>;
    // temp = <div key={'ns' + idx} className={style[`lottonum${n}`]}>{item}</div>;

    // return temp;
    // <div key={'ns' + idx} className={style[`lottonum${n}`]}>{item}</div>;
    // });

    // Object 타입을 순회하려면 map 사용
    let nsTag = ns.map((item, idx) => {

        let n = Math.floor(item / 10);

        return (
            idx === (ns.length - 1)
                ? <div key={'ns' + idx} className={style.plus}>+</div>
                : <div key={'ns' + idx} className={style[`lottonum${n}`]}>{item}</div>
        );
        // if (idx < 6) return <div key={'ns' + idx} className={style[`lottonum${n}`]}>{item}</div>
        // else return <><div className={style.f}>+</div><div key={'ns' + idx} className={style[`lottonum${n}`]}>{item}</div></>
    });

    // 배열 at(-1)으로 마지막 요소 가져오기
    // 리액트에서는 <div>태그 사용 시 각각에 고유 키값을 지정해주지 않으면 콘솔에 에러발생
    let n = Math.floor(ns.at(-1) / 10);
    nsTag.push(
        <div key={'ns' + ns.length - 1} className={style[`lottonum${n}`]}>{ns.at(-1)}</div>
    );

    return (
        <div className={style.lottobox}>
            {nsTag}
        </div>
    );
}

export default LottoNums;
