
const GalleryCard1 = ({ probs }) => {

    // let tmp = probs.주요장소;
    // tmp = tmp.indexOf(',') != -1 ? probs.주요장소.split(', ') : probs.주요장소;
    // console.log(tmp);

    // let result = tmp.map((item, idx) =>
    //     <span key={`idx${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>
    // )

    return (
        <div className="basis-1/5 mx-2 my-2">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={probs.썸네일이미지URL} alt={probs.콘텐츠명.slice(0, probs.콘텐츠명.lastIndexOf('('))} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{probs.콘텐츠명.slice(0, probs.콘텐츠명.lastIndexOf('('))}</div>
                    <p className="text-gray-700 text-base">
                        {probs.제목}
                    </p>
                    <p className="text-gary-700 text-xs my-2">
                        {/* {probs.ITEMCNTNTS.replace(/<\/?p[^>]*>/g, ' ').slice(0, 100).slice(0, probs.ITEMCNTNTS.replace(/<\/?p[^>]*>/g, ' ').slice(0, 100).lastIndexOf('. ')) + `...`} */}
                        {probs.상세내용.replace(/<\/?p[^>]*>/g, ' ').slice(0, 100) + `...`}
                    </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                {result}
            </div> */}
            </div>
        </div>
    )
}

export default GalleryCard1
