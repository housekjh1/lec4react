import { useState, useEffect, useRef } from "react";
import pusandata from './pusandata.json';
import ButtonBlue from "../comm/ButtonBlue";

const Busan = () => {
    const sel = useRef();
    const [options, setOptions] = useState();

    // console.log(pusandata);

    let code = [];
    code = pusandata.map((item) =>
        // [item.콘텐츠ID, item.콘텐츠명.replace(/ \<.*\>/, '').replace(/\(.*\)/, '')]
        // [item.콘텐츠ID, item.콘텐츠명.split('(')[0]]
        [item.콘텐츠ID, item.콘텐츠명.slice(0, item.콘텐츠명.lastIndexOf('('))]
    );

    const handleSearch = (e) => {
        e.preventDefault();
    }
    const handleReset = (e) => {
        e.preventDefault();
        sel.current.value = '';
    }

    useEffect(() => {
        console.log(code);
        sel.current.focus();

        let tmp = code.map(item => {
            return <option key={item[0]} value={item[0]}>{item[1]}</option>
        })

        setOptions(tmp);

    }, [])

    const changeSel = () => {
        console.log(sel.current.value);
    }

    return (
        <main className="container">
            <article>
                <header>
                    <div className="text-3xl font-bold">
                        부산축제정보 서비스
                    </div>
                </header>
                <form>
                    <div className="flex flex-row">
                        <div className="basis-3/5 mx-2">
                            <select ref={sel} id='sel' name='sel' onChange={changeSel}>
                                <option value=''>축제명을 선택하세요.</option>
                                {options}
                            </select>
                        </div>
                        <div className="basis-1/5 mx-2">
                            <ButtonBlue caption='조회' handleClick={(e) => handleSearch(e)} />
                        </div>
                        <div className="basis-1/5 mx-2">
                            <ButtonBlue caption='초기화' handleClick={(e) => handleReset(e)} />
                        </div>
                    </div>
                </form>
            </article>
        </main >
    )
}

export default Busan;
