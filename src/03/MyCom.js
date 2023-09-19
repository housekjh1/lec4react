import MyComN from "./MyComN";

const MyCom = () => {
    let n = 10;

    return (
        <main className="container">
            <article>
                <header>MyCom</header>
                <MyComN num={n}/>
                <MyComN num='1'/>
                <MyComN num='2'/>
                <MyComN num={n*10}/>
            </article>
        </main>
    );
}

export default MyCom;