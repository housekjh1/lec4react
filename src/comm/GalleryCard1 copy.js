
// const GalleryCard1 = ({ probs }) => {

//     // let tmp = probs.galSearchKeyword.split(", ");

//     // let result = tmp.map((item, idx) =>
//         // <span key={`idx${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>
//     // )
    
//     return (
//         <div className="max-w-sm rounded overflow-hidden shadow-lg">
//             <img className="w-full" src={probs.MAIN_IMG_THUMB} alt={probs.MAIN_TITLE.slice(0, probs.MAIN_TITLE.lastIndexOf('('))} />
//             <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{probs.MAIN_TITLE.slice(0, probs.MAIN_TITLE.lastIndexOf('('))}</div>
//                 <p className="text-gray-700 text-base">
//                     {probs.TITLE}
//                 </p>
//                 <p className="text-gary-700 text-xs my-2">
//                     {probs.ITEMCNTNTS.replace(/<\/?p[^>]*>/g, ' ').slice(0, 100).slice(0, probs.ITEMCNTNTS.replace(/<\/?p[^>]*>/g, ' ').slice(0, 100).lastIndexOf('. ')) + `...`}
//                 </p>
//             </div>
//             {/* <div className="px-6 pt-4 pb-2">
//                 {result}
//             </div> */}
//         </div>
//     )
// }

// export default GalleryCard1
