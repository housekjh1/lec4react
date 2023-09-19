import MyComN from "./MyComN";
import MyDiv from "./MyDiv";

const MyCom = () => {
    // let n = undefined;
    let n = 10;
    let comTag = n;

    if (n === undefined) {
        comTag = <div>값이 없습니다.</div>
    } else {
        comTag = <MyComN n={n} n1={n * 2} />
    }
    // n === undefined ? <div>값이 없습니다.</div> : <MyComN n={n} n1={n * 2}
    // comTag
    // n && <MyComN n={n} n1={n * 2} />
    return (
        <MyDiv n={n} n1={n * 2} />
    );

}

export default MyCom;