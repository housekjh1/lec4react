import { useLocation } from "react-router-dom";
import qs from "query-string";

const RoutePage2 = () => {
    const loc = useLocation().search;
    const item = qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;
    console.log(item2)
    return (
        <article>
            Page2 : item = {item}, item2 = {item2}
        </article>
    )
}

export default RoutePage2
