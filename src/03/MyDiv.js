import MyDiv1 from './MyDiv1';
import { useState } from 'react';

const MyDiv = () => {
    const [n, setN] = useState(0);

    const handleClick = (check) => {
        if (check) setN(n+1);
        else if (n > 0) setN(n-1);
    }

    return (
        <main className='container'>
            <article>
                <header><h1>probs div</h1></header>
                <MyDiv1 n={n}/>
                <footer>
                    <span onClick={() => handleClick(true)}>💗</span><span>{n}</span>
                    <span onClick={() => handleClick(false)}>👎</span>
                </footer>
            </article>
        </main>
    );
}

export default MyDiv;