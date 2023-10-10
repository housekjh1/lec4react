import GalleryCard from "./GalleryCard";

const GalleryItem = ({ data1 }) => {
    console.log("GalleryItem", data1);

    const tags = data1.map((item) =>
        <GalleryCard key={item.galContentId} probs={item}/>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-38">
            {tags}
        </div>
    )
}

export default GalleryItem
