import ClockImage from "./ClockImage";
import ClockTime from "./ClockTime";

const Clock = () => {

    return (
        <div className="App">
            <header className="App-header">
                <ClockImage />
                <ClockTime />
            </header>
        </div>
    );
}

export default Clock;