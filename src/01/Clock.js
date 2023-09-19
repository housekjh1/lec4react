import ClockImage from "./ClockImage";
import ClockTime from "./ClockTime";
import MyComN from "../03/MyComN";

const Clock = () => {

    return (
        <div className="App">
            <header className="App-header">
                <ClockImage />
                <ClockTime />
                <MyComN num={1000}/>
            </header>
        </div>
    );
}

export default Clock;