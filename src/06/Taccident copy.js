import Hh1 from '../comm/Hh1';
import data from './dataTaccident.json';

const Taccident = () => {

    const tdata = data.data;

    let c1 = tdata.map(item => item.사고유형_대분류);
    c1 = [...new Set(c1)];// new Set(변수명) Set(키값X, 밸류만 존재)형으로 생성, [...변수명] -> Set 배열화
    let c2 = tdata.map(item => item.사고유형_중분류);
    c2 = new Set(c2);
    c2 = [...c2];
    console.log(c2);

    let c1Tag = c1.map((item, idx) =>
        <li key={`li${idx}`}><button>{item}</button></li>
    );
    
    let c2Tag = c2.map((item, idx) => 
        <li key={`li2${idx}`}><button>{item}</button></li>
    );

    return (
        <main className="container">
            <article>
                <Hh1 title='도로교통공단_사고유형별 교통사고 통계' />
                <nav>
                    <ul>
                        <li><strong>대분류</strong></li>
                    </ul>
                    <ul>
                        {c1Tag}
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><strong>중분류</strong></li>
                    </ul>
                    <ul>
                        {c2Tag}
                    </ul>
                </nav>
            </article>
        </main>
    );
}

export default Taccident;
