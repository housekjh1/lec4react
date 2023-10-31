import { SiAmazoncloudwatch } from 'react-icons/si';
import { LiaHomeSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const FcstNav = () => {
    return (
        <div className="flex justify-between bg-sky-50 rounded-lg p-2 m-2 mt-5">
            <div className="flex flex-row items-center">
                <SiAmazoncloudwatch className='text-xl text-gray-500'/>
                <div className="text-lg font-bold text-gray-500 pl-1">기상청 예보</div>
            </div>
            <Link to='/'>
                <div className="flex items-center border-2 border-gray-300 rounded-lg p-1 hover:border-blue-300">
                    <LiaHomeSolid />
                </div>
            </Link>
        </div>
    )
}

export default FcstNav
