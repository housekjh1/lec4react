import { Link } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { SiAmazoncloudwatch } from "react-icons/si";

const FcstNav = () => {
    return (
        <nav className="flex justify-between items-center my-5 p-2.5 bg-sky-50">
            <ul>
                <li className="flex flex-row justify-center items-center text-2xl font-bold text-gray-700"><SiAmazoncloudwatch /><span className="ml-2">기상청 예보</span></li>
            </ul>
            <ul>
                <li><Link to="/"><LiaHomeSolid className="text-4xl border-solid border-2 border-gray-300 hover:border-blue-300 rounded-lg p-1" /></Link></li>
            </ul>
        </nav>
    )
}

export default FcstNav
