import { Link } from "react-router-dom";
import TailH1 from "../comm/TailH1";

const RouteHome = () => {
    return (
        <article>
            <TailH1 title='Page1 이동' />
            <ul>
                <li><Link to='/page1/사과' />사과</li>
                <li><Link to='/page1/바나나' />바나나</li>
                <li><Link to='/page1/당근' />당근</li>
            </ul>
        </article>
    )
}

export default RouteHome
