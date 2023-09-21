import { useState, useEffect } from "react";// use% == 사용자 정의 훅

const ClockTime = () => {
    // 일반 변수로 처리 => 재렌더링이 되지 않음
    // let dt = new Date().toLocaleTimeString();

    // setInterval(() => {// 비동기, 1초 후 실행
    //     dt = new Date().toLocaleTimeString();
    //     console.log(dt);
    // }, 1000);

    // useState변수, 상태변수
    const [dt, setDt] = useState(new Date().toLocaleTimeString());

    // useEffect는 함수, dependency array[] -> 처음 한 번만 실행
    useEffect(() => {
        const t = setInterval(() => {// 비동기, 1초 후 실행
            setDt(new Date().toLocaleTimeString());// const변수 dt는 setDt메서드를 이용해서 값변경해야함
        }, 1000);
        return () => {clearInterval(t)};// 컴포넌트 사라졌을 때 인터벌 종료(콜백 함수로 작성해야 계속 돌아감 -> 매개변수를 사용할 시)
    }, []);

    // useEffect : dependency array[변수], 특정 변수가 바뀔 때 실행
    useEffect(() => {
        console.log(dt);
    }, [dt]);

    return (
        <>
            <p>
                Hello React !!
            </p>
            <div>현재시간 : {dt}</div>
        </>
    );
}

export default ClockTime;