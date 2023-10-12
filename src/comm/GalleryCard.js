
const GalleryCard = ({ probs, refv, set }) => {

    let tmp = probs.galSearchKeyword.split(", ");

    let result = tmp.map((item, idx) =>
        <span onClick={() => handleClick(item)} key={`idx${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>
    )

    const handleClick = (item) => {
        console.log(item);
        refv.current.value = item;
        set(refv.current.value);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={probs.galWebImageUrl.replace('http:', 'https:')} alt={probs.galTitle} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{probs.galTitle}</div>
                <p className="text-gray-700 text-base">
                    {probs.galPhotographyLocation}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {result}
            </div>
        </div>
    )
}

export default GalleryCard
